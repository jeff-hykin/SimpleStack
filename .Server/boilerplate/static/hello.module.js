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
                                    
                                    var whenButtonIsClicked = async function()
                                        { 
                                            log("The button was pressed")
                                            var python_answer = await Run("Hello",["Everyone"])
                                            log(python_answer)
                                        }
                                    var a_button = New("Button", {innerHTML:"imma button", onclick: whenButtonIsClicked})
                                    Parent.add(a_button)
                                    
                                    var TheGlobalModule = document.getElementById("GlobalModule")
                                    TheGlobalModule.onmousewheel = ()=>
                                        {
                                            console.log(`i'm from the Hello.module GlobalModule`)
                                        }
                                    // change function def 
                                    // change all DOM seters 
                                    
                                    
                                    // function RunThatPython()
                                    //     {
                                    //         var python_answer = await Run("Hello",["Everyone"])
                                    //     }
                                    // WhenSomeoneSays("Run that python again", RunThatPython)
                                    // // checks all the modules 
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
