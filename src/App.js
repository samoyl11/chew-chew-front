import React, { Component} from "react";

// Components
import NavbarCustom from "./components/NavbarCustom";
import StickyFooter from './components/StickyFooter';
import Apply from './components/Apply';
import PostApply from './components/PostApply';
import ShowAll from './components/ShowAll';
import Home from './components/Home';
import About from './components/About';
import Requirements from './components/Requirements';
import Development from './components/Development';
import Services from './components/Services';
import Payments from './components/Payments';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavbarCustom/>
        </div>

        <Switch>

          <Route exact path="/showall" component={ShowAll}/>
          <Route exact path="/apply" component={Apply}/>
          <Route exact path='/welcome' component={PostApply}/>
          <Route exact path="/" component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/req' component={Requirements}/>
          <Route exact path='/dev' component={Development}/>
          <Route exact path='/services' component={Services}/>
          <Route exact path='/pay' component={Payments}/>

        </Switch>
        <StickyFooter/>
      </Router>
    );
  }
}
export default App;
