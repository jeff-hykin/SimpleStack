require 'pathname'
require 'FileUtils'
require '/usr/bin/rebex.rb'
require 'filewatcher'


# go to the top dir 
Dir.chdir __dir__
Dir.chdir "../.."

#
#   helper tools 
#
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

    def code_generate(name_,each)
        return <<-HEREDOC
            LoadChunk = async function(Container) 
                {
                    Container.id = `#{name_}${Global.__NumberOfContainersCreated++}`
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(Container.id, saying_, data_))
                    #{name_} = 
                        {
                            Load: async function()
                                {
                                    "use strict"
                                    \n#{readFile(each)}
                                }
                        }
                    const DangerousEval = Global.Eval.bind(#{name_})
                    await #{name_}.Load()
                }
            HEREDOC
    end 

    def save(string,to:nil)
        new_file = File.open(to, "w")
        new_file.write(string)
        new_file.close
    end

    def file_name_escape(name_)
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
        route_template = <<-HEREDOC
                @Route('/#{name_}')
                def route#{$routeNumber}():
                    return  render_template('#{file_name_escape("#{name_}")}.html')

                @Route('/page/#{name_}')
                def page_route#{$routeNumber}():
                    file = open('#{Dir.pwd}/Server/boilerplate/static/#{file_name_escape("#{name_}")}.page.js', "r")
                    output = file.read()
                    file.close()
                    return output
                HEREDOC
    end

    def route_for_chunk(name_)
        # increment the route number 
        $routeNumber = $routeNumber + 1

        # create the python escape stuff
        name_.sub!("\\","\\\\") 
        name_.sub!("'","\\'")

        # FIXME, check for <name>'s in the name so they can be added as input vars
        route_template = <<-HEREDOC
                @Route('/chunk/#{name_}')
                def chunk_route#{$routeNumber}():
                    file = open('#{Dir.pwd}/Server/boilerplate/static/#{file_name_escape("#{name_}")}.chunk.js', "r")
                    output = file.read()
                    file.close()
                    return output
                HEREDOC
    end


    def route_for_func(file_path)
        # increment the route number 
        $routeNumber = $routeNumber + 1

        # if there is only one argument, make it a get request
        #    (this will also requre a change in the SimpleStackBase run() function)
        basename_ = basename(file_path)

        # parse arguments 
            # FIXME, this will throw an error if there are no ()'s in the name
            argument_area = basename_[  /(?<=\()(.*?)(?=\))/  ]
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

        return route_template = <<-HEREDOC
                #{requires_login}
                @Route('/func/#{name_}', methods=['POST'])
                def func_route#{$routeNumber}():
                    DATA_FROM_CLIENT = ReceiveJsonData()
                    #{argument_assignment_string}
                    \n#{indent(readFile(Dir.pwd+"/Website/"+file_path+".py"),"                    ")}
                HEREDOC
    end
#
#   End 
#

# FIXME, remove files from static or templates that no longer exist in Website/


# location 
location_of_base_html      = Dir.pwd+"/Website/Settings/GlobalIndex.html"
location_of_general_tools  = Dir.pwd+"/Website/Settings/GlobalTools.js"
location_of_global_css     = Dir.pwd+"/Website/Settings/GlobalStyles.css"
simple_stack_base_html_dir = Dir.pwd+"/Server/boilerplate/SimpleStackBase.html"
static_dir                 = Dir.pwd+"/Server/boilerplate/static/"
template_dir               = Dir.pwd+"/Server/boilerplate/templates/"
routes_file_location       = Dir.pwd+"/Server/boilerplate/routes.py"
dirs_of_pages              = Dir.glob("Website/**/*.page.js")
dirs_of_chunks             = Dir.glob("Website/**/*.chunk.js")
dirs_of_python_files       = Dir.glob("Website/**/*.py")
dirs_of_css_files          = Dir.glob("Website/**/*.css")
favicon                    = Dir.glob("Website/**/favicon.ico")


# initilize theses
everything_that_should_be_in_static = [static_dir+'Settings→GlobalStyles.css',static_dir+'Home.page.js']
everything_that_should_be_templates = ['Home.html']

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
# if the Settings exists 
if exists(Dir.pwd+"/Website/Settings")
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
        regex_multiple_replacement << [replacement_keys["tools"],  "\n#{readFile(location_of_general_tools)}\n"]
    else 
        regex_multiple_replacement << [replacement_keys["tools"],  "\n"]
    end 
    
    if exists(location_of_global_css)
        regex_multiple_replacement << [replacement_keys["css"] , '<link type="text/css" rel="stylesheet" href="{{ url_for(\'static\',filename=\'Settings→GlobalStyles.css\') }}"/>']
    else 
        regex_multiple_replacement << [replacement_keys["css"] , '\n']
    end
    base_html = base_html.mgsub(regex_multiple_replacement)
else 
    base_html.gsub( /#{replacement_keys["tools"]}|#{replacement_keys["head"]}|#{replacement_keys["body"]}|#{replacement_keys["css"]}/,"\n" )
end


# routes_  = readFile(routes_file_location)
routes_  = <<-HEREDOC
def SystemRoutes(): #this is name-specific
                print("setting system routes")

                # root directory
                @Route('/')
                def root():
                    return  render_template("Home.html")
HEREDOC

#
# add all of the css 
#
for each in dirs_of_css_files
    # get rid of the "Website/" part and the ".chunk.js" part
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
    routes_ += "\n"+route_for_page(file_path)

    # escape the name to be an acceptable file name 
    new_file_name = file_name_escape(file_path)+".page.js"
    everything_that_should_be_in_static << static_dir+new_file_name

    # save output
    # FIXME, have a minify function 
    # code_ = <<-HEREDOC
    code_ = code_generate(name_,each)


    save code_,   to:(static_dir+new_file_name) 
    # create html for the page
    # FIXME, use a base.html to allow things to be injected into the head and body
    # FIXME, have a minify function 
    # FIXME, have a better way of doing replacements than a giant unlikely string
    save base_html.gsub( /###THIS IS WHERE YOU WANT TO REPLACE THE PAGE NAME###/, file_path ),  to:(template_dir+file_path+".html")
end 

#
# add all of the chunks
#
for each in dirs_of_chunks
    # get rid of the "Website/" part and the ".chunk.js" part 
    file_path = each.sub(/^Website\//,"")
    file_path.sub!(".chunk.js","")

    # create a route for the chunk
    routes_ += "\n"+route_for_chunk(file_path)

    # get the name of the chunk 
    name_ = basename(file_path)

    # escape the name to be an acceptable file name 
    new_file_name = file_name_escape(file_path)+".chunk.js"
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

    # create a route for the func
    routes_ += "\n"+route_for_func(file_path)
end 

save(routes_, to:routes_file_location)


#FIXME, compile the python after to make it more efficient 
#FIXME, make it so that general_tools and styles.css apply to all sub folders but not all parent folders


all_paths_in_static = Dir.glob(static_dir+"*")
list_of_files_to_delete = all_paths_in_static - everything_that_should_be_in_static
for each in list_of_files_to_delete
    File.delete each
end 


# run start_api asyncly 
pid = spawn("./Server/boilerplate/start_api.sh")
Process.detach(pid)

# update the files as theyre being changed
Filewatcher.new(['**/*.*']).watch do |filename, event|
    path = Pathname.new(filename)
    relative_path = "#{path.realpath}".sub(/^#{Regexp.escape(Dir.pwd+"/")}/,"")
    first_folder = relative_path[/\w+/]
    # puts "Event : #{event}"
    
    if first_folder != "Server"
        basename_ = "#{path.basename}"
        extension = "#{path.extname}"
        # puts "first_folder     : #{first_folder}"
        # puts "extension        : #{extension}"
        # puts "Basename         : #{basename_}"
        # puts "Relative         : #{relative_path}"
        
        # If a python file is updated
        if extension == ".py"
            # FIXME, cannot currently update just one python file, have to redo all the python files ATM
            dirs_of_python_files       = Dir.glob("Website/**/*.py")
            for each in dirs_of_python_files
                # get rid of the "Website/" part and the ".py" part 
                file_path = each.sub(/^Website\//,"")
                # FIXME, check if protected or not
                file_path.sub!(".py","")
                # create a route for the func
                routes_ += "\n"+route_for_func(file_path)
            end 
            save(routes_, to:routes_file_location)
        
        # If a javascript file is updated
        elsif extension == ".js"
            if basename_[-8..-1] == ".page.js"
                puts "updating page"
                # get rid of the "Website/" part and the ".page.js" part 
                file_path = relative_path.sub(/^Website\//,"")
                file_path.sub!(".page.js","")

                name_ = basename(file_path)
                # create a route for the page (actually 2 routes per page, one for html one for js)
                routes_ += "\n"+route_for_page(file_path)

                # escape the name to be an acceptable file name 
                new_file_name = file_name_escape(file_path)+".page.js"
                everything_that_should_be_in_static << static_dir+new_file_name

                # save output
                # FIXME, have a minify function 
                # code_ = <<-HEREDOC
                code_ = code_generate(name_,relative_path)


                save code_,   to:(static_dir+new_file_name) 
                # create html for the page
                # FIXME, use a base.html to allow things to be injected into the head and body
                # FIXME, have a minify function 
                # FIXME, have a better way of doing replacements than a giant unlikely string
                save base_html.gsub( /###THIS IS WHERE YOU WANT TO REPLACE THE PAGE NAME###/, file_path ),  to:(template_dir+file_path+".html")
            elsif basename_[-9..-1] == ".chunk.js"
                puts "updating chunk"
                # get rid of the "Website/" part and the ".chunk.js" part 
                file_path = relative_path.sub(/^Website\//,"")
                file_path.sub!(".chunk.js","")

                # create a route for the chunk
                routes_ += "\n"+route_for_chunk(file_path)

                # get the name of the chunk 
                name_ = basename(file_path)

                # escape the name to be an acceptable file name 
                new_file_name = file_name_escape(file_path)+".chunk.js"
                everything_that_should_be_in_static << static_dir+new_file_name
                
                # save output
                # FIXME, have a minify function
                code_ =  code_generate(name_,relative_path)
                save code_,   to:(static_dir+new_file_name) 
            end
        
        # If a css file is updated
        elsif extension == ".css"
            puts "updating css"
            # get rid of the "Website/" part and the ".chunk.js" part
            file_path = relative_path.sub(/^Website\//,"")

            # escape the name to be an acceptable file name 
            # FIXME, this will cause referencing problems if the css is not directly in the Website/ folder
            new_file_name = file_name_escape(file_path)
            everything_that_should_be_in_static << static_dir+new_file_name
            
            # save output
            # FIXME, have a minify function
            save (readFile(relative_path)),   to:(static_dir+new_file_name) 
        end 
    end 
end