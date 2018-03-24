

class LabeledInput extends Node
    {
        constructor(inputs_)
            {
                // get name
                if (!("name" in inputs_)) { inputs_.name = "" }
                // create the text 
                this.label = New("div",{innerHTML:name})
                this.input = New("input")
            }
    }

var username = new LabeledInput("Username")
