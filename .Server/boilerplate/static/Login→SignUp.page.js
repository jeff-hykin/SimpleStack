            LoadModule = async function(Parent) 
                {
                    // so attached listeners know who attached them
                    Global.SystemVars.CurrentOrigin = "SignUp"
                    // create the module in an object so that DangerousEval can be used 
                    const SignUp = 
                        {
                            Node: document.createElement("module"),
                            Load: async function()
                                {
                                    "use strict"
                                    
                                    // create
                                    var login_card      = new Card({ width:"520px", height:"auto", marginTop:"12%", padding:"50px 30px" })
                                    var main_container  = new Container({},login_card) 
                                    
                                    // attach
                                    login_card.add("Login/SignUp")
                                    Parent.add(main_container)
                                    
                                    
                                    // set attributes
                                    main_container.centerHorizontally()

                                }
                        }
                    // set the id
                    SignUp.Node.id = "SignUp"
                    // setup DangerousEval
                    const DangerousEval = Global.Eval.bind(SignUp)
                    // set Loading
                    Global.SystemVars.Loading.push(SignUp)
                    
                    //
                    // load module 
                    //
                    await SignUp.Load()
                    
                    // attach to parent
                    Parent.add(SignUp.Node)
                    // turn off loading
                    Global.SystemVars.Loading.pop()
                    // turn off the CurrentOrigin since the module is done loading
                    Global.SystemVars.CurrentOrigin = undefined
                }
