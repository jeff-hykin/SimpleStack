                        import _ from "lodash"

            export default async function(Parent) 
                {
                    // so attached listeners know who attached them
                    Global.SystemVars.CurrentOrigin = "Home.page.js"
                    // create the module in an object so that DangerousEval can be used 
                    const Home.page.js = 
                        {
                            Node: document.createElement("module"),
                            Load: async function()
                                {
                                    "use strict"
                                    
                                    // create elements
                                    var title_element = document.createElement("h1")
                                    var input_box     = document.createElement("input")
                                    
                                    
                                    
                                    
                                    // set attributes
                                    input_box.onkeydown = async(eventObj)=>
                                        {
                                            if (eventObj.key == "Enter")
                                                {
                                                    title_element.innerHTML = await Server("Hello",eventObj.target.value)
                                                }
                                        }
                                    title_element.innerHTML = "Hello World"
                                    
                                    
                                    // attach elements
                                    Parent.add(title_element)
                                    Parent.add("hello")
                                    Parent.add(input_box)
                                }
                        }
                    // set the id
                    Home.page.js.Node.id = "Home.page.js"
                    // setup DangerousEval
                    const DangerousEval = Global.Eval.bind(Home.page.js)
                    // set Loading
                    Global.SystemVars.Loading.push(Home.page.js)
                    
                    //
                    // load module 
                    //
                    await Home.page.js.Load()
                    
                    // attach to parent
                    Parent.add(Home.page.js.Node)
                    // turn off loading
                    Global.SystemVars.Loading.pop()
                    // turn off the CurrentOrigin since the module is done loading
                    Global.SystemVars.CurrentOrigin = undefined
                }
