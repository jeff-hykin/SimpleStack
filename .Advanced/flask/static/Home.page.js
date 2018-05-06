            export default async function(Parent) 
                {
                    // so attached listeners know who attached them
                    Global.SystemVars.CurrentOrigin = "Home"
                    // create the module in an object so that DangerousEval can be used 
                    const Home = 
                        {
                            Node: document.createElement("module"),
                            Load: async function()
                                {
                                    "use strict"
                                    
                                    console.log(`start of homepage.js`)
                                    console.log(`Parent is:`,Parent)
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
                    Home.Node.id = "Home"
                    // setup DangerousEval
                    const DangerousEval = Global.Eval.bind(Home)
                    // set Loading
                    Global.SystemVars.Loading.push(Home)
                    
                    //
                    // load module 
                    //
                    await Home.Load()
                    
                    // attach to parent
                    Parent.add(Home.Node)
                    // turn off loading
                    Global.SystemVars.Loading.pop()
                    // turn off the CurrentOrigin since the module is done loading
                    Global.SystemVars.CurrentOrigin = undefined
                }
