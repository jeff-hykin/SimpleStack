#
#   helper tools 
#
    require 'pathname'
    require 'FileUtils'
    require 'filewatcher'

    # create file
        def createFile(name:nil,path:"",code:nil)
            # error checking 
                if name == nil
                    puts "When you're using createFile, You need a name"
                end
            # actual code
            the_file = File.new(path+name,"w+")
            if code != nil 
                the_file.write(code)
            end 
            the_file.close
        end#create file
        
    # create a bash process that receives std input from doing -"echo hello"
    require 'open3'
    $std_in, $std_out_and_error, $thread_ = Open3.popen2e('bash;')
    class String
        # make -"" strings be shell commands that include stderr
        def -@
            $std_in.puts(self+"\nprintf '%s\\0\\n'\n")
            the_next_line = $std_out_and_error.gets
            output = ""
            while the_next_line != "\u0000\n"
                output += "#{the_next_line}"
                the_next_line = $std_out_and_error.gets
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

    def code_generate(name_,each)
        return <<-HEREDOC
            LoadModule = async function(Parent) 
                {
                    if (Parent.id != "PageParent")  { Parent.id = `#{name_}${Global.__NumberOfModulesCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(Parent.id, saying_, data_))
                    var #{name_} = 
                        {
                            Load: async function()
                                {
                                    "use strict"
                                    \n#{indent(readFile(each),(9*4))}
                                }
                        }
                    const DangerousEval = Global.Eval.bind(#{name_})
                    await #{name_}.Load()
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
                    file = open('#{Dir.pwd}/Server/boilerplate/static/#{file_name_escape("#{name_}")}.page.js', "r")
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
                    file = open('#{Dir.pwd}/Server/boilerplate/static/#{file_name_escape("#{name_}")}.module.js', "r")
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

        return [ "/func/#{name_}", route_template = <<-HEREDOC
                #{requires_login}
                @Route('/func/#{name_}', methods=['POST'])
                def func_route#{$routeNumber}():
                    DATA_FROM_CLIENT = ReceiveJsonData()
                    #{argument_assignment_string}
                    \n#{indent(readFile(Dir.pwd+"/Website/"+file_path+".py"),"                    ")}
                HEREDOC
                ]
    end
#
#   End Helper tools 
#

begin # for catching ctrl+c
    

    puts "Starting SimpleStack"

    # change to the top directory
    Dir.chdir __dir__
    Dir.chdir "../.."

    # locations 
    $hidden_backend_dir         = Dir.pwd+"/Server/boilerplate/"
    $static_dir                 = $hidden_backend_dir+"static/"
    $template_dir               = $hidden_backend_dir+"templates/"
    $routes_file_location       = $hidden_backend_dir+"routes.py"
    $server_output_name         = "Server/server_output.txt"
    $full_path_to_server_ouput  = Dir.pwd+"/"+$server_output_name
    $server_pid_file_locaion    = "Server/.server_pid.txt"

    def startServer()
        if exists($server_pid_file_locaion)
            server_pid = readFile($server_pid_file_locaion).chomp
            if server_pid.length > 0 
                # kill the process 
                `kill #{server_pid}`
                # clear the file that was holding the PID
                `rm #{$server_pid_file_locaion};touch #{$server_pid_file_locaion}`
            end

        end
        $server_std_in, $server_std_out_and_error, $server_thread = Open3.popen2e("bash\n")
        $server_std_in.puts("source \"#{$hidden_backend_dir}PythonVirtualEnv/bin/activate\"")
        $server_std_in.puts("python3 \"#{$hidden_backend_dir}flask_template.py\" &>'#{$server_output_name}' &")
        $server_std_in.puts("echo $! &>#{$server_pid_file_locaion}")
    end
    startServer()




    # update the files as theyre being changed
    Filewatcher.new(['**/*.*']).watch do |filename, event|
        #DUMB FILE WATCHER:
            event = "#{event}"
            
            if (event != "deleted")
                path = Pathname.new(filename)
                relative_path = "#{path.realpath}".sub( /^#{Regexp.escape(Dir.pwd+"/")}/,"" )
                first_folder = relative_path[/\w+/]
                
            end

            # if the logging file is deleted dont do anything 
            if filename == $full_path_to_server_ouput
                if not (event == "deleted")
                    server_output = readFile($server_output_name)
                    if server_output.strip.length > 0
                        puts "Server says:"
                        puts indent(server_output)
                        createFile(name:$server_output_name, code:"")
                    end
                    


                    # erase the existing file
                    
                end

            # if its any of the always-auto-generated stuff then ignore it
            elsif not "#{path}".match(/\A(#{Regexp.quote($static_dir)}|#{Regexp.quote($template_dir)}|#{Regexp.quote($routes_file_location)}).+/)
                # # kill the existing server process 
                # if (-"kill #{$server_pid}").match(/No such process/)
                #     puts "trying to kill #{$server_pid}"
                #     puts indent(-"ps")
                # end


                # re-compile everything
                puts "\n\n#{relative_path} was changed"
                puts "...recompiling"
                compilation_output = indent(`ruby Server/boilerplate/compile_files.rb`)
                if compilation_output.strip.length > 0
                    puts compilation_output
                end 

                # restart the server
                startServer
                puts "...restarted server"
            end#if not

        
        #SMART (but broken) FILE WATCHER:
        # path = Pathname.new(filename)
        # relative_path = "#{path.realpath}".sub(/^#{Regexp.escape(Dir.pwd+"/")}/,"")
        # first_folder = relative_path[/\w+/]
        # puts "File update : #{event}"
        
        # if first_folder != "Server"
        #     basename_ = "#{path.basename}"
        #     extension = "#{path.extname}"
        #     # puts "first_folder     : #{first_folder}"
        #     # puts "extension        : #{extension}"
        #     # puts "Basename         : #{basename_}"
        #     # puts "Relative         : #{relative_path}"
            

        #     # If a python file is updated
        #     if extension == ".py"
        #         # get rid of the "Website/" part and the ".py" part 
        #         file_path = relative_path.sub(/^Website\//,"")
        #         # FIXME, check if protected or not
        #         file_path.sub!(".py","")
        #         # create a route for the module
        #         the_route_pair = route_for_func(file_path)
        #         routes_[the_route_pair[0]] = "\n"+the_route_pair[1]
        
        #     # If a javascript file is updated
        #     elsif extension == ".js"
        #         if basename_[-8..-1] == ".page.js"
        #             # get rid of the "Website/" part and the ".page.js" part 
        #             file_path = each.sub(/^Website\//,"")
        #             file_path.sub!(".page.js","")

        #             name_ = basename(file_path)
        #             # create a route for the page (actually 2 routes per page, one for html one for js)
        #             the_route_pair = route_for_page(file_path)

        #             routes_[the_route_pair[0]] = "\n"+the_route_pair[1]

        #             # escape the name to be an acceptable file name 
        #             new_file_name = file_name_escape(file_path)
        #             everything_that_should_be_in_static << $static_dir+new_file_name+".page.js"


        #             # save output
        #             # FIXME, have a minify function 
        #             # code_ = <<-HEREDOC
        #             code_ = code_generate(name_,each)

        #             save code_,   to:($static_dir+new_file_name+".page.js") 
        #             # create html for the page
        #             # FIXME, use a base.html to allow things to be injected into the head and body
        #             # FIXME, have a minify function 
        #             # FIXME, have a better way of doing replacements than a giant unlikely string
        #             save base_html.gsub( /###THIS IS WHERE YOU WANT TO REPLACE THE PAGE NAME###/, file_path ),  to:($template_dir+new_file_name+".html")
        #         elsif basename_[-9..-1] == ".module.js"
        #             puts "updating module"
        #             # get rid of the "Website/" part and the ".module.js" part 
        #             file_path = relative_path.sub(/^Website\//,"")
        #             file_path.sub!(".module.js","")

        #             # create a route for the module
        #             the_route_pair = route_for_module(file_path)
        #             routes_[the_route_pair[0]] = "\n"+the_route_pair[1]

        #             # get the name of the module 
        #             name_ = basename(file_path)

        #             # escape the name to be an acceptable file name 
        #             new_file_name = file_name_escape(file_path)+".module.js"
        #             everything_that_should_be_in_static << $static_dir+new_file_name
                    
        #             # save output
        #             # FIXME, have a minify function
        #             code_ =  code_generate(name_,relative_path)
        #             save code_,   to:($static_dir+new_file_name) 
        #         end
            
        #     # If a css file is updated
        #     elsif extension == ".css"
        #         puts "updating css"
        #         # get rid of the "Website/" part and the ".module.js" part
        #         file_path = relative_path.sub(/^Website\//,"")

        #         # escape the name to be an acceptable file name 
        #         # FIXME, this will cause referencing problems if the css is not directly in the Website/ folder
        #         new_file_name = file_name_escape(file_path)
        #         everything_that_should_be_in_static << $static_dir+new_file_name
                
        #         # save output
        #         # FIXME, have a minify function
        #         save (readFile(relative_path)),   to:($static_dir+new_file_name) 
        #     end 
        #     # update the routes no matter which file updated
        #     save(routes_as_string(routes_), to:$routes_file_location)
        # end 
    end

rescue Interrupt, SystemExit 
    # puts "Catching system Interrupt"
    # puts "before killing: #{$server_pid}"
    # puts `ps`
    # puts `kill #{$server_pid}`
    # puts "after killing:"
    # puts `ps`
    # exit

end
