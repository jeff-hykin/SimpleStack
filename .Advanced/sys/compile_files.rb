#
#   helper tools 
#
    require 'pathname'
    require 'FileUtils'
    require 'filewatcher'
    require 'json'



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

    def dirname(string_path)
        return "#{Pathname.new(string_path).dirname}"
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

    def save(string,to:nil)
        new_file = File.open(to, "w")
        new_file.write(string)
        new_file.close
    end

    def code_generate(module_name,each)
        return <<-HEREDOC
            export default async function(Parent) 
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

    def file_name_escape(input_)
        name_ = "#{input_}"
        # useful symbols ᒥᒣ ᐅ  ᐟ ᐠ ᐤ ᐸ ᑉ ᐝ ᚋ ᚌ ᚐ ᚚ ⴻ ⴹ ⴸ  
        name_.sub!(" ","ᚚ")
        name_.sub!("(","ᑕ")
        name_.sub!("(","ᑕ")
        name_.sub!(")","ᑐ")
        name_.sub!("+","ᐩ")
        name_.sub!("-","ᐨ")
        name_.sub!(":","ᐝ")
        name_.sub!("\/","ᐟ")
        name_.sub!("\\","ᐠ")
        return name_
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

    def route_for_page(name_)
        # increment the route number 
        $routeNumber = $routeNumber + 1

        # create the python escape stuff
        name_.sub!("\\","\\\\") 
        name_.sub!("'","\\'")

        route_ = "/#{name_}"
        python_code = <<-HEREDOC
            @Route('/#{name_}')
            def route#{$routeNumber}():
                return  render_template('#{file_name_escape("#{name_}")}.html')

            @Route('/page/#{name_}')
            def page_route#{$routeNumber}():
                file = open('#{Dir.pwd}/.Advanced/flask/static/#{file_name_escape("#{name_}")}.page.js', "r")
                output = file.read()
                file.close()
                return output
            HEREDOC
        python_code = unindent(python_code,"        ")
        # FIXME, check for <name>'s in the name so they can be added as input vars
        return [route_ , python_code ]
    end

    def route_for_module(name_)
        # increment the route number 
        $routeNumber = $routeNumber + 1

        # create the python escape stuff
        name_.sub!("\\","\\\\") 
        name_.sub!("'","\\'")

        route_ = "/module/#{name_}"
        python_code = <<-HEREDOC
            @Route('/module/#{name_}')
            def module_route#{$routeNumber}():
                file = open('#{Dir.pwd}/.Advanced/flask/static/#{file_name_escape("#{name_}")}.module.js', "r")
                output = file.read()
                file.close()
                return output
            HEREDOC
        python_code = unindent(python_code,"        ")
        # FIXME, check for <name>'s in the name so they can be added as input vars
        return [ route_, python_code ]
    end

#
#   End Helper tools
#



# go to the top dir 
Dir.chdir __dir__
Dir.chdir "../.."


# establish locations
location_of_corejs          = Dir.pwd+"/.Advanced/sys/Core.js"
location_of_mainjs          = Dir.pwd+"/.Advanced/sys/Main.js"
simple_stack_base_html_dir  = Dir.pwd+"/.Advanced/flask/SimpleStackBase.html"
static_dir                  = Dir.pwd+"/.Advanced/flask/static/"
location_of_super_bundle    = Dir.pwd+"/.Advanced/flask/static/Core.js"
template_dir                = Dir.pwd+"/.Advanced/flask/templates/"
routes_file_location        = Dir.pwd+"/.Advanced/flask/SystemRoutes.py"
bundle_routes_file_location = Dir.pwd+"/.Advanced/flask/BundleRoutes.py"
location_of_webpack         = Dir.pwd+"/.Advanced/webpack/"
location_of_indexjs         = Dir.pwd+"/.Advanced/webpack/src/index.js"
location_of_bundlejs        = Dir.pwd+"/.Advanced/webpack/dist/bundle.js"
location_of_package_json    = Dir.pwd+"/.Advanced/webpack/package.json"
location_of_global_python   = Dir.pwd+"/Website/Global/GlobalPython.py"
location_of_base_html       = Dir.pwd+"/Website/Global/GlobalIndex.html"
location_of_general_tools   = Dir.pwd+"/Website/Global/GlobalJavascript.js"
global_stylesheets_relative = "GlobalᐟGlobalStyles.css"
location_of_global_css      = Dir.pwd+"/Website/Global/GlobalStyles.css"
dirs_of_pages               = Dir.glob("Website/**/*.page.js")
dirs_of_modules             = Dir.glob("Website/**/*.module.js")
dirs_of_python_files        = Dir.glob("Website/**/*.py")
dirs_of_css_files           = Dir.glob("Website/**/*.css")
favicon                     = Dir.glob("Website/**/favicon.ico")

# FIXME, the favicon doesnt do anything


# initilize stuff
everything_that_should_be_in_static = 
    [
        static_dir+global_stylesheets_relative,
        static_dir+'Home.page.js',
        static_dir+'Core.js',
        static_dir+'favicon.ico',
        static_dir+'test.js',
        # library
        static_dir+'localforage.min.js',
    ]
    # add bundles to everything_that_should_be_in_static
    file = open(location_of_package_json)
    parsed_package_file = JSON.parse(file.read)
    dependencies = parsed_package_file['dependencies'].keys
    for each in dependencies
        everything_that_should_be_in_static << static_dir+each+".bundle.js"
    end
everything_that_should_be_templates = 
    [
        template_dir+'Home.html',
        template_dir+'index.html',
    ]

# move the base file
# FileUtils.cp(location_of_base_html, template_dir)

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
        regex_multiple_replacement << [replacement_keys["css"] , "<link type=\"text/css\" rel=\"stylesheet\" href=\"{{ url_for(\'static\',filename=\'#{global_stylesheets_relative}\') }}\"/>"]
    else 
        regex_multiple_replacement << [replacement_keys["css"] , '\n']
    end
    base_html = base_html.mgsub(regex_multiple_replacement)
else 
    base_html.gsub( /#{replacement_keys["tools"]}|#{replacement_keys["head"]}|#{replacement_keys["body"]}|#{replacement_keys["css"]}/,"\n" )
end



code_for_indexjs = ""
routes_ = {}
#
# add all of the css 
#
for each in dirs_of_css_files
    # get rid of the "Website/" part and the ".module.js" part
    file_name = each.sub(/^Website\//,"")

    # escape the name to be an acceptable file name 
    # FIXME, this will cause referencing problems if the css is not directly in the Website/ folder
    new_file_name = file_name_escape(file_name)
    everything_that_should_be_in_static << static_dir+new_file_name
    
    # save output
    # FIXME, have a minify function
    save (readFile(each)),   to:(static_dir+new_file_name) 
end 


#
# Add all the javascript pages
#
for each in dirs_of_pages
    # get rid of the "Website/" part and the ".page.js" part 
    file_name = each.sub(/^Website\//,"")
    file_name.sub!(".page.js","")

    name_ = basename(file_name)
    # create a route for the page (actually 2 routes per page, one for html one for js)
    the_route_pair = route_for_page(file_name)

    routes_[the_route_pair[0]] = "\n"+the_route_pair[1]

    # escape the name to be an acceptable file name 
    new_file_name = file_name_escape(file_name)

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
    code_for_indexjs += "import #{new_file_name} from '../../flask/static/#{new_file_name+".page.js"}';Global.SystemVars.Modules.#{new_file_name} = #{new_file_name}\n"
    
    # create html for the page
    # FIXME, use a base.html to allow things to be injected into the head and body
    # FIXME, have a minify function 
    # FIXME, have a better way of doing replacements than a giant unlikely string
    the_html_version = base_html.gsub( /###THIS IS WHERE YOU WANT TO REPLACE THE PAGE NAME###/, file_name )
    save the_html_version, to:template_location
end 

#
# add all of the javascript modules
#
for each in dirs_of_modules
    # get rid of the "Website/" part and the ".module.js" part 
    file_name = each.sub(/^Website\//,"")
    file_name.sub!(/.module.js\z/,"")

    # create a route for the module
    the_route_pair = route_for_module(file_name)
    routes_[the_route_pair[0]] = "\n"+the_route_pair[1]

    # get the name of the module 
    name_ = basename(file_name)

    # escape the name to be an acceptable file name 
    new_file_name = file_name_escape(file_name)
    new_file_name_with_extension = new_file_name+".module.js"
    absolute_location_of_file = static_dir+new_file_name_with_extension
    everything_that_should_be_in_static << absolute_location_of_file
    
    # save output
    # FIXME, have a minify function
    code_ =  code_generate(name_,each)
    save code_,   to:(absolute_location_of_file)
    code_for_indexjs += "import #{new_file_name} from '../../flask/static/#{new_file_name_with_extension}';Global.SystemVars.Modules.#{new_file_name} = #{new_file_name}\n"
end 

#
# add all of the python functions
#
for each in dirs_of_python_files
    absolute_path_to_each = Dir.pwd+"/"+each
    # skip global stuff
    if absolute_path_to_each == location_of_global_python
        next
    end
    # get rid of the "Website/" part
    file_name = each.sub(/^Website\//,"")

    # open the file and get the content 
    the_file_content = readFile(each)

    # parse the function, make sure its formatted correctly
    # for the line of code below
        # FIXME, right now it not only gets decorators, but everything before the function
        # FIXME, it also gets everything after the function
        # FIXME, make sure the function name is a valid route name
    match_results = the_file_content.match /\A(?<decorators>[\s\S]*?)def *(?<function_name>.+?)\((?<argument_area>.*)\):\n(?<function_body>[\s\S]+)/
    if not match_results
        # FIXME, have a better error message
        puts "I think this is an incomplete python file:#{each}"
    else
        # puts "I found a python function that follows the correct general format: #{file_name}"
        
        function_name = match_results['function_name']
        function_body = match_results['function_body']
        decorators    = match_results['decorators'].strip
        argument_area = match_results['argument_area']


        # create the route for the function
        # FIXME, need to escape the 's that might be in a dirname
        the_files_directory = dirname(file_name)
        if the_files_directory == "."
            route_ = "/func/#{function_name}"
        else
            route_ = "/func/#{the_files_directory}/#{function_name}"
        end

        # the arguments for the python
        # function actually need to be extracted from request.get_json() 
        # (they are not received as actual arguments to the function)
        # so this section generates the code for extracting those arguments
            # FIXME, if argument defaults are set (ex: def foo(x=10)) it will break this section of the code
            arguments     = argument_area.split(/ *, */)
            argument_assignment_string = "\n"
            argument_index = 0 
            for each_argument in arguments
                argument_assignment_string += "                #{each_argument} = DATA_FROM_CLIENT['arguments'][#{argument_index}]\n"
                argument_index += 1
            end

        # we are going to need a flask route for the python function
        # so increment the route number 
        $routeNumber = $routeNumber + 1
        
        # FIXME, non-4-space indentation will break this code
        # FIXME, routes with ' will break this
        # generate the python code for the route
        python_code = <<-HEREDOC
            @Route('#{route_}', methods=['POST'])#{("\n"+indent(decorators,"            ")).rstrip}
            def func_route#{$routeNumber}():
                DATA_FROM_CLIENT = request.get_json()
                # set the arguments#{argument_assignment_string}
                # run the actual body of the function\n#{indent(function_body,"            ")}
            HEREDOC
        python_code = "\n"+unindent(python_code,"        ")
        routes_[route_] = python_code
    end
end


# save all routes into SystemRoutes (including the bundle Routes)
save(routes_as_string(routes_)+readFile(bundle_routes_file_location), to:routes_file_location)

#
# deal with webpack
#
    # save the index
    save( code_for_indexjs, to:location_of_indexjs )
    # webpack things
    `cd '#{location_of_webpack}';webpack`
    # combine core.js and bundle.js
    corejs_file = readFile(location_of_corejs)
    mainjs_file = readFile(location_of_mainjs)
    save (corejs_file+"\n"+ readFile(location_of_bundlejs)+"\n\n"+mainjs_file) , to:location_of_super_bundle


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


