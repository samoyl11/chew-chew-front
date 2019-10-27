import React, { Component, Button, Div} from "react";
import { Container} from 'reactstrap';
import{ Navbar, Nav, NavDropdown, FormControl, Form } from 'react-bootstrap';
import axios from "axios";

import Modal from "./components/Modal";
import NavbarCustom from "./components/NavbarCustom";
import Chart from "./components/Chart";
import MyForm from "./components/Form";

import Vitya from "./vitya.jpg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          viewCompleted: false,
          activeItem: {
            title: "",
            description: "",
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
          .get("https://chew-chew.herokuapp.com/api/forms/")
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
              title={item.description}
            >
              {item.title}
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
          axios
            .put(`https://chew-chew.herokuapp.com/api/forms/${item.id}/`, item)
            .then(res => this.refreshList());
          return;
        }
        axios
          .post("https://chew-chew.herokuapp.com/api/forms/", item)
          .then(res => this.refreshList());
      };
      handleDelete = item => {
        axios
          .delete(`https://chew-chew.herokuapp.com/api/forms/${item.id}`)
          .then(res => this.refreshList());
      };
      createItem = () => {
        const item = { title: "", description: "", completed: false };
        this.setState({ activeItem: item, modal: !this.state.modal });
      };
      editItem = item => {
        this.setState({ activeItem: item, modal: !this.state.modal });
      };
      render() {
        return (
          <Router>
              <div>
                <NavbarCustom/>
              </div>

              <Switch>
              <Route path='/form'>
                <MyForm/>
              </Route>
              <Route path="/apply">
              <h1 className="text-white text-uppercase text-center my-4">Заявка
              </h1>
              <div className="row">
                <div className="col-md-6 col-sm-10 mx-auto p-0 ">
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
              <Route path="/">
                <h1 style={{ color: 'white' }}>
                  О нас
                </h1>
                <div>
                <img style={{'width':'20vw'}}src={Vitya} class='center'/>
                </div>
                </Route>
              </Switch>

          </Router>
        );
      }
    }
    export default App;
