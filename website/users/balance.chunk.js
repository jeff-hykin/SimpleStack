

if (Global.user_is_logged_in)
    {
        balance_ = request({path:"UserBalance",data:{args:[Global.username]}})
        balance_div = document.createElement("div")
        balance_div.innerHTML = await balance_;
        container.appendChild(balance_div)
    }
else
    {
        balance_div = document.createElement("div")
        balance_div.innerHTML = "Need to login";
        container.appendChild(balance_div)
    }
