            LoadModule = async function(Parent) 
                {
                    if (Parent.id != "PageParent")  { Parent.id = `go_to_users${Global.__NumberOfParentsCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(Parent.id, saying_, data_))
                    go_to_users = 
                        {
                            Load: async function()
                                {
                                    "use strict"
                                    
                                    
                                    
                                    // create a button
                                    var a_button = New("Btn")
                                    a_button.innerHTML = "Go to users"
                                    a_button.onclick = async function()
                                        { 
                                            LoadPage("users/users")
                                        }
                                    
                                    
                                    
                                    // add the button to the page 
                                    Container.appendChild(a_button)
                                    a_button.style.marginTop = "50px"
                                    Center(Container)
                                }
                        }
                    const DangerousEval = Global.Eval.bind(go_to_users)
                    await go_to_users.Load()
                }
