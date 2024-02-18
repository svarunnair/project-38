import logo from './logo.svg';
import './App.css';
import { Home } from '@mui/icons-material';
import PublicRoutes from './Routes/PublicRoutes';
import NavBar from './Components/NavBar';
import Signin from './Pages/authPage/Signin';
import Footer from './Components/Footer';
import { useLocation } from 'react-router-dom';
import NavMenu from './Components/NavMenu';

function App() {
  const path=useLocation()



  return (
    <div className="App">
       <NavBar/>
       <PublicRoutes/>
  
    <Footer/>
    </div>
  );
}

export default App;
