from flask  import Flask, jsonify, request, render_template, send_from_directory
app  = Flask(__name__)


# Run the FlatStack system
file = open(".Advanced/sys/system.py", "r"); exec(file.read()); file.close()


#
#   The Routes
#
if __name__ == "__main__":

    DEBUGGING = True
    PORT_NUM = 5000

    # auto-generated SystemRoutes
    file = open(".Advanced/flask/SystemRoutes.py", "r"); exec(file.read()); file.close()
    SystemRoutes()
    
    # routes set from main
    file = open("Website/Global/main.py", "r"); exec(file.read()); file.close()
    Routes()
    
    # The main website catchall route
    @Route('/<path:path>')
    def catch_all(path):
        return  render_template('index.html')
        
    app.run(port=PORT_NUM,debug=DEBUGGING)