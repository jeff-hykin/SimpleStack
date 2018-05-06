import Home.page.js from './Home.page.js.page.js';Global.SystemVars.Modules.Home.page.js = Home.page.js
import HomeᐟHome.page.js from './HomeᐟHome.page.js.page.js';Global.SystemVars.Modules.HomeᐟHome.page.js = HomeᐟHome.page.js
import Homeᐟblah from './Homeᐟblah.module.js';Global.SystemVars.Modules.Homeᐟblah = Homeᐟblah
import Homeᐟblah2 from './Homeᐟblah2.module.js';Global.SystemVars.Modules.Homeᐟblah2 = Homeᐟblah2
import hello from './hello.module.js';Global.SystemVars.Modules.hello = hello

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