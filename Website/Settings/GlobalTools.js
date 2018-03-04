Global.Website = "http://localhost:5000/"
let log = console.log
function GetByXpath(path) 
    {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
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
function TimerFor(time_amount)
    {
        return new Promise(resolve => 
            {
                setTimeout(()=>{ resolve(null) }, time_amount)
            })
    }