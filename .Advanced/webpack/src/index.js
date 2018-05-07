import Home from './Home.js';Global.SystemVars.Modules.Home = Home
import hello from './hello.module.js';Global.SystemVars.Modules.hello = hello

Global.Debugging = true
Global.Website = "http://127.0.0.1:5000/"


var curl = async url=> new Promise(resolve => { 
                    fetch(url).then(res=>res.text()).then(body=>resolve(body))
                })

var LoadDependencies = async ()=>dependencies=JSON.parse(await curl('https://raw.githubusercontent.com/jeff-hykin/SimplePackager/master/dependencies.json'))
LoadPage(window.location.href.replace(/^(?://|[^/]+)*//, ))