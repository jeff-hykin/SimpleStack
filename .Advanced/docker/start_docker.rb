require_relative './server_info'
# set the current folder to the folder this file is in
Dir.chdir __dir__

# run the init function just to make sure the image exists
`ruby initilize_docker.rb`

# Create the instace of the container
puts `docker run -d --name #{server_container_name} -p #{local_server_port}:80 #{server_image_name}`