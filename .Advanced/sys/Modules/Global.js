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
        window.__GlobalInitObj = 
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
                        return true
                    },
            }
    }
const Global = new Proxy(window.__GlobalInitObj, GlobalProxy)
export default Global