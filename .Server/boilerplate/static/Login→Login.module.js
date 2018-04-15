            LoadModule = async function(Parent) 
                {
                    // so attached listeners know who attached them
                    Global.SystemVars.CurrentOrigin = "Login"
                    // create the module in an object so that DangerousEval can be used 
                    const Login = 
                        {
                            Node: document.createElement("module"),
                            Load: async function()
                                {
                                    "use strict"
                                    
                                    // create
                                    var error_msg_box   = new Div({marginTop:"10px"})
                                    var login_button    = new Button({ innerHTML:"login", width:"95%", marginTop:"20px" })
                                    var password_box    = new Input({ placeholder:"Password", type:"password" })
                                    var username_box    = new Input({ placeholder:"Username", })
                                    var a_title         = new H2({ innerHTML:"YOUR SITE", fontWeight:"100", marginBottom:"30px" })
                                    var vertical_list   = new VerticalList({}, a_title, username_box, password_box, login_button, error_msg_box)
                                    
                                    
                                    
                                    // attach
                                    Parent.add(vertical_list)
                                    
                                    
                                    
                                    // set attributes
                                    vertical_list.centerEach()
                                    username_box.validator = (value)=>{ if (value.length < 8) { return {valid: false, error_message:"needs to be 8 characters"} }; return true }
                                    password_box.validator = (value)=>{ if (value.length < 8) { return {valid: false, error_message:"needs to be 8 characters"} }; return true }
                                    login_button.onclick = async function()
                                        {
                                            console.log(`username is `, username_box.value)
                                            console.log(`password is `, password_box.value)
                                            var server_response = await Server("Login/Login", [ username_box.value, password_box.value ] )
                                            if (server_response != "Success!")
                                                {
                                                    error_msg_box.innerHTML = server_response
                                                    console.log(`just set error_msg_box.innerHTML to ${server_response}`)
                                                }
                                    
                                            else
                                                {
                                                    error_msg_box.innerHTML = ""
                                                    LoadPage("Home")
                                                }
                                            console.log(`server_response is:`,server_response)
                                        }
                                    
                                    

                                }
                        }
                    // set the id
                    Login.Node.id = "Login"
                    // setup DangerousEval
                    const DangerousEval = Global.Eval.bind(Login)
                    // set Loading
                    Global.SystemVars.Loading.push(Login)
                    
                    //
                    // load module 
                    //
                    await Login.Load()
                    
                    // attach to parent
                    Parent.add(Login.Node)
                    // turn off loading
                    Global.SystemVars.Loading.pop()
                    // turn off the CurrentOrigin since the module is done loading
                    Global.SystemVars.CurrentOrigin = undefined
                }
