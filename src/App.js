import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import FAQPage from './pages/faq';
import Partners from './pages/partners';
import Video from './pages/video';
import OnlineClass from './pages/onlineclass';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import AOS from "aos";
import 'aos/dist/aos.css';
import Consult from './pages/consult';

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
          <Route path="/online-class" component={OnlineClass} exact />
          <Route path="/consult" component={Consult} exact />
        </Switch>
      </AnimatePresence>
    </Router>

  );
}

export default App;
