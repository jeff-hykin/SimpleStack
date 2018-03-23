Global.Website = "http://localhost:5000/"
let log = console.log
var classof = Function.prototype.call.bind(Object.prototype.toString)
function GetByXpath(path) 
    {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
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
function CenterVertically(element)
    {
        element.parentNode.classList.add('valign-wrapper')
    }
