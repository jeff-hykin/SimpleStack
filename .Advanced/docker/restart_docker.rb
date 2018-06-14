require_relative './server_info'
# set the current folder to the folder this file is in
Dir.chdir __dir__


puts `ruby kill_docker.rb && ruby start_docker.rb && echo " " && echo "Successfully started Docker"`