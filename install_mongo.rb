# helper tools
    # continuous shell commands that include stderr
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
                    $std_in.puts("\nprintf '%s\\0\\n'\n")
                    the_next_line = $std_out_and_error.gets
                    the_next_line = $std_out_and_error.gets
                end
                return output
            end#def
        end#String

    # heredoc that removes indent 
        class String
            # example usage 
                # puts <<-HEREDOC.remove_indent
                # This command does such and such.
                #     this part is extra indented
                # HEREDOC
            def remove_indent
                gsub(/^[ \t]{#{self.match(/^[ \t]*/)[0].length}}/, '')
            end
        end
    # add replacement functions to String 
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
            def replace(regex,with:nil)
                self.gsub(regex,with)
            end
            def replace!(regex,with:nil)
                self.gsub!(regex,with)
            end
            def extract!(regex)
                output = self.match(regex)
                self.gsub!(regex,"")
                return output
            end
            def findfirst(regex)
                self.match(regex)
            end
            def findeach(regex)
                matches = []
                self.scan(regex){ matches << $~ }
                return matches
            end
            #TODO make find
        end
    
    # check if folder exists 
        def folderExists(folder)
            File.directory? folder
        end
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
    # 'ask' functions
        #string 
            def ask question_
                puts question_ 
                return gets 
            end#ask
        # option
            def askForOneOf question_, options_
                if options_.length <= 0
                    return nil
                end
                loop do 
                    puts question_
                    index_ = 0
                    for each in options_
                        index_ += 1
                        puts "   #{index_}. #{each}"
                    end
                    answer = gets.chomp
                    for each in options_ 
                        if each == options_[Integer(answer)-1] || each == answer
                            return each
                        end
                    end
                    puts "Sorry, please pick one of the answers"
                end
            end
        #yes or no 
            def askYesOrNo question_
                loop do 
                    puts question_
                    case gets
                    when /\A\s*(yes|yeah|y)\z\s*/i
                        return true
                    when /\A\s*(no|nope|n)\z\s*/i
                        return false
                    when /\A\s*cancel\s*\z/i
                        raise 'user canceled yes or no question'
                    else
                        puts "Sorry, please answer 'yes', 'no', or 'cancel'"
                    end#case
                end#loop 
            end#askYesOrNo
        #number

    # indent / unindent 
        # indent 
            def indent (string_ , indentation_="    ")
                if indentation_.is_a? Numeric
                    indentation_ = ' '*indentation_
                end#if
                string_.gsub( /^/, indentation_)
            end#indent
        # unindent  
            def unindent (string_ , indentation_="    ")
                if indentation_.is_a? Numeric
                    indentation_ = ' '*indentation_
                end#if
                string_.gsub( /^#{indentation_}/, '')
            end#indent 
    # download 
        def download(input_1=nil, from:nil, url:nil, as:nil)
            # can do 
                # download 'www.mywebsite.com/thing.txt' as:'blah.txt'

            require 'open-uri'
            # argument checking 
                # if only one argument, either input_1 or url
                if ((input_1!=nil) != (url!=nil)) && (from==nil) && (as==nil)
                    # this covers:
                    #    download     'site.com/file'
                    the_url = url || input_1
                    file_name = the_url.match /(?<=\/)[^\/]+\z/ 
                    file_name = file_name[0]
                elsif (as != nil) && ((input_1!=nil)!=(url!=nil))
                    # this covers:
                    #    download     'site.com/file' as:'file'
                    #    download url:'site.com/file' as:'file'
                    the_url = url || input_1
                    file_name = as
                elsif ((from!=nil) != (url!=nil)) && input_1!=nil
                    # this covers:
                    #    download 'file' from:'site.com/file'
                    #    download 'file'  url:'site.com/file'
                    the_url = from || url
                    file_name = input_1
                else
                    message_ = "I'm not sure how you're using the download function.\n"
                    message_ << "Please use one of the following methods:\n"
                    message_ << "    download     'site.com/file'\n"
                    message_ << "    download     'site.com/file', as:'file'\n"
                    message_ << "    download url:'site.com/file', as:'file'\n"
                    message_ << "    download 'file', from:'site.com/file'\n"
                    message_ << "    download 'file',  url:'site.com/file'\n"
                    raise message_
                end#if
            #end argument checking

            # actually download the file
            open(file_name, 'wb') do |file|
                file << open(the_url).read
            end#file
        end#download

    # file and folder stuff
        def readFile(file_name)
            the_file = File.open(file_name)
            content = the_file.read
            the_file.close
            return content
        end  
        # file in
            # the_file = File.open("file.txt")
            # the_file.read
        # file out
        def overwriteFile(file_name,with:nil)
            the_file = File.open(file_name,"w+")
            the_file.write(with)
            the_file.close
        end

    module OS
        def OS.windows?
            (/cygwin|mswin|mingw|bccwin|wince|emx/ =~ RUBY_PLATFORM) != nil
        end
    
        def OS.mac?
            (/darwin/ =~ RUBY_PLATFORM) != nil
        end

        def OS.hasHomebrew?
            return `which brew` != ""
        end
    
        def OS.unix?
            !OS.windows?
        end
    
        def OS.linux?
            OS.unix? and not OS.mac?
        end
    end
# end helper tools


puts "Starting"
if OS.mac?
    if not OS.hasHomebrew?
        puts "Homebrew is needed for this installation"
        if askYesOrNo("would you like me to start the install for you?")
            `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
        else
            exit()
        end
    end

    # has homebrew at this point
    print 'installing mongodb'
    `brew install mongodb`

    answer = askForOneOf("create a mongo database ...",["in the current folder","globally on my computer"])
    install_location = "/data/db"
    if answer == "in the current folder"
        install_location = Dir.pwd + "/db"
    end
    puts "creating/checking the folder"
    `mkdir -p '#{install_location}'`
    puts "setting permissions on the folder, (you'll need your password for this)"
    `sudo chmod u+rwx '#{install_location}'`
    puts "starting up the mongod service (mongo is ready for action)"
    `mongod --dbpath '#{install_location}' &`
    # puts "starting up the interface"
    # `mongo --host 127.0.0.1:27017`

    # add an on-run to
elsif OS.windows?
    puts "Sorry, windows isn't supported right now"
elsif OS.linux?
    puts "Sorry, Linux isn't supported right now"
end