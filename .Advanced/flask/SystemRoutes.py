def SystemRoutes(): #this is name-specific
    print("setting system routes")

    # root directory
    @Route('/')
    def root():
        return  render_template("Home.html")

    @Route('/func/Home/thingy', methods=['POST'])
    def func_route1():
        DATA_FROM_CLIENT = request.get_json()
        # set the arguments

        # run the actual body of the function
        print ("wats uuppp")

    @Route('/func/Hello', methods=['POST'])
    def func_route2():
        DATA_FROM_CLIENT = request.get_json()
        # set the arguments
        name_ = DATA_FROM_CLIENT['arguments'][0]

        # run the actual body of the function
        print("name = ",name_)
        return "Hello "+name_+"!"
