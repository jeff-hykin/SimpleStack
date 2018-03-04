

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