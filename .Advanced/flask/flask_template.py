#
#   Imports and global vars
#
if True:
    import os,sys,inspect
    from random import randint
    from flask  import Flask, jsonify, request, render_template, send_from_directory
    import regex as re


    DEBUGGING = True
    PORT_NUM = 5000
    THE_APP  = Flask(__name__)
    CURRENT_DIRECTORY = os.getcwd()
    
    # go to the parent directory
    currentdir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
    parentdir  = os.path.dirname(currentdir)
    sys.path.insert(0,parentdir)



#
#   System code
#
if True:
    # Create the route decorator to jsonify the output of all the routes
    # this uses a pretty bad hack in order to get things working
    REAL_DECORATOR = None
    def Route(*args, **kwargs):
        the_decorator_args   = args
        the_decorator_kwargs = kwargs
        wrapper_num = str(randint(1,2000000))
        global REAL_DECORATOR
        REAL_DECORATOR = None 
        exec(re.sub('\n            ','\n', '''
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
            '''))
        return REAL_DECORATOR





#
#   The Actual Code, The Request Handlers
#
if __name__ == "__main__":

    # auto-generated SystemRoutes
    file = open(CURRENT_DIRECTORY+"/.Advanced/flask/SystemRoutes.py", "r"); exec(file.read()); file.close()
    SystemRoutes()
    # custom routes
    file = open(CURRENT_DIRECTORY+"/Website/Global/GlobalPython.py", "r"); exec(file.read()); file.close()
    Routes()

    print('\n\ngo to http://localhost:'+str(PORT_NUM)+' to see the Server\n\n')
    THE_APP.run(port=PORT_NUM,debug=DEBUGGING)