import React from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

import history from './history';

// route pages
import Home from './components/Home/Home';

import FullService from './components/Services/FullService/FullService';
import CarbonCleaning from './components/Services/CarbonCleaning/CarbonCleaning';
import Remapping from './components/Services/Remapping/Remapping';
import DPF from './components/Services/DPF/DPF';
import BodyWork from './components/Services/BodyWork/BodyWork';
import AirCon from './components/Services/AirCon/AirCon';
import Wheels from './components/Services/Wheels/Wheels';

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
        <Route exact path="/services/full-service" component={FullService} />
        <Route
          exact
          path="/services/carbon-cleaning"
          component={CarbonCleaning}
        />
        <Route exact path="/services/remapping" component={Remapping} />
        <Route exact path="/services/dpf" component={DPF} />
        <Route exact path="/services/wheels" component={Wheels} />

        <Route exact path="/services/body-work" component={BodyWork} />
        <Route exact path="/services/aircon-recharge" component={AirCon} />

        <Route exact path="/contact" component={Contact} />
        <Route exact path="/frequently-asked-questions" component={FAQ} />
        <Route exact path="/about-website" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
