possible_outputs = \
    { 
        "really": "-_- really?",
        "password_len": "Sorry, passwords need to be 8 characters or more",
        "username_len": "Usernames, need to be 8 characters or more",
        "success" : "Success!",
    }
if password == "password":
    return possible_outputs["really"]
elif len(password) < 8:
    return possible_outputs["password_len"]
elif len(username) < 8:
    return possible_outputs["username_len"]
else:
    return possible_outputs["success"]