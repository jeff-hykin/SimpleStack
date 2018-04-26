#
#   Info
#
    # DEBUGGING, by default is true but can be set to false
    # THE_SECRET_KEY, a string you should use to keep logins secure
    # PORT_NUM, by default is 5000 but can be changed
    # Route, a decorator (from THE_APP.route) for specifying the route of a url
    # the request.get_json() function will return a dict of the json data that the client sent
    # THE_APP, the flask app variable (use it if you know what you're doing)

Global         = {}
THE_SECRET_KEY = "blah, replace this with an actual key"
PORT_NUM       = 5000
DATABASE       = "Mongo"

# custom routes
def Routes(): #this is name-specific
    pass






def readFile(file_location):
    f = open(file_location, 'w')
    output = f.read()
    f.close()
    return output












# FIXME, put this somewhere else
if DATABASE == "mongo":
    from flask_pymongo import PyMongo
    # declare a database here
    mongo = PyMongo(THE_APP)
    # turn it on 
    os.system("mongod --dbpath '"+readFile("./Server/.database_install_location.txt")+"' &")
