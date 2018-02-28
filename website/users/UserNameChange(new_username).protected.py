if User.withUsername(new_username) == None:
    current_user_data = User.withUsername(CurrentUsersUsername())
    new_user = User.add(username,current_user_data.password)
    new_user = current_user_data
    return True
else:
    return False