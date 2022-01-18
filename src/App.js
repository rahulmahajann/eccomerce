import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout.js';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import {Switch} from 'react-router';

function App() {
  return (
    <BrowserRouter>
    
    <Header />
    <Switch>

      <Route path='/' exact>
        <Home />
      </Route>
      
      <Route path='/checkout'>
        <Checkout />
      </Route>

    </Switch>

    </BrowserRouter>  
  );
}

export default App;
