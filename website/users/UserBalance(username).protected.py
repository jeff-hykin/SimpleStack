if CurrentUsersUsername() == username:
    return User.withUsername(username).balance
else:
    return None