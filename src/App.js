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

function App() {
  const path=useLocation()



  // const showCart=sessionStorage.getItem("show")

 let showCart=localStorage.getItem("show")



  return (
    <div className="App">
     
       <NavBar/>
      {showCart&&<Sidebar/>}
      
       <PublicRoutes/>
    <Footer/>
    

    
   
    </div>
  );
}

export default App;
