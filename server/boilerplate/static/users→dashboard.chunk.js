            LoadChunk = async function(Box) 
                {
                    if (Box.id != "PageBox")  { Box.id = `dashboard${Global.__NumberOfBoxesCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(Box.id, saying_, data_))
                    dashboard = 
                        {
                            Load: async function()
                                {
                                    "use strict"
                                    




add({chunk:"balance", to:container})
add({chunk:"settings", to:container})
                                }
                        }
                    const DangerousEval = Global.Eval.bind(dashboard)
                    await dashboard.Load()
                }
