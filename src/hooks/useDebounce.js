

// when we typing input term in navbar its immediately updating 
// the output we dont want that we want to render after
// some time

function useDebounce ( callBack , delay = 1000)
{
    //  console.log("useDebounce args" ,callBack) 

    // 1 . its take a callback  event => (e)
    // 2 . return a modified callback
    //  3 . executes after a  minute
    let timerId;
    return ( ...args)=>
    {
         clearTimeout(timerId); 
        //    clearTimeout(timerId);  before old timer is gong clear it out
       timerId= setTimeout(() =>
        {
            // ...args => its callback event => (e)

            callBack(...args)

        } , delay)

    }
}


export default useDebounce;
