import logo from './logo.svg';
import './App.css';
import { Home } from '@mui/icons-material';
import PublicRoutes from './Routes/PublicRoutes';
import NavBar from './Components/NavBar';
import Signin from './Pages/authPage/Signin';
import Footer from './Components/Footer';
import { useLocation } from 'react-router-dom';

function App() {
  const path=useLocation()

  console.log("pathh",path.pathname)

  return (
    <div className="App">
      {path.pathname!=='/detail/:id'&&<NavBar/>}
    <PublicRoutes/>
    <Footer/>
    </div>
  );
}

export default App;
