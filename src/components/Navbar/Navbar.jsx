// import { useRef, useState } from 'react';
// import './Navbar.css'
// import useMovieList from '../../hooks/useMovieList';
// import useDebounce from '../../hooks/useDebounce';
// import { Link, useNavigate } from 'react-router-dom';

// function Navbar()
// {
// //    resultListRef   ==> To focus dom elements
//    const resultListRef = useRef(null);
//    // in navbar wahtever we typing we have to search that terms in navbar]
     

//    const [searchTerm , setSearchTerm   ] = useState('');
 
//    const {movieList}  = useMovieList(searchTerm);
//    // const navigator = useNavigate();


//       const [navBar ,setNavBar ] = useState(false);
      
//       function handleClickEvent(e ,movieImDbID)
//       {
//          console.log("handleClickEvent" , movieImDbID);
//          // we want to particular movie what we are typing
//          // navigator(`/movie/${movieImDbID}`);
//       }
      
//     return(
//         <div  className="navbar-wrapper">
//              <div className="heading">
//                 Movie Base
//              </div>

//             <div className="search-bar">
//                 <input
//                   id="movie-search-input"
//                   type="text"
//                 onChange={
//                      useDebounce(    (e) => { setSearchTerm(e.target.value);}   )
//                   }
                 
//                   onFocus={() => {
//                      setNavBar(true);
//                   }}

//                   onBlur={() => {
//                      setNavBar(false)
//                   }}
//                   placeholder='what movie you are thinking about ?'
//                 />


//                 <div id='result-list'  style={{  display : navBar ? 'block' : 'none'}}>

//                        <div className='navbar-down'>Auto Completion Results.....</div>
//                        {     movieList.length > 0 && movieList.map(
//                            (movie) =>{
//                               <div 
//                               onMouseDown={(e) => handleClickEvent(e ,movie.imdbID)}
//                               className='navbar-down'
//                                key={movie.imdbID}
                          
//                            >
//                            {movie.Title}
//                         </div>

//                            }
                         
                         
//                      ) 
//                        }
//                 </div> 


               
//             </div>
 

             

//              <div>
//                 Theme
//              </div>

//         </div>
//     )

// }

// export default Navbar;




import { useRef, useState } from 'react';
import './Navbar.css';
import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
   const resultListRef = useRef(null);
   const navigate = useNavigate();
   const [searchTerm, setSearchTerm] = useState('');
   const { movieList } = useMovieList(searchTerm);
   console.log("navbar movieList" ,movieList)
   const [navBar, setNavBar] = useState(false);

   const handleInputChange = (e) => {
      const searchTerm = e.target.value;
      setSearchTerm(searchTerm);
   };

   const handleClickEvent = (e, movieImDbID) => {
      // console.log("handleClickEvent", movieImDbID);

      // navigate some page
      navigate(`/movie/${movieImDbID}`); 
   };

   return (
      <div className="navbar-wrapper">
         <div  className='movie-base-title heading'>
            <Link  to="/">   Movie Base </Link>
            
            </div>

         <div className="search-bar">
            <input
               id="movie-search-input"
               type="text"
               onChange={useDebounce(handleInputChange)}
               onFocus={() => setNavBar(true)}
               onBlur={() => setNavBar(false)}
               placeholder='What movie are you thinking about?'
            />

            <div id='result-list' style={{ display: navBar ? 'block' : 'none' }}>
               <div className='navbar-down'>Auto Completion Results.....</div>
               {movieList.length > 0 &&
                  movieList.map((movie) => (
                     <div
                        onMouseDown={(e) => handleClickEvent(e, movie.imdbID)}
                        className='navbar-down'
                        key={movie.imdbID}
                     >
                        {movie.Title}
                     </div>
                  ))
               }
            </div>
         </div>

         <div>Theme</div>
      </div>
   );
}

export default Navbar;
