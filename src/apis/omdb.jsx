export function searchMovie(term)
{
// VITE_API_KEY = '3f9e96db'
return `https://www.omdbapi.com/?apikey=3f9e96db&s=${term}`;

}

export function searchMovieById(imdbId)
{
// VITE_API_KEY = '3f9e96db'
return `https://www.omdbapi.com/?apikey=3f9e96db&i=${imdbId}`;

}

