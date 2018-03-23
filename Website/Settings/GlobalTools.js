Global.Website = "http://localhost:5000/"
let log = console.log
function GetByXpath(path) 
    {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
var classof = Function.prototype.call.bind(Object.prototype.toString)
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
