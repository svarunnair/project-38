import logo from './logo.svg';
import './App.css';
import { Home } from '@mui/icons-material';
import PublicRoutes from './Routes/PublicRoutes';
import NavBar from './Components/NavBar';
import Signin from './Pages/authPage/Signin';
import Footer from './Components/Footer';
import { useLocation } from 'react-router-dom';
import NavMenu from './Components/NavMenu';
import Sidebar from './Components/Sidebar';
import VideoSlider from './Components/VideoSlider';

function App() {
  const path=useLocation()


  return (
    <div className="App">
     
       {/* {path.pathname!=="/payment"&&<NavBar/>}      
       {path.pathname!=="/payment"&&<Footer/>}  */}

       <VideoSlider/>
   
    </div>
  );
}

export default App;
