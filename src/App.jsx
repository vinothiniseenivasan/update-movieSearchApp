
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes/Mainroutes'
import Navbar from './components/Navbar/Navbar';

function App() {
  
  console.log(import.meta.env.VITE_API_KEY)
  return (

    <Router>
       <Navbar />
       <MainRoutes />
    </Router>
  )
}

export default App;