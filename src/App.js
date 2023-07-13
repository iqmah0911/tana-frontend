import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Overview from './pages/overview';
import Meter from './pages/myMeter';
import Transaction from './pages/myTransaction';
import Settings from './pages/settings';
import Landing from './pages/landingPage';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/overview" component={Overview} />
          <Route exact path="/meter" component={Meter} />
          <Route exact path="/transaction" component={Transaction} />
          <Route exact path="/settings" component={Settings} />
      </Switch>

    </Router>
  );
}

export default App;
