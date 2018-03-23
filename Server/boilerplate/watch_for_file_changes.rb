#
#   helper tools 
#
    require 'pathname'
    require 'FileUtils'
    require 'filewatcher'


    def run_with_timeout(command, timeout, tick)
    output = ''
    begin
        # Start task in another thread, which spawns a process
        stdin, stderrout, thread = Open3.popen2e(command)
        # Get the pid of the spawned process
        pid = thread[:pid]
        start = Time.now

        while (Time.now - start) < timeout and thread.alive?
        # Wait up to `tick` seconds for output/error data
        Kernel.select([stderrout], nil, nil, tick)
        # Try to read the data
        begin
            output << stderrout.read_nonblock(BUFFER_SIZE)
        rescue IO::WaitReadable
            # A read would block, so loop around for another select
        rescue EOFError
            # Command has completed, not really an error...
            break
        end
        end
        # Give Ruby time to clean up the other thread
        sleep 1

        if thread.alive?
        # We need to kill the process, because killing the thread leaves
        # the process alive but detached, annoyingly enough.
        Process.kill("TERM", pid)
        end
    ensure
        stdin.close if stdin
        stderrout.close if stderrout
    end
    return output
    end
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
            LoadChunk = async function(container) 
                {
                    container.add = container.appendChild
                    if (container.id != "Pagecontainer")  { container.id = `#{name_}${Global.__NumberOfcontainersCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(container.id, saying_, data_))
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

    def route_for_chunk(name_)
        # increment the route number 
        $routeNumber = $routeNumber + 1

        # create the python escape stuff
        name_.sub!("\\","\\\\") 
        name_.sub!("'","\\'")

        # FIXME, check for <name>'s in the name so they can be added as input vars
        return [ "/chunk/#{name_}",  <<-HEREDOC
                @Route('/chunk/#{name_}')
                def chunk_route#{$routeNumber}():
                    file = open('#{Dir.pwd}/Server/boilerplate/static/#{file_name_escape("#{name_}")}.chunk.js', "r")
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

puts "Watching files starting from: #{__dir__}"
# change to the top directory
Dir.chdir __dir__
Dir.chdir "../.."


puts "starting server\n\n"
$my_pid = rand(999999)
$command_ = "source \"Server/boilerplate/PythonVirtualEnv/bin/activate\" && python3 \"Server/boilerplate/flask_template.py\" && echo #{$my_pid}"
$server_std_in, $server_std_out_and_error, $server_thread = Open3.popen2e($command_)

# puts -"source \"Server/boilerplate/PythonVirtualEnv/bin/activate\" && python3 \"Server/boilerplate/flask_template.py\" &"

# update the files as theyre being changed
Filewatcher.new(['**/*.*']).watch do |filename, event|
    #DUMB FILE WATCHER:
        
        path = Pathname.new(filename)
        relative_path = "#{path.realpath}".sub( /^#{Regexp.escape(Dir.pwd+"/")}/,"" )
        first_folder = relative_path[/\w+/]
        # if the file isnt in the Server, then recompile everything
        if first_folder != "Server"
            puts "#{relative_path} was changed"
            process = `ps | grep '#{$command_}'`
            pid = process.match /\d\d\d\d\d/
            # puts "processes is: #{process}"
            # puts "match is:#{pid[0]}"
            `kill #{pid}`
            # just re-compile everything
            puts "FILEWATCHER: About to recompile everything"
            `ruby Server/boilerplate/compile_files.rb`
            # restart the server
            $my_pid = rand(999999)
            $command_ = "source \"Server/boilerplate/PythonVirtualEnv/bin/activate\" && python3 \"Server/boilerplate/flask_template.py\" && echo #{$my_pid}"
            $server_std_in, $server_std_out_and_error, $server_thread = Open3.popen2e($command_)
            puts "restarted server"
        end
    
    
    
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
    #         # create a route for the chunk
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
    #             everything_that_should_be_in_static << static_dir+new_file_name+".page.js"


    #             # save output
    #             # FIXME, have a minify function 
    #             # code_ = <<-HEREDOC
    #             code_ = code_generate(name_,each)

    #             save code_,   to:(static_dir+new_file_name+".page.js") 
    #             # create html for the page
    #             # FIXME, use a base.html to allow things to be injected into the head and body
    #             # FIXME, have a minify function 
    #             # FIXME, have a better way of doing replacements than a giant unlikely string
    #             save base_html.gsub( /###THIS IS WHERE YOU WANT TO REPLACE THE PAGE NAME###/, file_path ),  to:(template_dir+new_file_name+".html")
    #         elsif basename_[-9..-1] == ".chunk.js"
    #             puts "updating chunk"
    #             # get rid of the "Website/" part and the ".chunk.js" part 
    #             file_path = relative_path.sub(/^Website\//,"")
    #             file_path.sub!(".chunk.js","")

    #             # create a route for the chunk
    #             the_route_pair = route_for_chunk(file_path)
    #             routes_[the_route_pair[0]] = "\n"+the_route_pair[1]

    #             # get the name of the chunk 
    #             name_ = basename(file_path)

    #             # escape the name to be an acceptable file name 
    #             new_file_name = file_name_escape(file_path)+".chunk.js"
    #             everything_that_should_be_in_static << static_dir+new_file_name
                
    #             # save output
    #             # FIXME, have a minify function
    #             code_ =  code_generate(name_,relative_path)
    #             save code_,   to:(static_dir+new_file_name) 
    #         end
        
    #     # If a css file is updated
    #     elsif extension == ".css"
    #         puts "updating css"
    #         # get rid of the "Website/" part and the ".chunk.js" part
    #         file_path = relative_path.sub(/^Website\//,"")

    #         # escape the name to be an acceptable file name 
    #         # FIXME, this will cause referencing problems if the css is not directly in the Website/ folder
    #         new_file_name = file_name_escape(file_path)
    #         everything_that_should_be_in_static << static_dir+new_file_name
            
    #         # save output
    #         # FIXME, have a minify function
    #         save (readFile(relative_path)),   to:(static_dir+new_file_name) 
    #     end 
    #     # update the routes no matter which file updated
    #     save(routes_as_string(routes_), to:routes_file_location)
    # end 
end