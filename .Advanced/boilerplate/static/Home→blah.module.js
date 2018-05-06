            LoadModule = async function(Parent) 
                {
                    // so attached listeners know who attached them
                    Global.SystemVars.CurrentOrigin = "blah"
                    // create the module in an object so that DangerousEval can be used 
                    const blah = 
                        {
                            Node: document.createElement("module"),
                            Load: async function()
                                {
                                    "use strict"
                                    
                                    // var array = require('in-array')
                                    
                                    
                                    var blah = document.createElement('div')
                                    
                                    blah.innerHTML = "BLAHHHHHHHHHH"
                                    
                                    Parent.add(blah)
                                }
                        }
                    // set the id
                    blah.Node.id = "blah"
                    // setup DangerousEval
                    const DangerousEval = Global.Eval.bind(blah)
                    // set Loading
                    Global.SystemVars.Loading.push(blah)
                    
                    //
                    // load module 
                    //
                    await blah.Load()
                    
                    // attach to parent
                    Parent.add(blah.Node)
                    // turn off loading
                    Global.SystemVars.Loading.pop()
                    // turn off the CurrentOrigin since the module is done loading
                    Global.SystemVars.CurrentOrigin = undefined
                }
