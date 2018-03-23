Global.Debugging = true
Global.Website = "http://localhost:5000/"
var log = console.log
var classof = Function.prototype.call.bind(Object.prototype.toString)
function New(element_name,attributes={}) 
    {
        var output_ = document.createElement(element_name)
        if (element_name=="Button")
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
class Container extends Node
    {
        constructor()
            {
                this.__underyling_outer_div = New("div")
                this.__underyling_inner_div = New("div", { position:"relative" })
                this.__underyling_outer_div.add(this.__underyling_inner_div)
                this.__container_centering_status = null
            }
        clearMiddle()
            {
                // reset the centering status
                this.__container_centering_status = null
                // delete the sub div, and add a new one to be centered 
                this.__underyling_inner_div.parentNode.removeChild(this.__underyling_inner_div)
                this.__underyling_inner_div = New("div", { position:"relative", style:{textAlign: "center"} })
                this.__underyling_outer_div.add(this.__underyling_inner_div)
            }
        center(element)
            {
                this.clearMiddle()
                this.__container_centering_status = "centered"
                element.style.position = "absolute"
                element.style.top = "50%"
                element.style.left = "50%"
                element.style.transform = "translate(-50%, -50%)"
                this.__underyling_inner_div.add(element)
            }
        add(...elements) 
            {
                if(this.__container_centering_status == "centered") 
                    {
                        console.error(`So you`)
                        return
                    }
                for (var each in elements)
                    {
                        if (elements[each] instanceof Container) 
                            {
                                this.__underyling_inner_div.appendChild(elements[each].__underyling_outer_div)
                            }
                        else 
                            {
                                this.__underyling_inner_div.appendChild(elements[each])
                            }
                    }
            }
        get asElem()
            {
                return this.__underyling_outer_div
            }
        get width() 
            {
                return this.__underyling_outer_div.style.width
            }
        set width(amount) 
            {
                this.__underyling_outer_div.style.width = amount 
            }
        get height() 
            {
                return this.__underyling_outer_div.style.height
            }
        set height(amount) 
            {
                this.__underyling_outer_div.style.height = amount 
            }
        get id()
            {
                return this.__underyling_outer_div.id
            }
        set id(value)
            {
                this.__underyling_outer_div.id = value
            }
    }
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
