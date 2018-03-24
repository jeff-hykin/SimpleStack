            LoadChunk = async function(Parent) 
                {
                    if (Parent.id != "PageParent")  { Parent.id = `dashboard${Global.__NumberOfParentsCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(Parent.id, saying_, data_))
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
