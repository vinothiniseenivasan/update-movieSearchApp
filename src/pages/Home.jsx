
import MovieCard from "../components/MovieCard/MovieCard";
import './Home.css'; 
import useMovieList from "../hooks/useMovieList";
import { useState } from "react";

function Home()
{
     
     
  const {movieList} = useMovieList('harry' ,'avengers' ,'batman');
  

  // console.log("movieList" ,movieList)
    return(
        <>
     
        <div className="moviecard-wrapper">

           { 
             movieList.length > 0 &&   movieList.map(   (movie) =>
               
            (
                <MovieCard
                key ={movie.imdbID}   
               Title={movie.Title}  
                Year={movie.Year} 
               Type={movie.Type} 
               imdbID = {movie.imdbID}
               Poster={movie.Poster}
              />
              
            ))

           } 


        </div>
        
        </>
    )

}

export default Home;
 