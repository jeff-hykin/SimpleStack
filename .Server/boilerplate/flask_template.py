#
#   Imports 
#
if True:
    import os,sys,inspect
    pwd = os.getcwd()
    # get the parent directory
    currentdir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
    parentdir  = os.path.dirname(currentdir)
    sys.path.insert(0,parentdir)
    from pprint             import pprint
    from random             import randint
    from flask              import Flask, jsonify, request, render_template
    from flask_restful      import Resource, Api
    from flask_jwt_extended import get_jwt_identity as CurrentUsersUserName
    from flask_jwt_extended import jwt_required as RequireLoginForThis
    from flask_jwt_extended import ( JWTManager, create_access_token)
    from flask_sqlalchemy   import SQLAlchemy
    from setup              import UserHasLoggedIn, THE_SECRET_KEY, AfterServerStarted

#
#   Helper stuff 
#
if True:
    RUN_ON_LAST_LINE = []
    DEBUGGING = True 

#
#   Flask and Database Setup 
#
if True:
    # Flask imports 
    # from flask import Flask, jsonify, request, render_template
    # from flask_restful import Resource, Api

    THE_APP  = Flask(__name__)
    # Create the route decorator to jsonify the output of all the routes
    # this uses a pretty bad hack in order to get things working
    REAL_DECORATOR = None
    def Route(*args, **kwargs):
        the_decorator_args   = args
        the_decorator_kwargs = kwargs
        wrapper_num = str(randint(1,2000000))
        global REAL_DECORATOR
        REAL_DECORATOR = None
        exec('''
def a_real_decorator(the_function,the_decorator_args=the_decorator_args,the_decorator_kwargs=the_decorator_kwargs):
    @THE_APP.route(*the_decorator_args,**the_decorator_kwargs)
    def wrapper'''+wrapper_num+'''(*args, **kwargs):
        output_ = the_function(*args, **kwargs)
        if type(output_) == dict:
            return jsonify(output_)
        else:
            return output_
        
        
    return wrapper'''+wrapper_num+'''
global REAL_DECORATOR
REAL_DECORATOR = a_real_decorator
''')
        return REAL_DECORATOR
    
    # Create a helper function 
    def ReceiveJsonData():
        return request.get_json()

    PORT_NUM = 5000
    RUN_ON_LAST_LINE.append("if DEBUGGING:\n    print('\\n\\ngo to http://localhost:'+str(PORT_NUM)+' to see the Server\\n\\n')\nTHE_APP.run(port=PORT_NUM,debug=DEBUGGING);\n")

#
#   Database Setup: SqlAlchemy Boilerplate
#
if True:
    THE_DATABASE = SQLAlchemy()

    # the below line apparents only turns off Flask's tracking but not SqlAlchemy
    # at least according to https://www.udemy.com/rest-api-flask-and-python/learn/v4/t/lecture/6020504?start=0
    THE_APP.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
    THE_APP.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
    RUN_ON_LAST_LINE = ["with THE_APP.app_context():THE_DATABASE.init_app(THE_APP);print('about to init the database')"] + RUN_ON_LAST_LINE

    # DEMO data (normally would pull from database)
    @THE_APP.before_first_request
    def create_tables():
        THE_DATABASE.create_all()
        AfterServerStarted()


    # get the database models 
    file = open(pwd+"/.Server/database.py", "r"); exec(file.read()); file.close()

#
# Setup Security: JWT (boilerplate stuff)  see: http://flask-jwt-extended.readthedocs.io/en/latest/basic_usage.html
#
if True:
    # from flask_jwt_extended import ( JWTManager, create_access_token)
    # from flask_jwt_extended import jwt_required as RequireLoginForThis
    # from flask_jwt_extended import get_jwt_identity as CurrentUsersUserName

    THE_APP.config['JWT_SECRET_KEY'] = THE_SECRET_KEY
    THE_JWT_MANAGER = JWTManager(THE_APP)

# 
#   Login Setup (Note:depends on UserHasLoggedIn function)
#
if True:

    @THE_APP.route('/login', methods=['POST'])
    def login_API():
        # get the inputs 
        if request.is_json:
            username = request.json.get('username', None)
            password = request.json.get('password', None)
            
            # make sure the username and password exist 
            if username != None and password != None:
                
                #
                #   Authentication process
                #
                # FIXME, eventually make a decortator for this 
                if UserHasLoggedIn(username,password):
                    # Identity can be any data that is json serializable
                    access_token = create_access_token(identity=username)
                    # return the long compicated token 
                    return jsonify(access_token=access_token), 200
                else:
                    return {'error':"incorrect password or username"}
            
            # if either username or password dont exist
            if not username or not password:
                if username != None:
                    return jsonify({"error": "json is missing the 'password' field"}), 400
                elif password != None:
                    return jsonify({"error": "json is missing the 'username' field"}), 400
                else:
                    return jsonify({"error": "json is missing both the 'password' and 'username' field"}), 400
        
        # if the data isnt json 
        else:
            return jsonify({"msg": "Missing JSON in request"}), 400

#
#   The Actual Code, The Request Handlers 
#
if __name__ == "__main__":

    # System routes
    file = open(pwd+"/.Server/boilerplate/routes.py", "r"); exec(file.read()); file.close()
    SystemRoutes()
    # get the routes 
    file = open(pwd+"/.Server/setup.py", "r"); exec(file.read()); file.close()
    Routes()

#
# Clean up 
#
if __name__ == "__main__":
    with THE_APP.app_context() : THE_DATABASE.init_app(THE_APP)
    print('about to init the database')
    if DEBUGGING:
        print('\n\ngo to http://localhost:'+str(PORT_NUM)+' to see the Server\n\n')
        THE_APP.run(port=PORT_NUM,debug=DEBUGGING)