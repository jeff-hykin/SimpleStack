            LoadChunk = async function(Container) 
                {
                    Container.id = `Home${Global.__NumberOfContainersCreated++}`
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(Container.id, saying_, data_))
                    Home = 
                        {
                            Load: async function()
                                {
                                    "use strict"
                                    
// Create the title
var hello_element = New("h1")
hello_element.innerHTML = "Hello World!"
Center(hello_element)
Container.appendChild(hello_element)

// Add the hello.chunk 
var other_area = New("div")
Container.appendChild(other_area)
Add({chunk:"hello", to:other_area})



WhenAnythingSays("Python sent:",{do: async function (data) {
    hello_element.innerHTML = data
    await TimerFor(2000)
    hello_element.innerHTML += await Run("HelloWorld")
}})


                                }
                        }
                    const DangerousEval = Global.Eval.bind(Home)
                    await Home.Load()
                }
