            LoadChunk = async function(Container) 
                {
                    Container.add = Container.appendChild
                    if (Container.id != "PageContainer")  { Container.id = `users${Global.__NumberOfContainersCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(Container.id, saying_, data_))
                    users = 
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
