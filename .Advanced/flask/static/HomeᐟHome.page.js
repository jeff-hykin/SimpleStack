            export default async function(Parent) 
                {
                    // so attached listeners know who attached them
                    Global.SystemVars.CurrentOrigin = "Home"
                    // create the module in an object so that DangerousEval can be used 
                    const Home = 
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
                    Home.Node.id = "Home"
                    // setup DangerousEval
                    const DangerousEval = Global.Eval.bind(Home)
                    // set Loading
                    Global.SystemVars.Loading.push(Home)
                    
                    //
                    // load module 
                    //
                    await Home.Load()
                    
                    // attach to parent
                    Parent.add(Home.Node)
                    // turn off loading
                    Global.SystemVars.Loading.pop()
                    // turn off the CurrentOrigin since the module is done loading
                    Global.SystemVars.CurrentOrigin = undefined
                }
