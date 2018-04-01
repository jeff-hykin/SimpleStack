            LoadModule = async function(Parent) 
                {
                    if (Parent.id != "GlobalModule")  { Parent.id = `Home${Global.__NumberOfModulesCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(Parent.id, saying_, data_))
                    var Home = 
                        {
                            Load: async function()
                                {
                                    "use strict"
                                    
                                    // create
                                    var organizer       = new VerticalList()
                                    var title           = New("h1"    ,{ innerHTML : "Hello World!"     })
                                    var login_button    = New("Button",{ innerHTML : "go to login page" , margin:"12px"})
                                    var sign_up_button  = New("Button",{ innerHTML : "sign up" , margin:"12px"})
                                    var thing           = New("div",{innerHTML:"thing"})
                                    var a_container     = new Container(thing)
                                    
                                    // attach
                                    organizer.add(title)
                                    organizer.add(login_button)
                                    organizer.add(sign_up_button)
                                    organizer.add(a_container)
                                    Parent.add(organizer)
                                    
                                    
                                    // set attributes
                                    organizer.centerEach()
                                    a_container.width = "50%"
                                    // a_container.height = "100px"
                                    // a_container.width = "300px";
                                    // a_container.centerHorizontally()
                                    // a_container.alignLeft()
                                    Global.a = a_container
                                    Global.o = organizer
                                    login_button.onclick = function ()
                                        {
                                            LoadPage("Login/Login")
                                        }
                                    sign_up_button.onclick = function ()
                                        {
                                            LoadPage("Login/SignUp")
                                        }
                                    
                                    
                                    

                                }
                        }
                    const DangerousEval = Global.Eval.bind(Home)
                    await Home.Load()
                }
