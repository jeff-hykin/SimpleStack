            LoadChunk = async function(container) 
                {
                    if (container.id != "Pagecontainer")  { container.id = `dashboard${Global.__NumberOfcontainersCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(container.id, saying_, data_))
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
