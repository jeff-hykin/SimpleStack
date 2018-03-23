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
class Container2
    {
        constructor()
            {
                // this.underyling_main_div   = New("div")
                // this.underyling_sub_div = New("div", { position:"relative" })
                // this.underyling_main_div.add(this.underyling_sub_div)
            }


        add(...elements) 
            {
                log("im adding someetihgn")
                // log(this.underyling_main_div instanceof Node)
                // for (var each in elements)
                //     {
                //         // if its a container
                //         log("class is:",getClassOf(elements[each]))
                        
                //         if (elements[each] instanceof Container) 
                //             {
                //                 log("got here")
                //                 // this.underyling_sub_div.appendChild(elements[each].underyling_main_div)
                //             }
                //         else 
                //             {
                //                 // this.underyling_sub_div.appendChild(elements[each])
                //             }
                //     }
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