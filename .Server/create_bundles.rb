require "rubygems"
require "json"


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

routes_file_location       = "boilerplate/BundleRoutes.py"






# change to the current directory (regardless of where the file is being run from)
Dir.chdir __dir__


# get npm dependencies
    file = open("package.json")
    parsed_package_file = JSON.parse(file.read)
    dependencies = parsed_package_file['dependencies'].keys


the_routes = ""
route_number = 0
for each_package_name in dependencies
    # clear/flush the temp file
    `rm -f temp_bundle_init.js`

    # create the code to initiate the bundle
    file_contents = "module.exports = require('#{each_package_name}')"
    save file_contents, to:"temp_bundle_init.js"

    bundle_static_file_name = each_package_name+".bundle.js"
    relative_path = "boilerplate/static/#{bundle_static_file_name}"
    # create the actual bundle
    identifier = "__#{rand(0..99999999999999)}"
    `browserify temp_bundle_init.js --standalone '#{identifier}'>'#{relative_path}'`
    # FIXME, don't forget to uglify 
    puts "    creating bundle for "+each_package_name

    # perform a quick replace to convert g.identifier to g["package_name"]
    # FIXME, this is platform dependent (mac) linux doesnt need the first ''
    `sed -i '' 's/\\.#{identifier}/["__#{each_package_name}"]/g' '#{relative_path}'`
    
    route_number = route_number+ 1
    the_routes = the_routes + <<-HEREDOC

    @Route('/bundle/#{each_package_name}')
    def bundle_route#{route_number}():
        return send_from_directory('static', "#{each_package_name}.bundle.js")
    HEREDOC
end
save the_routes, to:routes_file_location
`rm -f temp_bundle_init.js`


# FIXME, create a smart version that indenpendently keeps track of the packages and versions and doesnt reinstall the same version
# FIXME, add browserify and uglify to auto installer
# FIXME, use  X-Sendfile support to make serving these files way faster
# FIXME, store the bundles with localForage to get even better performance


# create a global require function
#     if package_name not in Global.LoadedPackages
#         await request({path:"bundle/"+package_name})
#         Global.LoadedPackages[package_name] = 
#     return Global.LoadedPackages[package_name]
    
