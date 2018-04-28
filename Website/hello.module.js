var button        = document.createElement("button")

button.innerHTML = "click me"
button.onclick = async ()=>
    {
        LoadPage('Home/Home')
    }

Parent.add(button)