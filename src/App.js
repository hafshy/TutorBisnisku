import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import FAQPage from './pages/faq';
import Partners from './pages/partners';
import Video from './pages/video';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import AOS from "aos";
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration : 1200,
      easing: "ease",
      delay: 200,
    });
  },[])

  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/faq" component={FAQPage} exact />
          <Route path="/partners" component={Partners} exact />
          <Route path="/video" component={Video} exact />
        </Switch>
      </AnimatePresence>
    </Router>

  );
}

export default App;
