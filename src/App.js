import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Nabvar'
import { BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    
  <BrowserRouter>
    <Navbar></Navbar>
    <h1> Joyeria </h1>
  </BrowserRouter>
  );
}

export default App;
