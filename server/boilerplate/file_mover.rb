require 'pathname'
require 'FileUtils'
require '/usr/bin/rebex.rb'


# go to the top dir 
Dir.chdir __dir__
Dir.chdir "../.."
puts "Ruby script has started"
puts "starting in:#{Dir.pwd}"

#
#   helper tools 
#
    $routeNumber = 0

    def basename(string_path)
        return "#{Pathname.new(string_path).basename}"
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
                    file = open('#{Dir.pwd}/server/boilerplate/static/#{file_name_escape("#{name_}")}.page.js', "r")
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
                    file = open('#{Dir.pwd}/server/boilerplate/static/#{file_name_escape("#{name_}")}.chunk.js', "r")
                    output = file.read()
                    file.close()
                    return output
                HEREDOC
    end


    def route_for_func(name_)
        # increment the route number 
        $routeNumber = $routeNumber + 1

        # if there is only one argument, make it a get request
        #    (this will also requre a change in the SimpleStackBase run() function)
        basename_ = basename(name_)

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

        route_template = <<-HEREDOC
                #{requires_login}
                @Route('/func/#{name_}', methods=['POST'])
                def func_route#{$routeNumber}():
                    DATA_FROM_CLIENT = ReceiveJsonData()
                    #{argument_assignment_string}
                    \n#{indent(readFile(Dir.pwd+"/website/"+name_+".py"),"                    ")}
                HEREDOC
    end
#
#   End 
#

# FIXME, remove files from static or templates that no longer exist in website/


# location 
location_of_base_html      = Dir.pwd+"/website/Base.html"
location_of_general_tools  = Dir.pwd+"/website/GeneralTools.js"
simple_stack_base_html_dir = Dir.pwd+"/server/boilerplate/SimpleStackBase.html"
static_dir                 = Dir.pwd+"/server/boilerplate/static/"
template_dir               = Dir.pwd+"/server/boilerplate/templates/"
routes_file_location       = Dir.pwd+"/server/boilerplate/routes.py"
dirs_of_pages              = Dir.glob("website/**/*.page.js")
dirs_of_chunks             = Dir.glob("website/**/*.chunk.js")
dirs_of_python_files       = Dir.glob("website/**/*.py")
dirs_of_css_files          = Dir.glob("website/**/*.css")


# move the base file
# FileUtils.cp(location_of_base_html, template_dir)


#
#   get the head and body from the base
#
# FIXME, this way of regex-grabbing the head has problems:
#     if the <body> includes "</head>"
#     or the <head> includes "<body>"
#     this method will screw up
html_string = readFile(location_of_base_html)
head_stuff = html_string[  /(?<=<head>)([\s\S]*?)(?=<\/head>)/  ]
body_stuff = html_string[  /(?<=<body>)([\s\S]*?)(?=<\/body>)/  ]

# FIXME, this method of replacement def. needs to be improved 
base_html = readFile(simple_stack_base_html_dir)
base_html.gsub!(/###THIS IS WHERE YOU WANT TO REPLACE THE GENERAL TOOLS###/,  "\n#{readFile(location_of_general_tools)}\n")
base_html.gsub!(/###THIS IS WHERE YOU WANT TO REPLACE THE HEAD STUFF###/,  "\n#{head_stuff}\n")
base_html.gsub!(/###THIS IS WHERE YOU WANT TO REPLACE THE BODY STUFF###/,  "\n#{body_stuff}\n")



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
    # get rid of the "website/" part and the ".chunk.js" part
    file_path = each.sub(/^website\//,"")
    file_path.sub!(".css","")

    # escape the name to be an acceptable file name 
    # FIXME, this will cause referencing problems if the css is not directly in the website/ folder
    file_path = file_name_escape(file_path)
    
    # save output
    # FIXME, have a minify function
    save (readFile(each)),   to:(static_dir+file_path+".css") 
end 



#
# Add all the pages
#
puts "about to open these dirs:"
puts dirs_of_pages
for each in dirs_of_pages
    # get rid of the "website/" part and the ".page.js" part 
    file_path = each.sub(/^website\//,"")
    file_path.sub!(".page.js","")

    # create a route for the page (actually 2 routes per page, one for html one for js)
    routes_ += "\n"+route_for_page(file_path)

    # escape the name to be an acceptable file name 
    file_path = file_name_escape(file_path)


    # save output
    # FIXME, have a minify function 
    save "LoadChunk = async function(container) {\n#{   readFile(each)   }\n}",   to:(static_dir+file_path+".page.js") 

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
    # get rid of the "website/" part and the ".chunk.js" part 
    file_path = each.sub(/^website\//,"")
    file_path.sub!(".chunk.js","")

    # create a route for the chunk
    routes_ += "\n"+route_for_chunk(file_path)

    # escape the name to be an acceptable file name 
    file_path = file_name_escape(file_path)
    
    # save output
    # FIXME, have a minify function
    save "LoadChunk = async function(container) {\n#{   readFile(each)   }\n}",   to:(static_dir+file_path+".chunk.js") 
end 


#
# add all of the python functions
#
for each in dirs_of_python_files
    # get rid of the "website/" part and the ".py" part 
    file_path = each.sub(/^website\//,"")
    # FIXME, check if protected or not
    file_path.sub!(".py","")

    # create a route for the func
    routes_ += "\n"+route_for_func(file_path)
end 



save(routes_, to:routes_file_location)


# FIXME, compile the python after to make it more efficient 

#FIXME, make it so that general_tools and styles.css apply to all sub folders but not all parent folders