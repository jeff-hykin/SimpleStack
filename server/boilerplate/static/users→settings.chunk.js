LoadChunk = async function(container) {
if (Global.user_is_logged_in)
    {
        thisChunk.listen("changes made to user settings")
        if (thisChunk.hears["changes made to user settings"])
            {
                var div_helper     = document.createElement("div")
                var save_button    = document.createElement("button")
                var discard_button = document.createElement("button")
                div_helper.appendChild(save_button)
                div_helper.appendChild(discard_button)
                save_button.onClick =()=>
                    {
                        var new_username = container.username_box.innerHTML
                        AddLoadingAnimation(container,"Asking server to make change")
                        result = await request({path:"UserNameChange",data:{args:[new_username]}})
                        RemoveLoadingAnimation(container)
                        if (result == true)
                            {
                                AddOverlay(container,"Change made successfully")
                                await timer_for(3)
                                RemoveOverlay(container)
                            }
                        else
                            {
                                AddOverlay(container,"Change was unsuccessful")
                                await timer_for(3)
                                RemoveOverlay(container)
                                container.reload()
                            }

                    }
                container.appendChild(div_helper)
                return
            }


        container.username_div = document.createElement("div")
            container.username_button = document.createElement("button")
            container.username_div.appendChild(container.username_button)
            container.username_box    = document.createElement("box")    
            username_box.innerHTML = Global.username
            container.username_div.appendChild(container.username_box)
            container.username_box.disabled = true;
            container.username_button.onClick =()=>  
                {
                    container.username_box.disabled = !container.username_box.disabled;
                }
            container.username_box.onchange =()=>
                {
                    GlobalEvents.say("changes made to user settings")
                }
            
        
    }
}