            LoadModule = async function(Parent) 
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
                                    
                                    // create
                                    var organizer       = new VerticalList()
                                    var title           = new H1({innerHTML : "Hello World!"})
                                    var login_button    = new Button({ innerHTML : "go to login page" , margin:"12px"})
                                    var sign_up_button  = new Button({ innerHTML : "sign up" , margin:"12px"})
                                    
                                    
                                    // attach
                                    organizer.add(title)
                                    organizer.add(login_button)
                                    organizer.add(sign_up_button)
                                    Parent.add(organizer)
                                    
                                    
                                    // set attributes
                                    organizer.centerEach()
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
