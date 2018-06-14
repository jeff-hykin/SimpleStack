require_relative './server_info'
# set the current folder to the folder this file is in
Dir.chdir __dir__


# FIXME, add a check here to see if it already exists or not
# Create the flask docker container
# puts `docker build -t flat_stack_server_image .`