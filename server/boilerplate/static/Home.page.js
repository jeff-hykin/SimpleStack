            LoadModule = async function(Parent) 
                {
                    if (Parent.id != "GlobalModule")  { Parent.id = `Home${Global.__NumberOfModulesCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(Parent.id, saying_, data_))
                    var Home = 
                        {
                            Load: async function()
                                {
                                    "use strict"
                                    
                                    // create
                                    var vertical_list = new List()
                                    var title         = New("h1"    ,{ innerHTML : "Hello World!"     })
                                    var login_button  = New("Button",{ innerHTML : "go to login page" })
                                    
                                    // set attributes
                                    HorizonallyCenterChildrenOf(Parent)
                                    vertical_list.alignEach("center horizontally")
                                    login_button.onclick = function ()
                                        {
                                            LoadPage("Login/Login")
                                        }
                                    
                                    // attach 
                                    Parent.add(vertical_list)
                                    vertical_list.add(title)
                                    vertical_list.add(login_button)
                                    
                                    
                                    
                                    
                                    // // add a button for going to the login page
                                    // var whenLoginButtonIsClicked = async function()
                                    //     { 
                                    //         LoadPage("Login/Login")
                                    //     }
                                    // var a_button = New("Button", {innerHTML:"Login", onclick: whenLoginButtonIsClicked})
                                    // list_container.add(a_button)
                                    
                                    // var div_item = New("div",{innerHTML:"login_button#2!",id:"test"})
                                    // console.log(`div_item.id is:`,div_item.id)
                                    // // HorizontallyCenter(div_item)
                                    // list_container.add(div_item)
                                    
                                    
                                    
                                    // Add the hello module
                                    // Parent.add("hello")
                                    
                                    
                                    
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
