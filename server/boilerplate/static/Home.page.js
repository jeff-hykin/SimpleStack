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
                                    
                                    // Add the hello module
                                    Parent.add("hello")
                                    
                                    
                                    // // Add the go_to_users.module 
                                    // var second_area = New("div")
                                    // second_area.style.height = "500px"
                                    // Container.appendChild(second_area)
                                    // Add({module:"go_to_users", to:second_area})
                                    
                                    
                                    
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
