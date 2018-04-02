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
                    const DangerousEval = Global.Eval.bind(Home)
                    await Home.Load()
                }
