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
                                    var signup_card     = New("Card",{ width:"520px", height:"auto", marginTop:"12%", padding:"50px 30px" })
                                    var the_list        = new List({width:"100%"})
                                    var a_title         = New("h2", { innerHTML:"YOUR SITE", fontWeight:"100", marginBottom:"30px" })
                                    var email_input     = new Input({ placeholder:"Email", width:"95%"})
                                    var password_box    = new Input({ placeholder:"Password", type:"password" , width:"95%"})
                                    var password_check  = new Input({ placeholder:"Retype password", type:"password" , width:"95%"})
                                    var login_button    = New("Button",{ innerHTML:"login", width:"95%", marginTop:"20px" })
                                    
                                    // attach
                                    Parent.add(signup_card)
                                    signup_card.add(the_list)
                                    the_list.add(a_title)
                                    the_list.add(email_input)
                                    the_list.add(password_box)
                                    the_list.add(password_check)
                                    the_list.add(login_button)
                                    
                                    
                                    // set 
                                    HorizonallyCenterChildrenOf(Parent)
                                    HorizonallyCenterChildrenOf(signup_card)

                                }
                        }
                    const DangerousEval = Global.Eval.bind(SignUp)
                    await SignUp.Load()
                }
