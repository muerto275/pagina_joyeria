import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Nabvar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './componentes/Footer'
import routes from './config/routes'

function App() {
  return (

    <Router>
      <Navbar></Navbar>
     
      <Switch>

        {routes.map((route)=>{
          return(
          <Route
            path={route.path}
            component={route.component}
            key={route.path}
          />
          );
        })}
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
