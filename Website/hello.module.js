var whenButtonIsClicked = async function()
    { 
        log("The button was pressed")
        var python_answer = await Run("Hello",["Everyone"])
        log(python_answer)
    }
var a_button = New("Button", {innerHTML:"imma button", onclick: whenButtonIsClicked})
Parent.add(a_button)

var TheGlobalModule = document.getElementById("GlobalModule")
TheGlobalModule.onmousewheel = ()=>
    {
        console.log(`i'm from the Hello.module GlobalModule`)
    }
// change function def 
// change all DOM seters 


// function RunThatPython()
//     {
//         var python_answer = await Run("Hello",["Everyone"])
//     }
// WhenSomeoneSays("Run that python again", RunThatPython)
// // checks all the modules 