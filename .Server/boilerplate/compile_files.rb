#
#   helper tools 
#
    require 'pathname'
    require 'FileUtils'
    require 'filewatcher'



    # create a bash process that receives std input from doing -"echo hello"
    require 'open3'
    $std_in, $std_out_and_error, $thread_ = Open3.popen2e('bash;')
    class String
        # make -"" strings be shell commands that include stderr
        def -@
            $std_in.puts(self+";printf '%s\\0\\n'\n")
            puts "hello"
            the_next_line = $std_out_and_error.gets
            puts "the next line is: #{the_next_line}"
            output = ""
            while the_next_line != "\u0000\n"
                output += the_next_line
                the_next_line = $std_out_and_error.gets
                p "the next line is: #{the_next_line}"
            end
            return output
        end#def
    end#String

    def unindent (string_ , indentation_="    ")
        if indentation_.is_a? Numeric
            indentation_ = ' '*indentation_
        end#if
        string_.gsub( /^#{indentation_}/, '')
    end#indent 

    class String
        def mgsub(key_value_pairs=[].freeze)
            # got this from https://www.safaribooksonline.com/library/view/ruby-cookbook/0596523696/ch01s18.html
            # example: 
                # "GO HOME!".mgsub([[/.*GO/i, 'Home'], [/home/i, 'is where the heart is']])
                # # => "Home is where the heart is!"
            regexp_fragments = key_value_pairs.collect { |k,v| k }
            gsub(  Regexp.union(*regexp_fragments)) do |match|
                key_value_pairs.detect{|k,v| k =~ match}[1]
            end
        end
    end
    $routeNumber = 0

    def basename(string_path)
        return "#{Pathname.new(string_path).basename}"
    end

    def exists(string_path)
        return File.exist?(string_path) || File.directory?(string_path)
    end

    def indent (string_ , indentation_="    ")
        if indentation_.is_a? Numeric
            indentation_ = ' '*indentation_
        end#if
        string_.gsub( /^/, indentation_)
    end#indent

    def readFile(file_name)
        the_file = File.open(file_name)
        content = the_file.read
        return content
    end 

    def code_generate(module_name,each)
        return <<-HEREDOC
            LoadModule = async function(Parent) 
                {
                    // so attached listeners know who attached them
                    Global.SystemVars.CurrentOrigin = "#{module_name}"
                    // create the module in an object so that DangerousEval can be used 
                    const #{module_name} = 
                        {
                            Node: document.createElement("module"),
                            Load: async function()
                                {
                                    "use strict"
                                    \n#{indent(readFile(each),(9*4))}
                                }
                        }
                    // set the id
                    #{module_name}.Node.id = "#{module_name}"
                    // setup DangerousEval
                    const DangerousEval = Global.Eval.bind(#{module_name})
                    // set Loading
                    Global.SystemVars.Loading.push(#{module_name})
                    
                    //
                    // load module 
                    //
                    await #{module_name}.Load()
                    
                    // attach to parent
                    Parent.add(#{module_name}.Node)
                    // turn off loading
                    Global.SystemVars.Loading.pop()
                    // turn off the CurrentOrigin since the module is done loading
                    Global.SystemVars.CurrentOrigin = undefined
                }
            HEREDOC
    end 

    def routes_as_string(routes_hash)
        routes_begining  = <<-HEREDOC
        def SystemRoutes(): #this is name-specific
                        print("setting system routes")
        
                        # root directory
                        @Route('/')
                        def root():
                            return  render_template("Home.html")
        HEREDOC
        routes_begining = unindent(routes_begining,'        ')
        for each_key in routes_hash
            routes_begining += each_key[1]
        end
        return routes_begining
    end 
    def save(string,to:nil)
        new_file = File.open(to, "w")
        new_file.write(string)
        new_file.close
    end

    def file_name_escape(input_)
        name_ = "#{input_}"
        # :'s are not allowed in file names, they're replaced with →
        name_.sub!(":","•")  
        # /'s are not allowed in file names, they're replaced with →
        name_.sub!("\/","→") 
        return name_
    end

    def route_for_page(name_)
        # increment the route number 
        $routeNumber = $routeNumber + 1

        # create the python escape stuff
        name_.sub!("\\","\\\\") 
        name_.sub!("'","\\'")

        # FIXME, check for <name>'s in the name so they can be added as input vars
        return ["/#{name_}", <<-HEREDOC
                @Route('/#{name_}')
                def route#{$routeNumber}():
                    return  render_template('#{file_name_escape("#{name_}")}.html')

                @Route('/page/#{name_}')
                def page_route#{$routeNumber}():
                    file = open('#{Dir.pwd}/.Server/boilerplate/static/#{file_name_escape("#{name_}")}.page.js', "r")
                    output = file.read()
                    file.close()
                    return output
                HEREDOC
                ]
    end

    def route_for_module(name_)
        # increment the route number 
        $routeNumber = $routeNumber + 1

        # create the python escape stuff
        name_.sub!("\\","\\\\") 
        name_.sub!("'","\\'")

        # FIXME, check for <name>'s in the name so they can be added as input vars
        return [ "/module/#{name_}",  <<-HEREDOC
                @Route('/module/#{name_}')
                def module_route#{$routeNumber}():
                    file = open('#{Dir.pwd}/.Server/boilerplate/static/#{file_name_escape("#{name_}")}.module.js', "r")
                    output = file.read()
                    file.close()
                    return output
                HEREDOC
                ]
    end


    def route_for_func(file_path)
        # increment the route number 
        $routeNumber = $routeNumber + 1

        # if there is only one argument, make it a get request
        #    (this will also requre a change in the SimpleStackBase run() function)
        basename_ = basename(file_path)
        argument_area = basename_[  /(?<=\()(.*?)(?=\))/  ]

        # parse arguments
            # FIXME, this will throw an error if there are no ()'s in the name
            arguments     = argument_area.split(/ *, */)
            argument_assignment_string = "\n"
            argument_index = 0 
            for each_argument in arguments
                argument_assignment_string += "                    #{each_argument} = DATA_FROM_CLIENT['arguments'][#{argument_index}]\n"
                argument_index += 1
            end
        
        # parse protected 
            # check if protected
            requires_login = ""
            if basename_[ /\.protected$/ ]
                requires_login = "@RequireLoginForThis"
            end
        
        name_ = file_path.sub(/(.+)\(.+/,"\\1")

        return [ "/func/#{name_}", route_template = <<-HEREDOC
                #{requires_login}
                @Route('/func/#{name_}', methods=['POST'])
                def func_route#{$routeNumber}():
                    DATA_FROM_CLIENT = request.get_json()
                    #{argument_assignment_string}
                    \n#{indent(readFile(Dir.pwd+"/Website/"+file_path+".py"),"                    ")}
                HEREDOC
                ]
    end
#
#   End Helper tools 
#



# go to the top dir 
Dir.chdir __dir__
Dir.chdir "../.."

# FIXME, remove files from static or templates that no longer exist in Website/


# location 
location_of_global_python  = Dir.pwd+"/Website/Global/GlobalPython.py"
location_of_base_html      = Dir.pwd+"/Website/Global/GlobalIndex.html"
location_of_general_tools  = Dir.pwd+"/Website/Global/GlobalJavascript.js"
location_of_global_css     = Dir.pwd+"/Website/Global/GlobalStyles.css"
simple_stack_base_html_dir = Dir.pwd+"/.Server/boilerplate/SimpleStackBase.html"
static_dir                 = Dir.pwd+"/.Server/boilerplate/static/"
template_dir               = Dir.pwd+"/.Server/boilerplate/templates/"
routes_file_location       = Dir.pwd+"/.Server/boilerplate/routes.py"
dirs_of_pages              = Dir.glob("Website/**/*.page.js")
dirs_of_modules            = Dir.glob("Website/**/*.module.js")
dirs_of_python_files       = Dir.glob("Website/**/*.py")
dirs_of_css_files          = Dir.glob("Website/**/*.css")
favicon                    = Dir.glob("Website/**/favicon.ico")


# initilize theses
everything_that_should_be_in_static = 
    [
        static_dir+'Global→GlobalStyles.css',
        static_dir+'Home.page.js',
        static_dir+'Core.js',
        # library
        static_dir+'localforage.min.js',
    ]
everything_that_should_be_templates = 
    [
        template_dir+'Home.html'
    ]

# move the base file
# FileUtils.cp(location_of_base_html, template_dir)

# move the python to the setup function
save readFile(location_of_global_python), to:".Server/setup.py"

#
#   get the head and body from the base
#
# FIXME, this way of regex-grabbing the head has problems:
#     if the <body> includes "</head>"
#     or the <head> includes "<body>"
#     this method will screw up

base_html = readFile(simple_stack_base_html_dir)
replacement_keys = {
    "head"  => /###THIS IS WHERE YOU WANT TO REPLACE THE HEAD STUFF###/,
    "body"  => /###THIS IS WHERE YOU WANT TO REPLACE THE BODY STUFF###/,
    "tools" => /###THIS IS WHERE YOU WANT TO REPLACE THE GENERAL TOOLS###/,
    "css"   => /###THIS IS WHERE YOU WANT TO REPLACE THE CSS STUFF###/,
}
# if the Global folder exists 
if exists(Dir.pwd+"/Website/Global")
    regex_multiple_replacement = []

    if exists(location_of_base_html)
        html_string = readFile(location_of_base_html)
        head_stuff = html_string[  /(?<=<head>)([\s\S]*?)(?=<\/head>)/  ]
        body_stuff = html_string[  /(?<=<body>)([\s\S]*?)(?=<\/body>)/  ]
        regex_multiple_replacement << [replacement_keys["head"],  "\n#{head_stuff}\n"]
        regex_multiple_replacement << [replacement_keys["body"],  "\n#{body_stuff}\n"]
    else 
        regex_multiple_replacement << [replacement_keys["head"],  "\n"]
        regex_multiple_replacement << [replacement_keys["body"],  "\n"]
    end 

    # FIXME, this method of replacement def. needs to be improved 
    if exists(location_of_general_tools) 
        regex_multiple_replacement << [replacement_keys["tools"],  "\n         //\n        //    User Defined Global Tools\n        //\n#{indent(readFile(location_of_general_tools),(3*4))}\n"]
    else 
        regex_multiple_replacement << [replacement_keys["tools"],  "\n"]
    end 
    
    if exists(location_of_global_css)
        regex_multiple_replacement << [replacement_keys["css"] , '<link type="text/css" rel="stylesheet" href="{{ url_for(\'static\',filename=\'Global→GlobalStyles.css\') }}"/>']
    else 
        regex_multiple_replacement << [replacement_keys["css"] , '\n']
    end
    base_html = base_html.mgsub(regex_multiple_replacement)
else 
    base_html.gsub( /#{replacement_keys["tools"]}|#{replacement_keys["head"]}|#{replacement_keys["body"]}|#{replacement_keys["css"]}/,"\n" )
end




routes_ = {}
#
# add all of the css 
#
for each in dirs_of_css_files
    # get rid of the "Website/" part and the ".module.js" part
    file_path = each.sub(/^Website\//,"")

    # escape the name to be an acceptable file name 
    # FIXME, this will cause referencing problems if the css is not directly in the Website/ folder
    new_file_name = file_name_escape(file_path)
    everything_that_should_be_in_static << static_dir+new_file_name
    
    # save output
    # FIXME, have a minify function
    save (readFile(each)),   to:(static_dir+new_file_name) 
end 



#
# Add all the pages
#
for each in dirs_of_pages
    # get rid of the "Website/" part and the ".page.js" part 
    file_path = each.sub(/^Website\//,"")
    file_path.sub!(".page.js","")



    name_ = basename(file_path)
    # create a route for the page (actually 2 routes per page, one for html one for js)
    the_route_pair = route_for_page(file_path)

    routes_[the_route_pair[0]] = "\n"+the_route_pair[1]

    # escape the name to be an acceptable file name 
    new_file_name = file_name_escape(file_path)

    # set locations 
    static_location = static_dir+new_file_name+".page.js"
    template_location = template_dir+new_file_name+".html"

    # record them in the "should_be" list
    everything_that_should_be_in_static << static_location
    everything_that_should_be_templates << template_location


    # save output
    # FIXME, have a minify function 
    # code_ = <<-HEREDOC
    javascript_version = code_generate(name_,each)
    save javascript_version, to:static_location
    
    # create html for the page
    # FIXME, use a base.html to allow things to be injected into the head and body
    # FIXME, have a minify function 
    # FIXME, have a better way of doing replacements than a giant unlikely string
    the_html_version = base_html.gsub( /###THIS IS WHERE YOU WANT TO REPLACE THE PAGE NAME###/, file_path )
    save the_html_version, to:template_location
end 

#
# add all of the modules
#
for each in dirs_of_modules
    # get rid of the "Website/" part and the ".module.js" part 
    file_path = each.sub(/^Website\//,"")
    file_path.sub!(".module.js","")

    # create a route for the module
    the_route_pair = route_for_module(file_path)
    routes_[the_route_pair[0]] = "\n"+the_route_pair[1]

    # get the name of the module 
    name_ = basename(file_path)

    # escape the name to be an acceptable file name 
    new_file_name = file_name_escape(file_path)+".module.js"
    everything_that_should_be_in_static << static_dir+new_file_name
    
    # save output
    # FIXME, have a minify function
    code_ =  code_generate(name_,each)
    save code_,   to:(static_dir+new_file_name) 
end 


#
# add all of the python functions
#
for each in dirs_of_python_files
    # get rid of the "Website/" part and the ".py" part 
    file_path = each.sub(/^Website\//,"")
    # FIXME, check if protected or not
    file_path.sub!(".py","")

    basename_ = basename(file_path)
    argument_area = basename_[  /(?<=\()(.*?)(?=\))/  ]
    # if there are ()'s
    if argument_area != nil
        # create a route for the func
        the_route_pair = route_for_func(file_path)
        routes_[the_route_pair[0]] = "\n"+the_route_pair[1]
    end 
end 



save(routes_as_string(routes_), to:routes_file_location)


#FIXME, compile the python after to make it more efficient 
#FIXME, make it so that general_tools and styles.css apply to all sub folders but not all parent folders

#
#   Delete unneeded files
#
all_paths_in_static = Dir.glob(static_dir+"*")
all_paths_in_templates = Dir.glob(template_dir+"*")
list_of_files_to_delete = (all_paths_in_static - everything_that_should_be_in_static) + (all_paths_in_templates - everything_that_should_be_templates)
for each in list_of_files_to_delete
    File.delete each
end


