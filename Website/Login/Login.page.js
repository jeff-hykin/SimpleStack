// create
var login_card      = new Card({ width:"520px", height:"auto", marginTop:"12%", padding:"50px 30px" })
var main_container  = new Container({},login_card) 

// attach
login_card.add("Login/Login")
Parent.add(main_container)


// set attributes
main_container.centerHorizontally()
