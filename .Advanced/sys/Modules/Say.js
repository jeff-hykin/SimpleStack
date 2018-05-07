export default Say = function  (saying)
    {
        try 
            {
                var the_node = Global.Loading[Global.Loading.length-1]
                return the_node.dispatchEvent(new Event(saying))
            }
        catch(e){}
        return window.dispatchEvent(new Event(saying))
    }