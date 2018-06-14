require_relative './server_info'
# set the current folder to the folder this file is in
Dir.chdir __dir__

# stop and remove the container
puts `docker kill #{server_container_name} && docker rm #{server_container_name}`