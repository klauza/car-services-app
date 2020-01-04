import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// pages
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Map from './components/Contact/Map';
import Navigation from './components/Navigation/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/frequently-asked-questions" component={FAQ} />
        <Route exact path="/map" component={Map} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
