// create
var login_card    = New("Card",{ width:"35%", height:"350px", marginTop:"12%", padding:"50px 30px" })
var vertical_list = new List()
var username_box  = New("Input",{ placeholder:"Username" })
var password_box  = New("Input",{ placeholder:"Password", type:"password" })
var login_button  = New("Button",{ innerHTML:"login", width:"95%", marginTop:"20px" })

// set attributes
HorizonallyCenterChildrenOf(Parent)
vertical_list.alignEach("center horizontally")


// attach
Parent.add(login_card)
login_card.add(vertical_list)
vertical_list.add(username_box)
vertical_list.add(password_box)
vertical_list.add(login_button)
