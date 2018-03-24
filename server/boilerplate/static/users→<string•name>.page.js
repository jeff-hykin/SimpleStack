            LoadChunk = async function(Parent) 
                {
                    if (Parent.id != "PageParent")  { Parent.id = `<string:name>${Global.__NumberOfParentsCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(Parent.id, saying_, data_))
                    <string:name> = 
                        {
                            Load: async function()
                                {
                                    "use strict"
                                    
                                    
                                    
                                    thisChunk.name
                                    
                                    // if user is logged in
                                    if (Global.user_is_logged_in && name == Global.username)
                                        {
                                            add({chunk:"dashboard",to:container})
                                        }
                                    else 
                                        {
                                            // add({chunk:"public_info",to:container})
                                        }
                                    

                                }
                        }
                    const DangerousEval = Global.Eval.bind(<string:name>)
                    await <string:name>.Load()
                }
