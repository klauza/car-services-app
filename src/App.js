import React from 'react';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';

import history from './history';

// route pages
import Home from './components/Home/Home';
import CarbonCleaning from './components/Services/CarbonCleaning/CarbonCleaning';
import Tinting from './components/Services/Tinting/Tinting';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';

// other
import Navigation from './components/Navigation/Navbar';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <Router history={history}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/services/carbon-cleaning" component={CarbonCleaning} />
        <Route exact path="/services/tinting" component={Tinting} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/frequently-asked-questions" component={FAQ} />
        <Route exact path="/about-website" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
