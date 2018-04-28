            LoadModule = async function(Parent) 
                {
                    // so attached listeners know who attached them
                    Global.SystemVars.CurrentOrigin = "hello"
                    // create the module in an object so that DangerousEval can be used 
                    const hello = 
                        {
                            Node: document.createElement("module"),
                            Load: async function()
                                {
                                    "use strict"
                                    
                                    var button        = document.createElement("button")
                                    
                                    button.innerHTML = "click me"
                                    button.onclick = async ()=>
                                        {
                                            LoadPage('Home/Home')
                                        }
                                    
                                    Parent.add(button)
                                }
                        }
                    // set the id
                    hello.Node.id = "hello"
                    // setup DangerousEval
                    const DangerousEval = Global.Eval.bind(hello)
                    // set Loading
                    Global.SystemVars.Loading.push(hello)
                    
                    //
                    // load module 
                    //
                    await hello.Load()
                    
                    // attach to parent
                    Parent.add(hello.Node)
                    // turn off loading
                    Global.SystemVars.Loading.pop()
                    // turn off the CurrentOrigin since the module is done loading
                    Global.SystemVars.CurrentOrigin = undefined
                }
