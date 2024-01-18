import logo from './logo.svg';
import './App.css';
import { Home } from '@mui/icons-material';
import PublicRoutes from './Routes/PublicRoutes';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <PublicRoutes/>
    </div>
  );
}

export default App;
