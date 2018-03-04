            LoadChunk = async function(Container) 
                {
                    Container.id = `dashboard${Global.__NumberOfContainersCreated++}`
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(Container.id, saying_, data_))
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
