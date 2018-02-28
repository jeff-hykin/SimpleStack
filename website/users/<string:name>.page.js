

thisChunk.name

// if user is logged in
if (Global.user_is_logged_in && name == Global.username)
    {
        add({chunk:"dashboard",to:container})
    }
else 
    {
        // add({chunk:"public_info",to:container})
    }

