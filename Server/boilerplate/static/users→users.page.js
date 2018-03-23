            LoadChunk = async function(container) 
                {
                    if (container.id != "Pagecontainer")  { container.id = `users${Global.__NumberOfcontainersCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(container.id, saying_, data_))
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
