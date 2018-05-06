                        
            export default async function(Parent) 
                {
                    // so attached listeners know who attached them
                    Global.SystemVars.CurrentOrigin = "Home.page.js"
                    // create the module in an object so that DangerousEval can be used 
                    const Home.page.js = 
                        {
                            Node: document.createElement("module"),
                            Load: async function()
                                {
                                    "use strict"
                                    
                                    alert('Yo this is a nested home page')
                                    
                                    
                                    Parent.add("blah")
                                }
                        }
                    // set the id
                    Home.page.js.Node.id = "Home.page.js"
                    // setup DangerousEval
                    const DangerousEval = Global.Eval.bind(Home.page.js)
                    // set Loading
                    Global.SystemVars.Loading.push(Home.page.js)
                    
                    //
                    // load module 
                    //
                    await Home.page.js.Load()
                    
                    // attach to parent
                    Parent.add(Home.page.js.Node)
                    // turn off loading
                    Global.SystemVars.Loading.pop()
                    // turn off the CurrentOrigin since the module is done loading
                    Global.SystemVars.CurrentOrigin = undefined
                }
