export default Server = async function(function_name,...array_of_arguments)
            {
                console.log(`"func"+Global.SystemVars.CurrentDir+function_name is:`,"func"+Global.SystemVars.CurrentDir+function_name)
                return await Request({path:"func"+Global.SystemVars.CurrentDir+function_name, data:{arguments:array_of_arguments}})
            }