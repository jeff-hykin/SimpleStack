#
#   Info
#
    # DEBUGGING, by default is true but can be set to false
    # THE_SECRET_KEY, a string you should use to keep logins secure
    # PORT_NUM, by default is 5000 but can be changed 
    # Route, a decorator (from THE_APP.route) for specifying the route of a url
    # the /login route is already reserved for handling logins 
    # can use the @RequireLoginForThis decorator to make a route inacessible without logging in first
    # can use the CurrentUsersUserName() func to find out the username of who is logged in
    # the ReceiveJsonData() function will return a dict of the json data that the client sent
    # THE_APP, the flask app variable (use it if you know what you're doing)
    # THE_DATABASE, the SQL Alchemy database variable  use it if you know what you're doing)


# FIXME! Change this! 
THE_SECRET_KEY = "FIXME, replace this with an actual key"  


# create the login function (needs to be named UserHasLoggedIn)
def UserHasLoggedIn(username,password): #this is name-specific
    if username == "jeff.hykin":
        print("Found jeff.hykin")
    result = Users.withUsername(username)
    if result != None:
        if result["password"] == password:
            return True
    # else 
    return False


def AfterServerStarted(): #this is name-specific
    print("about to add user")
    # Users("jeff.hykin","blah")



# needs to be named Routes()
def Routes(): #this is name-specific
    # print("setting routes")
    # # root directory
    # @Route('/')
    # def root():
    #     return  render_template("base.html")
    #             # {
    #             #     "dir":"/", 
    #             #     "msg" : "the server is working and you're at the root directory"
    #             # }
    # root POST
    @Route('/',methods=['POST'])
    def create_store():
        data_from_client = ReceiveJsonData()
        return { "msg" : "I got your data" }

    # get a name /<string:name>
    @Route('/give/<string:name>')
    def get_a_store(name):
        return { "msg" : "oh I see you gave me the name "+name }

    
    # @Route('/home')
    # def root():
    #     return  render_template("base.html")

    # @Route('/page/home')
    # def home():
    #     print("\n\n starting /page/home")
    #     filename = "boilerplate/static/" +"home"+ ".page.js"
    #     file = open(filename, "r")
    #     output = file.read()
    #     file.close()
    #     return output

    # @Route('/component/home')
    # def home():
    #     print("\n\n starting /component/home")
    #     filename = "boilerplate/static/" +"home"+ ".page.js"
    #     file = open(filename, "r")
    #     output = file.read()
    #     file.close()
    #     return output





    # you can also use return render_template('index.html')
    # to output html pages
    # you can use @RequireLoginForThis 
    # and you can use CurrentUsersUserName() 
    # and ReceiveJsonData()

# API Guide 
    # to get a login key:
        # Request should be a POST request at /login 
        # the header should be Content-type:Application/json
        # the body should be { "username": *insert_username_here* , "password" : *insert_password_here* }
    # to do use a command that requires login
        # the Request and body can be whatever you want
        # but the header needs to be Authorization:Bearer *TheKeyYouWereGivenAtLogin*

