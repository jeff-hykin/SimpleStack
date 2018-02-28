global.website = "http://localhost:5000/"

function New(element_name) 
    {
        if (element_name=="Btn")
            {
                output_ = document.createElement(element_name)
                output_.className = "waves-effect waves-light btn"
                return output_
            }
        return document.createElement(element_name)
    }
function Center(element)
    {
        element.classList.add('center-align')
    }