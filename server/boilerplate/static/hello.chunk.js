            LoadChunk = async function(container) 
                {
                    if (container.id != "Pagecontainer")  { container.id = `hello${Global.__NumberOfcontainersCreated++}` }
                    const WhenAnythingSays = (saying_,data_)=>(Global.WhenAnythingSays(container.id, saying_, data_))
                    hello = 
                        {
                            Load: async function()
                                {
                                    "use strict"
                                    


// create a button
var a_button = New("Btn")
a_button.innerHTML = "immaButton"
a_button.onclick = async function()
    { 
        log("The button was pressed")
        TellPage("Python sent:",await Run("Hello",["Everyone"]))
    }







// add the button to the page 
Container.appendChild(a_button)
Center(Container)
                                }
                        }
                    const DangerousEval = Global.Eval.bind(hello)
                    await hello.Load()
                }
