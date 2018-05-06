window.this_code_is_running = true
Main = async function () 
    {
        console.log(`window.location.href.replace(/^(?:\/\/|[^\/]+)*\//, "") is:`,window.location.href.replace(/^(?:\/\/|[^\/]+)*\//, ""))
        LoadPage(window.location.href.replace(/^(?:\/\/|[^\/]+)*\//, ""))
    }
Main()