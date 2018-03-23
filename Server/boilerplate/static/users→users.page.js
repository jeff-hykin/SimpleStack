            LoadChunk = async function(Box) 
                {
                    if (Box.id != "PageBox")  { Box.id = `users${Global.__NumberOfBoxesCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(Box.id, saying_, data_))
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
