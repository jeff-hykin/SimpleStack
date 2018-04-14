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
                    file = open('/Users/jeffhykin/Documents/_Programming/SimpleStack/Server/boilerplate/static/Home.page.js', "r")
                    output = file.read()
                    file.close()
                    return output

                @Route('/users/<string:name>')
                def route2():
                    return  render_template('users→<string•name>.html')

                @Route('/page/users/<string:name>')
                def page_route2():
                    file = open('/Users/jeffhykin/Documents/_Programming/SimpleStack/Server/boilerplate/static/users→<string•name>.page.js', "r")
                    output = file.read()
                    file.close()
                    return output

                @Route('/users/users')
                def route3():
                    return  render_template('users→users.html')

                @Route('/page/users/users')
                def page_route3():
                    file = open('/Users/jeffhykin/Documents/_Programming/SimpleStack/Server/boilerplate/static/users→users.page.js', "r")
                    output = file.read()
                    file.close()
                    return output

                @Route('/Login/SignUp')
                def route4():
                    return  render_template('Login→SignUp.html')

                @Route('/page/Login/SignUp')
                def page_route4():
                    file = open('/Users/jeffhykin/Documents/_Programming/SimpleStack/Server/boilerplate/static/Login→SignUp.page.js', "r")
                    output = file.read()
                    file.close()
                    return output

                @Route('/Login/Login')
                def route5():
                    return  render_template('Login→Login.html')

                @Route('/page/Login/Login')
                def page_route5():
                    file = open('/Users/jeffhykin/Documents/_Programming/SimpleStack/Server/boilerplate/static/Login→Login.page.js', "r")
                    output = file.read()
                    file.close()
                    return output

                @Route('/module/hello')
                def module_route6():
                    file = open('/Users/jeffhykin/Documents/_Programming/SimpleStack/Server/boilerplate/static/hello.module.js', "r")
                    output = file.read()
                    file.close()
                    return output

                
                @Route('/func/HelloWorld', methods=['POST'])
                def func_route7():
                    DATA_FROM_CLIENT = ReceiveJsonData()
                    

                    
                    return "\nHello from python!"

                
                @Route('/func/Hello', methods=['POST'])
                def func_route8():
                    DATA_FROM_CLIENT = ReceiveJsonData()
                    
                    name_ = DATA_FROM_CLIENT['arguments'][0]

                    
                    return "Hello "+name_+"!"

                @RequireLoginForThis
                @Route('/func/users/UserNameChange', methods=['POST'])
                def func_route9():
                    DATA_FROM_CLIENT = ReceiveJsonData()
                    
                    new_username = DATA_FROM_CLIENT['arguments'][0]

                    
                    if User.withUsername(new_username) == None:
                        current_user_data = User.withUsername(CurrentUsersUsername())
                        new_user = User.add(username,current_user_data.password)
                        new_user = current_user_data
                        return True
                    else:
                        return False

                @RequireLoginForThis
                @Route('/func/users/UserBalance', methods=['POST'])
                def func_route10():
                    DATA_FROM_CLIENT = ReceiveJsonData()
                    
                    username = DATA_FROM_CLIENT['arguments'][0]

                    
                    if CurrentUsersUsername() == username:
                        return User.withUsername(username).balance
                    else:
                        return None

                
                @Route('/func/Login/Login', methods=['POST'])
                def func_route11():
                    DATA_FROM_CLIENT = ReceiveJsonData()
                    
                    username = DATA_FROM_CLIENT['arguments'][0]
                    password = DATA_FROM_CLIENT['arguments'][1]

                    
                    possible_outputs = \
                        { 
                            "really": "-_- really?",
                            "password_len": "Sorry, passwords need to be 8 characters or more",
                            "username_len": "Usernames, need to be 8 characters or more",
                            "success" : "Success!",
                        }
                    if password == "password":
                        return possible_outputs["really"]
                    elif len(password) < 8:
                        return possible_outputs["password_len"]
                    elif len(username) < 8:
                        return possible_outputs["username_len"]
                    else:
                        return possible_outputs["success"]
