Global.Website = "http://localhost:5000/"
let log = console.log
function GetByXpath(path) 
    {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
function New(element_name,attributes={}) 
    {
        var output_ = document.createElement(element_name)
        if (element_name=="Btn")
            {
                output_.className = "waves-effect waves-light btn"
            }
        // before returning, set the add function, and the attributes
        output_.add = function (...element) 
            {
                output_.appendChild(...element)
            }
        for (var each_key of Object.keys(attributes))
            {
                if (typeof attributes[each_key] == "object" && attributes[each_key] != null )
                    {
                        output_[each_key] = {}
                        for (var each_sub_key of Object.keys(attributes[each_key]))
                            {
                                output_[each_key][each_sub_key] = attributes[each_key][each_sub_key]
                            }
                    }
                else
                    {
                        output_[each_key] = attributes[each_key]
                    }
            }
        
        return output_
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