import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// pages
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Navigation from './components/Navigation/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
