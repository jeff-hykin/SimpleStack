// Create the title
var hello_element = New("h1")
hello_element.innerHTML = "Hello World!"
Center(hello_element)
Container.appendChild(hello_element)

// Add the hello.chunk 
var other_area = New("div")
Container.appendChild(other_area)
Add({chunk:"hello", to:other_area})



WhenAnythingSays("Python sent:",{do: async function (data) {
    hello_element.innerHTML = data
    await TimerFor(2000)
    hello_element.innerHTML += await Run("HelloWorld")
}})

