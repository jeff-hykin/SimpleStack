            LoadModule = async function(Parent) 
                {
                    if (Parent.id != "PageParent")  { Parent.id = `Home${Global.__NumberOfModulesCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(Parent.id, saying_, data_))
                    var Home = 
                        {
                            Load: async function()
                                {
                                    "use strict"
                                    
                                    HorizonallyCenterChildrenOf(Parent)
                                    
                                    // Create the title
                                    var hello_element = New("h1",{innerHTML:"Hello World!"})
                                    Parent.add(hello_element)
                                    
                                    
                                    // add a button for going to the login page
                                    var whenButtonIsClicked = async function()
                                        { 
                                            LoadPage("Login/Login")
                                        }
                                    var a_button = New("Button", {innerHTML:"imma button", onclick: whenButtonIsClicked})
                                    Parent.add(a_button)
                                    
                                    class List
                                        {
                                            constructor()
                                                {
                                                    this.__main_div = New("div",{style:{class:"List"}})
                                                    this.__wrapped_list = []
                                                }
                                            add(element)
                                                {
                                                    // check input
                                                    if (!(element instanceof Node))
                                                        {
                                                            console.error("Somewhere you're trying to add this:",element," to a List, but that <- thing isnt a Node")
                                                        }
                                                    // add a wrapper then add to list and __main_div 
                                                    var wrapper = New("div",{style:{class:"ListItemWrapper"}})
                                                    wrapper.add(element)
                                                    this.__wrapped_list.push(wrapper)
                                                    this.__main_div.add(wrapper)
                                                }
                                        }
                                    
                                    // Add the hello module
                                    Parent.add("hello")
                                    
                                    
                                    
                                    // Tell(Module("hello"),"Run that python again")
                                    
                                    
                                    // WhenAnythingSays("Python sent:",{do: async function (data) {
                                    //     hello_element.innerHTML = data
                                    //     await TimerFor(2000)
                                    //     hello_element.innerHTML += await Run("HelloWorld")
                                    // }})
                                    

                                }
                        }
                    const DangerousEval = Global.Eval.bind(Home)
                    await Home.Load()
                }
