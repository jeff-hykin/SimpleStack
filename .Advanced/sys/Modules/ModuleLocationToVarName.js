export default ModuleLocationToVarName = function(module_location)
            {
                module_location = module_location.replace(/^\//,"")
                module_location = module_location.replace("(","ᑕ")
                module_location = module_location.replace(")","ᑐ")
                module_location = module_location.replace("+","ᐩ")
                module_location = module_location.replace("-","ᐨ")
                module_location = module_location.replace(":","ᐝ")
                module_location = module_location.replace("\/","ᐟ")
                module_location = module_location.replace("\\","ᐠ")
                return module_location;
            }