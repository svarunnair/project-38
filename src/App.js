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

 console.log("Sessss",sessionStorage.getItem('show'))

const cart=sessionStorage.getItem('show')

console.log("carttsgvdhwvkd",cart)

  return (
    <div className="App">
     
       {path.pathname!=="/payment"&&<NavBar/>}
      {cart==="showCart"?<Sidebar/>:<></>}
      
       <PublicRoutes/>
       {path.pathname!=="/payment"&&<Footer/>}
    

    
   
    </div>
  );
}

export default App;
