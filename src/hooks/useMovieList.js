import axios from "axios";
import { useEffect ,useState } from "react";
import { searchMovie } from "../apis/omdb";


function useMovieList(...args)
{
    
 
   const [movieList, setMovieList] = useState([]);

    // to pass mulitiple movienames using     ==>>    ...args
     async function downLoadDefaultMovies(...args)
    {
        args.map((eachArg) =>
        {
            console.log("eachArg" ,eachArg);
        });
       
        const urls =  args.map((eachArg) => searchMovie(eachArg));
        console.log("urls" ,urls);
        const response = await axios.all(   urls.map(  (eachUrl)  =>  axios.get(eachUrl)  ) ); 
        console.log("response" ,response)
        if(response[0].data.Error)
        {
            setMovieList([]); 
            console.log("useMovieList Error" , movieList);
        }
        else
        {
            const movieArray = response.map((eachResponse)  =>  eachResponse.data.Search);
            // To CONCAT OF ARRAYS
            setMovieList([].concat(...movieArray))

            console.log("useMovieList" , movieList);
        }



       

      }

    useEffect( () =>
    {
        
        downLoadDefaultMovies(...args)
    } , [...args]  );

    // console.log("movieList in useMovieList" ,movieList);
    return  {movieList};
}

export default useMovieList;