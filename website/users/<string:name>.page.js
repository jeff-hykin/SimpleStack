

thisModule.name

// if user is logged in
if (Global.user_is_logged_in && name == Global.username)
    {
        add({module:"dashboard",to:container})
    }
else 
    {
        // add({module:"public_info",to:container})
    }

