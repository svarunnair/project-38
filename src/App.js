import logo from './logo.svg';
import './App.css';
import { Home } from '@mui/icons-material';
import PublicRoutes from './Routes/PublicRoutes';
import NavBar from './Components/NavBar';
import Signin from './Pages/authPage/Signin';

function App() {
  return (
    <div className="App">
      <NavBar/>
    <Signin/>
    </div>
  );
}

export default App;
