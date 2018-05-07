export default Request  = async function({username=null, password=null, url, path, data=null, method="GET",timeout=10}) 
            {
                if (Global.Debugging) { console.log("starting Request for ",[url,path,method]) }
                let request_result = await new Promise
                    (
                        function (resolve, reject) 
                            {
                                try { Global } catch (ReferenceError) { Global = {} } // SimpleStack specific
                                let the_request = new XMLHttpRequest()
                                the_request.onload = function () 
                                    {                       
                                        if (this.status >= 200 && this.status < 300) 
                                            {
                                                try           { var output_ = JSON.parse(the_request.responseText) }
                                                catch(error)  { var output_ = the_request.responseText }
                                                resolve(output_)
                                            } 
                                        else 
                                            {
                                                reject
                                                    (
                                                        {
                                                            status: this.status,
                                                            statusText: the_request.statusText
                                                        }
                                                    )
                                            }
                                    }
                                the_request.onerror = function () 
                                    {
                                        reject
                                            (
                                                {
                                                    status: this.status,
                                                    statusText: the_request.statusText
                                                }
                                            )
                                    }

                                if (username!=null)
                                    {
                                        // if there's a url the follow the url
                                        // if there is a path then try to follow the path
                                        // if there isnt a path then try to go to /login
                                            if (url != null)                            { the_request.open(method, url, true) }
                                        else if (path != null && Global.Website != null) { the_request.open(method, Global.Website+path, true)  }
                                        else if (Global.Website != null)                 { the_request.open(method, Global.Website+"/login", true) }
                                        else                                             { console.log("You gave Request() a username and password, but you didn't give a url or path or Global.Website to login to"); return }
                                        // set the header and send it
                                        the_request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
                                        the_request.send(JSON.stringify({ username: username, password: password }))
                                    }
                                else
                                    {
                                        // if there is data, then change the method from GET to POST
                                        if (data != null)
                                            {
                                                if (method=="GET")
                                                    {
                                                        method = "POST"
                                                    }
                                            }
                                            if (url  != null)                           { the_request.open(method, url, true) }
                                        else if (path != null && Global.Website != null) { the_request.open(method, Global.Website+path, true)  }
                                        else                                             { console.log("You used Request(), but you didn't give a url/path/Global.Website to access"); return }
                                        // if there is data, then include it
                                        if (data != null)
                                            {
                                                the_request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
                                                the_request.send(JSON.stringify(data))
                                            }
                                        else 
                                            {
                                                the_request.send()
                                            }
                                    }
                            }
                    )
                // if it was a login Request, then store the AuthToken in Global for future calls
                if (request_result.jwt_token != null && username != null && password != null) 
                    { 
                        Global.AuthToken = request_result.jwt_token 
                    }
                if (Global.Debugging) { console.log("finished Request for ",[url,path,method]) }
                return request_result
            }