# go to the parent directory
import os,sys,inspect
currentdir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parentdir  = os.path.dirname(currentdir)
sys.path.insert(0,parentdir)

#
#   Create the @Route decorator (jsonifys all output)
#
from random import randint
import regex as re
REAL_DECORATOR = None
def Route(*args, **kwargs):
    global REAL_DECORATOR
    REAL_DECORATOR = None

    the_decorator_args   = args
    the_decorator_kwargs = kwargs
    wrapper_num = str(randint(1,2000000))
    exec(re.sub('\n        ','\n', '''
        def a_real_decorator(the_function,the_decorator_args=the_decorator_args,the_decorator_kwargs=the_decorator_kwargs):
            @app.route(*the_decorator_args,**the_decorator_kwargs)
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
