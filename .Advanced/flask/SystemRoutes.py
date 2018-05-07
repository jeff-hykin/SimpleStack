def SystemRoutes(): #this is name-specific

    @Route('/func/Hello', methods=['POST'])
    def func_route1():
        DATA_FROM_CLIENT = request.get_json()
        # set the arguments
        name_ = DATA_FROM_CLIENT['arguments'][0]

        # run the actual body of the function
        print("name = ",name_)
        return "Hello "+name_+"!"
