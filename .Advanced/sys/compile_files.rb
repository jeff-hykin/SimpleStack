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
            the_next_line = $std_out_and_error.gets
            output = ""
            while the_next_line != "\u0000\n"
                if the_next_line
                    output += the_next_line
                    the_next_line = $std_out_and_error.gets
                end
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
        the_file.close
        return content
    end

    def save(string,to:nil)
        new_file = File.open(to, "w")
        new_file.write(string)
        new_file.close
    end

    def code_generate(module_name,each)
        import_statements = ""
        code = readFile(each)
        import_regex_pattern = /\A\s*import [\s\S]+? from .+\n/
        # FIXME, find a better way to extract import statements
        loop do
            the_match = code.match(import_regex_pattern)
            # if there is an import statement
            if the_match
                # extract it
                import_statements += the_match[0]
                code.gsub!(import_regex_pattern, "")
            else
                break
            end
        end
        
        return <<-HEREDOC
            #{indent(import_statements,3*4)}
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
                                    \n#{indent(code,(9*4))}
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

#
#   End Helper tools
#



# go to the top dir 
Dir.chdir __dir__
Dir.chdir "../.."


# establish locations
location_of_corejs          = Dir.pwd+"/.Advanced/sys/Core.js"
location_of_mainjs          = Dir.pwd+"/.Advanced/sys/Main.js"
server_output_location      = Dir.pwd+".Advanced/sys/server_output.txt"
simple_stack_base_html_dir  = Dir.pwd+"/.Advanced/flask/SimpleStackBase.html"
static_dir                  = Dir.pwd+"/.Advanced/flask/static/"
location_of_super_bundle    = Dir.pwd+"/.Advanced/flask/static/Core.js"
template_dir                = Dir.pwd+"/.Advanced/flask/templates/"
routes_file_location        = Dir.pwd+"/.Advanced/flask/SystemRoutes.py"
location_of_webpack         = Dir.pwd+"/.Advanced/webpack/"
location_of_webpack_src     = Dir.pwd+"/.Advanced/webpack/src/"
location_of_indexjs         = Dir.pwd+"/.Advanced/webpack/src/index.js"
location_of_bundlejs        = Dir.pwd+"/.Advanced/webpack/dist/bundle.js"
location_of_package_json    = Dir.pwd+"/.Advanced/webpack/package.json"
location_of_global_python   = Dir.pwd+"/Website/Global/main.py"
location_of_general_tools   = Dir.pwd+"/Website/Global/main.js"
global_stylesheets_relative = "Globalᐟstyles.css"
location_of_global_css      = Dir.pwd+"/Website/Global/styles.css"
output_css_location         = static_dir +global_stylesheets_relative
dirs_of_pages               = Dir.glob("Website/**/*.page.js")
dirs_of_modules             = Dir.glob("Website/**/*.module.js")
dirs_of_python_files        = Dir.glob("Website/**/*.py")
dirs_of_css_files           = Dir.glob("Website/**/*.css")
dirs_of_global_css_files    = Dir.glob("Website/Global/**/*.css")
favicon_location            = Dir.glob("Website/**/favicon.ico")


#
# Favicon
#
if favicon_location.length > 0
    FileUtils.cp(favicon_location[0],static_dir+'favicon.ico')
end


#
# CSS
#
    save "", to:output_css_location
    css_file = File.open(output_css_location,"a")
    non_global_css_dirs = dirs_of_css_files - dirs_of_global_css_files
    # do the non global CSS first
    for each in non_global_css_dirs
        css_file.puts(readFile(each))
    end
    # global css is done last (higher priority)
    for each in dirs_of_global_css_files
        css_file.puts(readFile(each))
    end
    css_file.close




code_for_indexjs = ""
#
# Pages
#
for each in dirs_of_pages
    #
    #   File naming
    #
    relative_location = each.sub(/(^Website\/|\.page\.js$)/,"")
    new_file_name = file_name_escape(relative_location)
    new_file_name_with_extension = new_file_name+".page.js"
    module_name = basename(relative_location)

    #
    # Compile, Save, Import
    #
    code = code_generate(module_name,each)
    save code, to:(location_of_webpack_src+new_file_name_with_extension)
    code_for_indexjs += "import #{new_file_name} from './#{new_file_name_with_extension}';Global.SystemVars.Modules.#{new_file_name} = #{new_file_name}\n"
end

#
# Modules
#
for each in dirs_of_modules
    #
    #   File naming
    #
    relative_location = each.sub(/^Website\//,"").sub!(/.module.js\z/,"")
    new_file_name = file_name_escape(relative_location)
    new_file_name_with_extension = new_file_name+".module.js"
    module_name = basename(relative_location)
    
    #
    # Compile, Save, Import
    #
    code =  code_generate(module_name,each)
    save code,   to:(location_of_webpack_src+new_file_name_with_extension)
    code_for_indexjs += "import #{new_file_name} from './#{new_file_name_with_extension}';Global.SystemVars.Modules.#{new_file_name} = #{new_file_name}\n"
end 
#
# Bundle Javascript 
#
    # save the index
    save( code_for_indexjs+"\n"+readFile(location_of_general_tools), to:location_of_indexjs )
    # start the webpack watcher
    $std_in, $std_out_and_error, $thread_ = Open3.popen2e("cd '#{location_of_webpack}'; webpack --watch &>'#{server_output_location}'")
    # combine core.js main.js and bundle.js
    corejs_file = readFile(location_of_corejs)
    mainjs_file = readFile(location_of_mainjs)
    save (corejs_file+"\n"+ readFile(location_of_bundlejs)+"\n\n"+mainjs_file) , to:location_of_super_bundle



routes_ = {}
#
# Python
#
for each in dirs_of_python_files
    absolute_path_to_each = Dir.pwd+"/"+each
    # skip global files
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
save(routes_as_string(routes_), to:routes_file_location)



#FIXME, compile the python after to make it more efficient 
#FIXME, make it so that general_tools and styles.css apply to all sub folders but not all parent folders