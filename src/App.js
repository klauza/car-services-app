import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// route pages
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Map from './components/Map'; // temp

// other
import Navigation from './components/Navigation/Navbar';
import Footer from './components/Footer';
import About from './components/About';

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
        <Route exact path="/about-website" component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
