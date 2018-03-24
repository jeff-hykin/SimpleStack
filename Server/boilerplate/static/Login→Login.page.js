            LoadModule = async function(Parent) 
                {
                    if (Parent.id != "PageParent")  { Parent.id = `Login${Global.__NumberOfModulesCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(Parent.id, saying_, data_))
                    var Login = 
                        {
                            Load: async function()
                                {
                                    "use strict"
                                    
                                    
                                    
                                    class LabeledInput extends Node
                                        {
                                            constructor(inputs_)
                                                {
                                                    // get name
                                                    if (!("name" in inputs_)) { inputs_.name = "" }
                                                    // create the text 
                                                    this.label = New("div",{innerHTML:name})
                                                    this.input = New("input")
                                                }
                                        }
                                    
                                    var username = new LabeledInput("Username")

                                }
                        }
                    const DangerousEval = Global.Eval.bind(Login)
                    await Login.Load()
                }
