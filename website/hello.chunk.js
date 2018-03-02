

// create a button
var a_button = New("Btn")
a_button.innerHTML = "immaButton"
a_button.onclick = async function()
    { 
        console.log("The button was pressed")
        a_button.innerHTML = await run("HelloWorld()")
        Global.say("I just rendered something from the server")
    }

// add the button to the page 
container.appendChild(a_button)
Center(container)