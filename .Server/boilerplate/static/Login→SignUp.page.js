            LoadModule = async function(Parent) 
                {
                    if (Parent.id != "GlobalModule")  { Parent.id = `SignUp${Global.__NumberOfModulesCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(Parent.id, saying_, data_))
                    var SignUp = 
                        {
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
                    const DangerousEval = Global.Eval.bind(SignUp)
                    await SignUp.Load()
                }
