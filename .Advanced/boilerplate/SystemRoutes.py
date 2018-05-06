def SystemRoutes(): #this is name-specific
    print("setting system routes")

    # root directory
    @Route('/')
    def root():
        return  render_template("Home.html")

    @Route('/Home')
    def route1():
        return  render_template('Home.html')

    @Route('/page/Home')
    def page_route1():
        file = open('/Users/jeffhykin/Documents/_Programming/SimpleStack/.Advanced/boilerplate/static/Home.page.js', "r")
        output = file.read()
        file.close()
        return output

    @Route('/Home/Home')
    def route2():
        return  render_template('Home→Home.html')

    @Route('/page/Home/Home')
    def page_route2():
        file = open('/Users/jeffhykin/Documents/_Programming/SimpleStack/.Advanced/boilerplate/static/Home→Home.page.js', "r")
        output = file.read()
        file.close()
        return output

    @Route('/module/Home/blah')
    def module_route3():
        file = open('/Users/jeffhykin/Documents/_Programming/SimpleStack/.Advanced/boilerplate/static/Home→blah.module.js', "r")
        output = file.read()
        file.close()
        return output

    @Route('/module/Home/blah2')
    def module_route4():
        file = open('/Users/jeffhykin/Documents/_Programming/SimpleStack/.Advanced/boilerplate/static/Home→blah2.module.js', "r")
        output = file.read()
        file.close()
        return output

    @Route('/module/hello')
    def module_route5():
        file = open('/Users/jeffhykin/Documents/_Programming/SimpleStack/.Advanced/boilerplate/static/hello.module.js', "r")
        output = file.read()
        file.close()
        return output

    @Route('/func/Home/thingy', methods=['POST'])
    def func_route6():
        DATA_FROM_CLIENT = request.get_json()
        # set the arguments

        # run the actual body of the function
        print ("wats uuppp")

    @Route('/func/Hello', methods=['POST'])
    def func_route7():
        DATA_FROM_CLIENT = request.get_json()
        # set the arguments
        name_ = DATA_FROM_CLIENT['arguments'][0]

        # run the actual body of the function
        print("name = ",name_)
        return "Hello "+name_+"!"

    @Route('/bundle/lodash')
    def bundle_route1():
        return send_from_directory('static', "lodash.bundle.js")
