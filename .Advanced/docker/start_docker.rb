# set the current folder to the folder this file is in
Dir.chdir __dir__

# FIXME, set the flat_stack_server_container name based on the name of the specific flatstack project

# FIXME, have this imported from a settings file
server_port = "8000"

# FIXME, add a check here to see if it already exists or not,
# Create the flask docker container
# puts `docker build -t flat_stack_server_image .`

# Create the instace of the container
puts `docker run -d --name flat_stack_server_container -p #{server_port}:80 flat_stack_server_image`