var whenButtonIsClicked = async function()
    { 
        log("The button was pressed")
        var python_answer = await Run("Hello",["Everyone"])
        log(python_answer)
        // TellPage("Python sent:",)
    }
var a_button = New("Button", {innerHTML:"imma button", onclick: whenButtonIsClicked})
Parent.add(a_button)





// function RunThatPython()
//     {
//         var python_answer = await Run("Hello",["Everyone"])
//     }
// WhenSomeoneSays("Run that python again", RunThatPython)
// // checks all the modules 