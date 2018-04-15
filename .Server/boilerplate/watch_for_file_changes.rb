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


    def file_name_escape(input_)
        name_ = "#{input_}"
        # :'s are not allowed in file names, they're replaced with →
        name_.sub!(":","•")  
        # /'s are not allowed in file names, they're replaced with →
        name_.sub!("\/","→") 
        return name_
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
    $hidden_backend_dir         = Dir.pwd+"/.Server/boilerplate/"
    $static_dir                 = $hidden_backend_dir+"static/"
    $template_dir               = $hidden_backend_dir+"templates/"
    $routes_file_location       = $hidden_backend_dir+"routes.py"
    $server_output_name         = ".Server/server_output.txt"
    $full_path_to_server_ouput  = Dir.pwd+"/"+$server_output_name
    $server_pid_file_locaion    = ".Server/.server_pid.txt"

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
    Filewatcher.new(['Website/','.Server/server_output.txt']).watch do |filename, event|
        #DUMB FILE WATCHER (just recompiles everything everytime)
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
                compilation_output = indent(`ruby .Server/boilerplate/compile_files.rb`)
                if compilation_output.strip.length > 0
                    puts compilation_output
                end 

                # restart the server
                startServer
                puts "...restarted server"
            end#if not

        
        #FIXME, add a smart file watcher:
    end# filewatcher

rescue Interrupt, SystemExit 

end
