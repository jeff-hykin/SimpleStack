            LoadModule = async function(Parent) 
                {
                    if (Parent.id != "PageParent")  { Parent.id = `<string:name>${Global.__NumberOfModulesCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(Parent.id, saying_, data_))
                    var <string:name> = 
                        {
                            Load: async function()
                                {
                                    "use strict"
                                    
                                    
                                    
                                    thisModule.name
                                    
                                    // if user is logged in
                                    if (Global.user_is_logged_in && name == Global.username)
                                        {
                                            add({module:"dashboard",to:container})
                                        }
                                    else 
                                        {
                                            // add({module:"public_info",to:container})
                                        }
                                    

                                }
                        }
                    const DangerousEval = Global.Eval.bind(<string:name>)
                    await <string:name>.Load()
                }
