
    @Route('/bundle/lodash')
    def bundle_route1():
        return send_from_directory('static', "lodash.bundle.js")
