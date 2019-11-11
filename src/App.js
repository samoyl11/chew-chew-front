import React, { Component, Button, Div} from "react";
import { Container} from 'reactstrap';
import{ Navbar, Nav, NavDropdown, FormControl, Form } from 'react-bootstrap';
import axios from "axios";
import {Spring} from 'react-spring/renderprops';

import Modal from "./components/Modal";
import NavbarCustom from "./components/NavbarCustom";
import MyForm from "./components/Form";
import SignUp from './components/SignUp';
import StickyFooter from './components/StickyFooter';
import Apply from './components/Apply';
import Countdown from './components/Countdown';
import PostApply from './components/PostApply';
import Vitya from "./vitya.jpg";
import City from "./city.png";
import Yandex from "./yandex.png";
import Uber from "./uber.png";
import Gett from "./gett.jpg";
import { ReactComponent as ConnectButton } from './connect.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        firstName: "",
        lastName: "",
        telephone: "",
        completed: false
      },
      formList: []
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/forms/")
      .then(res => this.setState({ formList: res.data }))
      .catch(err => console.log(err));
  };
  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };
  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          complete
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
        >
          Incomplete
        </span>
      </div>
    );
  };
  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.formList.filter(
      item => item.completed === viewCompleted
    );
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`form-title mr-2 ${
            this.state.viewCompleted ? "completed-form" : ""
          }`}
          title={item.lastName}
        >
          {item.telephone}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            {" "}
            Edit{" "}
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete{" "}
          </button>
        </span>
      </li>
    ));
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      console.log('alskdklq' + item.id)
      axios
        .put(`http://localhost:8000/api/forms/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    }
    console.log('alskdklq1111')
    axios
      .post("http://localhost:8000/api/forms/", item)
      .then(res => this.refreshList());
  };
  handleDelete = item => {
    axios
      .delete(`http://localhost:8000/api/forms/${item.id}`)
      .then(res => this.refreshList());
  };
  createItem = () => {
    const item = { firstName: "", lastName: "", telephone: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };


  //METHODS FOR forms




  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <Router>
          <div>
            <NavbarCustom/>
          </div>

          <Switch>
          <Route path='/form'>
            <MyForm/>
          </Route>
          <Route path="/apply_custom">
          <h1 className="text-white text-uppercase text-center my-4">Заявка1
          </h1>
          <div className="row">
            <div className="col-md-6 col-sm-10 mx-auto p-0">
              <div className="card p-3 custom1">
                <div className="">
                  <button onClick={this.createItem} className="btn btn-primary">
                    Add task
                  </button>
                </div>
                {this.renderTabList()}
                <ul className="list-group list-group-flush">
                  {this.renderItems()}
                </ul>
              </div>
            </div>
          </div>
          {this.state.modal ? (
            <Modal
              activeItem={this.state.activeItem}
              toggle={this.toggle}
              onSave={this.handleSubmit}
            />
          ) : null}
          </Route>



          <Route path="/apply" component={Apply}/>
          <Route path='/welcome' component={PostApply}/>



          <Route path="/">
          <div>
          <Link to='/apply' style={{ textDecoration: 'none' }}>
          <div className='my-4'>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
            {props => <div style={props}>
            <h1 className="text-white text-center" style={{'font-size': '24pt', 'border': '3pt ridge white', 'display': 'inline', marginLeft:'13vw', marginRight:'10vw'}}>Подключиться к Яндекс.Такси, Ситимобил, Gett, Uber</h1>
            </div>}
          </Spring>
          </div>
          <div style={{'position': 'absolute', 'left': '5%', 'top': '30%'}}>
            <img src={Yandex} style={{
                width: '14vw',
                height: '14vw',
                borderRadius: '7vw',
                overflow: "hidden",
                borderWidth: 3,
                borderColor: "red"
              }}/>
          </div>
          <div style={{'position': 'absolute', 'left': '80%', 'top': '30%'}}>
            <img src={Uber} style={{
                width: '14vw',
                height: '14vw',
                borderRadius: '7vw',
                overflow: "hidden",
                borderWidth: 3,
                borderColor: "red"
              }}/>
          </div>
          <div style={{'position': 'absolute', 'left': '5%', 'top': '65%'}}>
            <img src={Gett} style={{
                width: '14vw',
                height: '14vw',
                borderRadius: '7vw',
                overflow: "hidden",
                borderWidth: 3,
                borderColor: "red"
              }}/>
          </div>
          <div style={{'position': 'absolute', 'left': '80%', 'top': '65%'}}>
            <img src={City} style={{
                width: '14vw',
                height: '14vw',
                borderRadius: '7vw',
                overflow: "hidden",
                borderWidth: 3,
                borderColor: "red"
              }}/>
          </div>
          </Link>
          </div>
          <div style={{'position': 'absolute', 'left': '20%', 'top': '35%'}}>
            <Link to='/apply' style={{ textDecoration: 'none' }}>
            <ConnectButton width='60vw' space='preserve'/>
            </Link>
          </div>
            </Route>
          </Switch>
          <StickyFooter/>
      </Router>
    );
  }
}
export default App;
