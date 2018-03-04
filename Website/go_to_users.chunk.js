

// create a button
var a_button = New("Btn")
a_button.innerHTML = "Go to users"
a_button.onclick = async function()
    { 
        LoadPage("users/users")
    }



// add the button to the page 
Container.appendChild(a_button)
Center(Container)