
import { Routes , Route} from 'react-router-dom'
import MovieDetails from '../pages/MovieDetails';
import Home from '../pages/Home';
import Error from '../pages/Error';
function MainRoutes()
{
    return(
        <Routes>
             {/* routes contain mulitiple routes */}
            <Route    path='/'   element = { <Home /> } />

            <Route  path='/movie/:id'   element = { <MovieDetails />}   />
            <Route   path='*'   element={  <Error />}/>
        </Routes>


    )
   

}

export default MainRoutes;