class container
    {
        constructor()
            {
                this.underyling_main_div   = New("div")
                this.underyling_parent_div = New("div", { position:"relative" })
                
                this.underyling_main_div.add(this.underyling_parent_div)
            }


        add(...elements) 
            {
                log(this.underyling_parent_div)
                log(this.underyling_main_div instanceof Node)
                log("Keys: WUTS UP DAWG2")
                // for (var each in Object.keys( this.underyling_main_div ))
                //     {
                //         log("    ",each)
                //     }
                this.underyling_parent_div.add(elements)
                log("after appendChild")
            }
        get width() 
            {
                return this.underyling_main_div.style.width
            }
        set width(amount) 
            {
                this.underyling_main_div.style.width = amount 
            }
        get height() 
            {
                return this.underyling_main_div.style.height
            }
        set height(amount) 
            {
                this.underyling_main_div.style.height = amount 

            }
    }

var a_container = new container()
a_container.add(New("div", {innerHTML:"BLAH"}))
// var a_div          = New("div", {style:{width:"100px",height:"100px",position:"relative"}})
// var a_relative_div = New("div", {innerHTML:"BLAH", style:{position:"absolute",bottom:0,left:0} })
// a_div.add(a_relative_div)
Container.add(a_div)



// // Create the title
// var hello_element = New("h1")
// hello_element.innerHTML = "Hello World!"
// Container.appendChild(hello_element)
// Center(hello_element)


// // Add the hello.chunk 
// var other_area = New("div")
// Container.appendChild(other_area)
// Add({chunk:"hello", to:other_area})

// // Add the go_to_users.chunk 
// var second_area = New("div")
// second_area.style.height = "500px"
// Container.appendChild(second_area)
// Add({chunk:"go_to_users", to:second_area})



// WhenAnythingSays("Python sent:",{do: async function (data) {
//     hello_element.innerHTML = data
//     await TimerFor(2000)
//     hello_element.innerHTML += await Run("HelloWorld")
// }})

