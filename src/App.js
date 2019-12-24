import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from './components/Header';
import Navigation from './components/Navigation';
import Welcome from './pages/Welcome';
import Projects from './pages/Projects';
import CsgoSettings from './pages/CsgoSettings';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <div className="flex-container">
          <Navigation />
          <div className="container">
            <Switch>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/csgo-settings">
                <CsgoSettings />
              </Route>
              <Route path="/">
                <Welcome />
              </Route>
            </Switch>
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
