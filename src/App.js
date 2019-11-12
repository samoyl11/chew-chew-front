import React, { Component} from "react";

import NavbarCustom from "./components/NavbarCustom";
import StickyFooter from './components/StickyFooter';
import Apply from './components/Apply';
import PostApply from './components/PostApply';
import ShowAll from './components/ShowAll';
import Home from './components/Home';

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
          <Route path="/showall" component={ShowAll}/>
          <Route path="/apply" component={Apply}/>
          <Route path='/welcome' component={PostApply}/>
          <Route path="/" component={Home}/>
        </Switch>
        <StickyFooter/>
      </Router>
    );
  }
}
export default App;
