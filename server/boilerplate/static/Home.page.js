LoadChunk = async function(container) {
// Create the title
hello_element = New("h1")
hello_element.innerHTML = "Hello World!"
Center(hello_element)
container.appendChild(hello_element)

// Add the hello.chunk 
other_area = New("div")
container.appendChild(other_area)
add({chunk:"hello", to:other_area})
}