// create
var login_card      = New("Card",{ width:"520px", height:"auto", marginTop:"12%", padding:"50px 30px" })
var vertical_list   = new List()
var a_title         = New("h2", { innerHTML:"YOUR SITE", fontWeight:"100", marginBottom:"30px" })
var username_box    = new Input({ placeholder:"Username", })
var password_box    = new Input({ placeholder:"Password", type:"password" })
var login_button    = New("Button",{ innerHTML:"login", width:"95%", marginTop:"20px" })
var error_msg_box   = New("div")


// attach
Parent.add(login_card)
login_card.add(vertical_list)
vertical_list.add(a_title)
vertical_list.add(username_box)
vertical_list.add(password_box)
vertical_list.add(login_button)
vertical_list.add(error_msg_box)


// set attributes
HorizonallyCenterChildrenOf(Parent)
vertical_list.alignEach("center horizontally")
username_box.validator = (value)=>{ if (value.length < 8) { return {valid: false, error_message:"needs to be 8 characters"} }; return true }
password_box.validator = (value)=>{ if (value.length < 8) { return {valid: false, error_message:"needs to be 8 characters"} }; return true }
login_button.onclick = async function()
    {
        console.log(`username is `, username_box.value)
        console.log(`password is `, password_box.value)
        var server_response = await Run("Login/Login", [ username_box.value, password_box.value ] )
        if (server_response != "Success!")
            {
                error_msg_box.innerHTML = server_response
            }
        else
            {
                error_msg_box.innerHTML = ""
                LoadPage("Home")
            }
        console.log(`server_response is:`,server_response)
    }
error_msg_box.style.marginTop = "10px"



