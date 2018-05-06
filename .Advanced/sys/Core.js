console.log(`am i even running`)
//
//    Main Tools 
//
if (1) // Front End Database setup 
    {
        var database_options = 
            {
                driver      : localforage.WEBSQL, // Force WebSQL; same as using setDriver()
                name        : 'myApp',
                version     : 1.0,
                size        : 10000000, // Size of database, in bytes. WebSQL-only for now.
                storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
                description : 'Simple Stack Default Store'
            }
        localforage.config(database_options)
    }
if (1) // setup for Global 
    {
        var OnChangerProxy =
            {
                // FOR: events
                set : function (target, key, new_value)
                    {
                        console.log(`Global.Loading is:`,Global.Loading)
                        // try 
                            // {
                                var the_node = Global.Loading[Global.Loading.length-1].Node
                                console.log(`the_node is:`,the_node)
                                var event_name = 'Global.Vars.'+key
                                the_node.addEventListener(event_name,new_value)
                            // }
                        
                        return true
                    },
            }
        var __GlobalInitObj = 
            {
                Vars: 
                    {
                        Debugging: false,
                    },
                Changes: [],
                SystemVars:
                    {
                        Modules: {},
                        Module: document.getElementById("GlobalModule"),
                        CurrentPath: undefined,
                        get CurrentDir()
                            {
                                return this.CurrentPath.replace(/(.*\/).+?$/,"$1")
                            },
                        CurrentOrigin: undefined,
                        HistoryIndex: null,
                        LoadedPackages:[],
                        History: [],
                        Loading: [],
                    },
                Functions:
                    {
                        LoadAllVars: async function()
                            {
                                var keys = await localforage.getItem('Vars.keys')
                                if (keys)
                                    {
                                        for (let each of keys)
                                            {
                                                console.log(`about to call LoadValue for`,each)
                                                Global.LoadValue(each)
                                            }
                                    }
                            },
                        LoadValue: async function(key)
                            {
                                this.Vars[key] = await localforage.getItem(key)
                            },
                        Eval: function (input_){return eval(input_)},
                        ClearChanges: function ()
                            {
                                Global.Changes = []
                            }
                    },
                on: new Proxy({}, OnChangerProxy),
            }
        var GlobalProxy =
            {
                ownKeys: function (target) 
                    {
                        return Reflect.ownKeys(target)
                    },
                has : function (target, key)
                    {
                        return key in target.Vars;
                    },
                get : function (target, key)
                    {
                        // FIXME, make this more efficient 
                        if (key in target)            { return target[key] }
                        else if (key in target.SystemVars) { return target.SystemVars[key] }
                        else if (key in target.Functions ) { return target.Functions[key] }
                        else if (key in target.Vars      ) { return target.Vars[key] }
                        return target.Vars[key]
                    },
                set : function (target, key, new_value)
                    {
                        target.Changes.push({[key]:{'previous value':target[key],'new value':new_value }})
                        target.Vars[key] = new_value
                        localforage.setItem("Global.Vars."+key, new_value)
                        
                        // FIXME, this should be O(1), but right now its O(n)
                        window.dispatchEvent(new CustomEvent('Global.Vars.'+key)) // FIXME // FOR: events
                        // wait till site loads
                        if (target.SystemVars.CurrentPath)
                            {
                                // keep track of which vars to update 
                                localforage.setItem('Vars.keys', Object.keys(Global.Vars)) 
                            }
                    },
            }
    }
const Global = new Proxy(__GlobalInitObj, GlobalProxy)

if (1) // Core functions
    {
        var ModuleLocationToVarName = function(module_location)
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
        var Say = function  (saying)
            {
                try 
                    {
                        var the_node = Global.Loading[Global.Loading.length-1]
                        return the_node.dispatchEvent(new Event(saying))
                    }
                catch(e){}
                return window.dispatchEvent(new Event(saying))
            }
        var Request  = async function({username=null, password=null, url, path, data=null, method="GET",timeout=10}) 
            {
                if (Global.Debugging) { console.log("starting Request for ",[url,path,method]) }
                let request_result = await new Promise
                    (
                        function (resolve, reject) 
                            {
                                try { Global } catch (ReferenceError) { Global = {} } // SimpleStack specific
                                let the_request = new XMLHttpRequest()
                                the_request.onload = function () 
                                    {                       
                                        if (this.status >= 200 && this.status < 300) 
                                            {
                                                try           { var output_ = JSON.parse(the_request.responseText) }
                                                catch(error)  { var output_ = the_request.responseText }
                                                resolve(output_)
                                            } 
                                        else 
                                            {
                                                reject
                                                    (
                                                        {
                                                            status: this.status,
                                                            statusText: the_request.statusText
                                                        }
                                                    )
                                            }
                                    }
                                the_request.onerror = function () 
                                    {
                                        reject
                                            (
                                                {
                                                    status: this.status,
                                                    statusText: the_request.statusText
                                                }
                                            )
                                    }

                                if (username!=null)
                                    {
                                        // if there's a url the follow the url
                                        // if there is a path then try to follow the path
                                        // if there isnt a path then try to go to /login
                                            if (url != null)                            { the_request.open(method, url, true) }
                                        else if (path != null && Global.Website != null) { the_request.open(method, Global.Website+path, true)  }
                                        else if (Global.Website != null)                 { the_request.open(method, Global.Website+"/login", true) }
                                        else                                             { console.log("You gave Request() a username and password, but you didn't give a url or path or Global.Website to login to"); return }
                                        // set the header and send it
                                        the_request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
                                        the_request.send(JSON.stringify({ username: username, password: password }))
                                    }
                                else
                                    {
                                        // if there is data, then change the method from GET to POST
                                        if (data != null)
                                            {
                                                if (method=="GET")
                                                    {
                                                        method = "POST"
                                                    }
                                            }
                                            if (url  != null)                           { the_request.open(method, url, true) }
                                        else if (path != null && Global.Website != null) { the_request.open(method, Global.Website+path, true)  }
                                        else                                             { console.log("You used Request(), but you didn't give a url/path/Global.Website to access"); return }
                                        // if there is data, then include it
                                        if (data != null)
                                            {
                                                the_request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
                                                the_request.send(JSON.stringify(data))
                                            }
                                        else 
                                            {
                                                the_request.send()
                                            }
                                    }
                            }
                    )
                // if it was a login Request, then store the AuthToken in Global for future calls
                if (request_result.jwt_token != null && username != null && password != null) 
                    { 
                        Global.AuthToken = request_result.jwt_token 
                    }
                if (Global.Debugging) { console.log("finished Request for ",[url,path,method]) }
                return request_result
            }
        var Server   = async function(function_name,...array_of_arguments)
            {
                console.log(`"func"+Global.SystemVars.CurrentDir+function_name is:`,"func"+Global.SystemVars.CurrentDir+function_name)
                return await Request({path:"func"+Global.SystemVars.CurrentDir+function_name, data:{arguments:array_of_arguments}})
            }
        
        var Require  = async function(bundle_name)
            {
                return new Promise(resolve => 
                    {
                        if (!(bundle_name in Global.LoadedPackages))
                            {
                                var script = document.createElement('script');
                                script.onload = function()
                                    {
                                        console.log(`Script loaded`)
                                        Global.LoadedPackages[bundle_name] = window["__"+bundle_name]
                                        resolve(Global.LoadedPackages[bundle_name])
                                    }
                                script.src = "bundle/"+bundle_name
                                document.head.appendChild(script);
                            }
                    })
            }
        var LoadPage = async function(page_name)
            {
                // normal click
                if (page_name)
                    {
                        // console.log(`FROM CLICK/LOAD`)
                        // console.log(`page_name is:`,page_name)
                        // console.log(`history.state is:`,history.state)
                        // console.log(`Global.SystemVars.History is:`,Global.SystemVars.History)
                        // first page 
                        if (history.state == null || Global.SystemVars.History.length == 0)
                            {
                                Global.LoadAllVars()
                                Global.SystemVars.HistoryIndex = Global.SystemVars.HistoryIndex?Global.SystemVars.HistoryIndex:0
                                Global.SystemVars.CurrentPath = "/"+page_name
                            }
                        // another page
                        else 
                            {
                                Global.SystemVars.HistoryIndex++
                                if (1) // set the CurrentPath
                                    {
                                        // console.log(`old page is`,Global.SystemVars.CurrentPath)
                                        // push the old page to the history
                                        // console.log(`I added the old page to history`,Global.SystemVars.History)
                                        // then set the new CurrentPath
                                        // go up a directory
                                        if (page_name.match(/^\.\.\/.+$/))
                                            {
                                                // FIXME
                                                Global.SystemVars.CurrentPath = Global.SystemVars.CurrentPath.replace(/\/.+?$/,"")
                                                Global.SystemVars.CurrentPath = Global.SystemVars.CurrentPath.replace(/\/.+?\/$/,"")
                                            }
                                        // absolute directory
                                        else if (page_name.match(/^\/.+$/))
                                            {
                                                Global.SystemVars.CurrentPath = page_name
                                            }
                                        // relative directory
                                        else
                                            {
                                                Global.SystemVars.CurrentPath = Global.SystemVars.CurrentPath.replace(/\/.+?$/,"")
                                                Global.SystemVars.CurrentPath += "/"+ page_name
                                            }
                                        // console.log(`the new page is`,Global.SystemVars.CurrentPath)
                                        // change the url to the new current directory
                                        // keep the history one above the HistoryIndex
                                    }
                            }
                        Global.SystemVars.History[Global.SystemVars.HistoryIndex] = Global.SystemVars.CurrentPath
                        window.history.pushState(`${Global.SystemVars.HistoryIndex}`, "Title", Global.SystemVars.CurrentPath)
                    }
                // loaded from history (either forwards or backwards)
                else
                    {
                        if (history.state === null)
                            {
                                console.log(`going back`)
                                history.back()
                                return
                            }
                        console.log(`FROM HIST`)
                        console.log(`page_name is:`,page_name)
                        console.log(`history.state is:`,history.state)
                        console.log(`Global.SystemVars.History is:`,Global.SystemVars.History)
                        console.log(`Global.SystemVars.HistoryIndex is:`,Global.SystemVars.HistoryIndex)
                        // history moved, so = it where it moved
                        Global.SystemVars.HistoryIndex = history.state
                        Global.SystemVars.CurrentPath = Global.SystemVars.History[Global.SystemVars.HistoryIndex]
                    }
                
                // let js_code = await Request({path:"page"+Global.SystemVars.CurrentPath})
                // history.pushState(Global.SystemVars.CurrentPath,"Home", Global.SystemVars.CurrentPath)
                // FIXME, check for errors here (encase page doesn't exist)
                // TODO, utilize state for something useful
                // history.pushState({}, page_name, page_name.replace(/\/.+?$/,""))
                // delete the existing main_module
                var main_module = document.getElementById("GlobalModule")
                main_module.delete()
                // create a new main_module 
                Global.SystemVars.Module = document.createElement('div')
                Global.SystemVars.Module.id = "GlobalModule"
                document.body.appendChild(Global.SystemVars.Module)
                // run the page with the new main_module
                var page_varname = ModuleLocationToVarName(Global.SystemVars.CurrentPath)
                console.log(`about to load page ${page_varname}`)
                return await Global.SystemVars.Modules[page_varname](Global.SystemVars.Module)
            }
    }
if (1) // protos
    {
        var a = document.createElement('a')
        node_proto = a.__proto__.__proto__.__proto__
        // delete 
        node_proto.delete = function ()
            {
                this.parentNode.removeChild(this)
            }
        // add 
        node_proto.add = async function (input_)
            {
                // console.log(`about to add`,input_)
                // if input is a string
                if (typeof input_ == "string")
                    {
                        var module_absolute_path = Global.SystemVars.CurrentDir+input_
                        var module_varname = ModuleLocationToVarName(module_absolute_path)
                        var parent_elem = this
                        console.log(`about to load module ${module_varname}`)
                        Global.SystemVars.Modules[module_varname](parent_elem)
                        // if inputload input as a module
                        // var parent_elem = this
                        // var loadModule = async function ()
                        //     {
                        //         return ( await eval(await Request({path:"module"+Global.SystemVars.CurrentDir+input_}))(parent_elem)  )
                        //     }
                        // loadModule() // load the module asyncly
                        // FIXME, check for network errors here 
                    }
                else if (input_ instanceof Node)
                    {
                        this.appendChild(input_)
                    }
                else
                    {
                        var type_ = typeof input_
                        if ( type_ == "object" && "constructor" in input_ ) { var type_ = input_.constructor.name }
                    }
                return this
            }
    }
// for history back/forward
window.onpopstate = function(...inputs) { LoadPage()}

console.log(`am i even running`)