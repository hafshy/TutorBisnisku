import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import FAQPage from './pages/faq';
import Partners from './pages/partners';
import Events from './pages/events';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/faq" component={FAQPage} exact />
          <Route path="/partners" component={Partners} exact />
          <Route path="/events" component={Events} exact />
        </Switch>
      </AnimatePresence>
    </Router>

  );
}

export default App;
