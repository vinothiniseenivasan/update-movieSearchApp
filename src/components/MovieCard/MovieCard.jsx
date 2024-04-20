
import { useNavigate } from "react-router-dom";
import "./MovieCard.css"; 
function MovieCard(   {Title ,Year ,Type, Poster ,imdbID }  )
{

const navigator = useNavigate();
function handleClick()
{
    navigator(`/movie/${ imdbID  }`)
}


    return(
        <div   onClick ={ handleClick}className="movie-wrapper">

       
        <div className="movie-image">
            <img  src={Poster}/>   
        </div>
        <div className="movie-title">
            {Title}
        </div>
        <div className="movie-year">
          Released in : {Year}
        </div>
        <div className="movie-type">
             { Type }
        </div>
    </div>
    )

}

export default MovieCard; 