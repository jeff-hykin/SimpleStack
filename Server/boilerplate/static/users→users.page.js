            LoadModule = async function(Parent) 
                {
                    if (Parent.id != "PageParent")  { Parent.id = `users${Global.__NumberOfModulesCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(Parent.id, saying_, data_))
                    var users = 
                        {
                            Load: async function()
                                {
                                    "use strict"
                                    
                                    
                                    
                                    
                                    var title_ = New("h2")
                                    title_.innerHTML = "Welcome to the user page"
                                    Container.appendChild(title_)
                                    

                                }
                        }
                    const DangerousEval = Global.Eval.bind(users)
                    await users.Load()
                }
