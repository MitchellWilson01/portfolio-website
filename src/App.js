import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Footer from './components/Footer/Footer';

const App = (props) => {
  return (
    <Router>
      <Header />
      <div className="wrapper">
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
