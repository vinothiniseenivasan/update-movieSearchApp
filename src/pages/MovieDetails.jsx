import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovieById } from "../apis/omdb";
import axios from "axios";
import MovieCard from "../components/MovieCard/MovieCard";
import './MovieDetails.css';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

function MovieDetails()
{

    const [movie , setMovie ]  = useState(null);

    const { id } = useParams();

   async function downLoadMovie(){
        const response = await axios.get(searchMovieById(id));
        console.log(response.data);
        setMovie(response.data);
 
    }

    useEffect ( () =>{   
        downLoadMovie();
    
    } , [id]);

    return(
        <div className="movie-details-wrapper">
          
                 {movie &&  <MovieCard
                  Title=  {movie.Title}
                  Year={movie.Year} 
                  Type={movie.Type}
                  Poster={movie.Poster}
                  imdbID={movie.imdbID }

                       />
                       } 
           
             {movie &&<div className="movie-details">
                <div>
                    Plot : {movie.Plot}
                </div>

                <div>
                    Actors : {movie.Actors}

                </div>
                <div>
                  Genre : {   movie.Genre.split(',').map((genre) => 
                  {
                    return <span className="genre" key= {genre}>{genre}</span>
                  })     }

                </div>

                <div>
                   <Rating items={10}  value = {Math.floor(movie.imdbRating)} initialRating={5}/>

                </div>




             </div> }
        </div>
    )

}

export default MovieDetails;