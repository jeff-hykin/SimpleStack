// create
var organizer       = new VerticalList()
var title           = new H1({innerHTML : "Hello World!"})
var login_button    = new Button({ innerHTML : "go to login page" , margin:"12px"})
var sign_up_button  = new Button({ innerHTML : "sign up" , margin:"12px"})


// attach
organizer.add(title)
organizer.add(login_button)
organizer.add(sign_up_button)
Parent.add(organizer)


// set attributes
organizer.centerEach()
Global.on.greeting = function ()
    {
        console.log(`triggered!`)
        title.innerHTML = Global.greeting 
    }
login_button.onclick = function ()
    {
        LoadPage("Login/Login")
    }
sign_up_button.onclick = function ()
    {
        LoadPage("Login/SignUp")
    }



