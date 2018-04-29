
    @Route('/bundle/bcrypt')
    def bundle_route1():
        return send_from_directory('static', "bcrypt.bundle.js")

    @Route('/bundle/in-array')
    def bundle_route2():
        return send_from_directory('static', "in-array.bundle.js")

    @Route('/bundle/pug')
    def bundle_route3():
        return send_from_directory('static', "pug.bundle.js")
