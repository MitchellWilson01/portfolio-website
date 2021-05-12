import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
