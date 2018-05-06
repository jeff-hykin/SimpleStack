            export default async function(Parent) 
                {
                    // so attached listeners know who attached them
                    Global.SystemVars.CurrentOrigin = "blah2"
                    // create the module in an object so that DangerousEval can be used 
                    const blah2 = 
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
                    blah2.Node.id = "blah2"
                    // setup DangerousEval
                    const DangerousEval = Global.Eval.bind(blah2)
                    // set Loading
                    Global.SystemVars.Loading.push(blah2)
                    
                    //
                    // load module 
                    //
                    await blah2.Load()
                    
                    // attach to parent
                    Parent.add(blah2.Node)
                    // turn off loading
                    Global.SystemVars.Loading.pop()
                    // turn off the CurrentOrigin since the module is done loading
                    Global.SystemVars.CurrentOrigin = undefined
                }
