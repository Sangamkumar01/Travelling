import React from 'react';
import './App.css'
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Adventure from './Pages/Adventure/Adventure';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AdventureDetails from './Pages/AdventureDetails/AdventureDetails';

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <div style={{minHeight :'84vh'}}>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/adventure/:city" exact component={Adventure}></Route>
          <Route path="/adventure/details/:id" exact component={AdventureDetails}></Route>

        </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
