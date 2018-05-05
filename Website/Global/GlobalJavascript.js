// console.log(`GLOBAL JAVASCRIPT WAS RUN`)
// var material = Require('materialize-css')


Global.Debugging = true
Global.Website = "http://127.0.0.1:5000/"


var curl = async url=> new Promise(resolve => { 
                    fetch(url).then(res=>res.text()).then(body=>resolve(body))
                })

LoadDependencies = async ()=>dependencies=JSON.parse(await curl('https://raw.githubusercontent.com/jeff-hykin/SimplePackager/master/dependencies.json'))
LoadDependencies()
packages = {}

async function require(package_name)
    {
        //
        if (package_name in packages)
            {
                return packages[package_name]
            }
        // load dependencies
        try 
            {
                console.log(`starting loading ${package_name}`)
                // load head packages
                for (var each of dependencies[package_name].head) { document.head.innerHTML += each }
                for (var each of dependencies[package_name].body) { document.body.innerHTML += each }
                // FIXME, wait till packages are loaded
                console.log(`finished loading ${package_name}`)
                package[package_name] = {}
            }
        catch (e) {}
    }