
    @Route('/bundle/bcrypt')
    def bundle_route1():
        return send_from_directory('static', "bcrypt.bundle.js")

    @Route('/bundle/hammerjs')
    def bundle_route2():
        return send_from_directory('static', "hammerjs.bundle.js")

    @Route('/bundle/in-array')
    def bundle_route3():
        return send_from_directory('static', "in-array.bundle.js")

    @Route('/bundle/jquery')
    def bundle_route4():
        return send_from_directory('static', "jquery.bundle.js")

    @Route('/bundle/lodash')
    def bundle_route5():
        return send_from_directory('static', "lodash.bundle.js")

    @Route('/bundle/materialize-css')
    def bundle_route6():
        return send_from_directory('static', "materialize-css.bundle.js")
