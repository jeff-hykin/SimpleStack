hello_element = New("p")
hello_element.style = "width:100%;font-size:30pt;"
hello_element.className = "center-align"
hello_element.innerHTML = "Hello World!"
container.appendChild(hello_element)

other_area = New("div")
container.appendChild(other_area)


blah = add({chunk:"hello", to:other_area})