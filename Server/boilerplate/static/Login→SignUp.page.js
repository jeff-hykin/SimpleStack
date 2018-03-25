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
                                    var card = New("Card")
                                    var list = new List()
                                    var email_input    = New("Input",{ placeholder:"Username" })
                                    var password_box   = New("Input",{ placeholder:"Password", type:"password" })
                                    var password_box   = New("Input",{ placeholder:"Retype Password", type:"password" })
                                    
                                    
                                    // set 
                                    HorizonallyCenterChildrenOf(Parent)
                                    
                                    // attach
                                    Parent.add(card)
                                    card.add(list)
                                    list.add(email_input)
                                    list.add(password_input)
                                    list.add(password_check)

                                }
                        }
                    const DangerousEval = Global.Eval.bind(SignUp)
                    await SignUp.Load()
                }
