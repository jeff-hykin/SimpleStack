import _ from "lodash"
// console.log(`start of homepage.js`)
console.log(`Parent is:`,Parent)
// create elements
var title_element = document.createElement("h1")
var input_box     = document.createElement("input")


// set attributes
input_box.onkeydown = async(eventObj)=>
    {
        if (eventObj.key == "Enter")
            {
                title_element.innerHTML = await Server("Hello",eventObj.target.value)
            }
    }
title_element.innerHTML = "Hello World"


// attach elements
Parent.add(title_element)
Parent.add("hello")
Parent.add(input_box)