#
#   Info
#
    # DEBUGGING, by default is true but can be set to false
    # THE_SECRET_KEY, a string you should use to keep logins secure
    # PORT_NUM, by default is 5000 but can be changed 
    # Route, a decorator (from THE_APP.route) for specifying the route of a url
    # the /login route is already reserved for handling logins 
    # can use the @RequireLoginForThis decorator to make a route inacessible without logging in first
    # the request.get_json() function will return a dict of the json data that the client sent
    # THE_APP, the flask app variable (use it if you know what you're doing)
    # THE_DATABASE, the SQL Alchemy database variable  use it if you know what you're doing)

Global = {}

# FIXME! Change this!
THE_SECRET_KEY = "FIXME, replace this with an actual key"
PORT_NUM       = 5000


# needs to be named Routes()
def Routes(): #this is name-specific
    pass