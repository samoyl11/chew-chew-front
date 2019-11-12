import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from './Utils.js';

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import {Button as ButtonStrap} from 'react-bootstrap';
import {

    Link as RouterLink,
    withRouter,
    Redirect
} from "react-router-dom";

import axios from "axios"; //pass data to django

class ApplyCpy extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          firstName: '',
          lastName: '',
          telephone: '',
          redirectWelcome: false
        };
      }

      componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isTelephone', (value) => {
            console.log('value: ', value)
            if ((value[0] === '+') && (value.length === 12) && (!isNaN(value.slice(1)))) {
              return true;
            }
            else if((value.length === 12) && (!isNaN(value))) {
              return true;
            }
            return false;
        });
    }
    componentWillUnmount() {
        // remove rule when it is not needed
        ValidatorForm.removeValidationRule('isTelephone');
    }

      handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      }

     handleClick = () => {
        this.setState({
          value:'',
        });
      };

    handleSubmit= (event) => {
      event.preventDefault();
      var item = {
        'firstName': this.state.firstName,
        'lastName': this.state.lastName,
        'telephone': this.state.telephone
      }
      if (event.id) {
        console.log('alskdklq' + event.id)
        axios
          .put(`http:/localhost:8000/api/forms/${this.state.telephone}/`, item);
        return;
      }
      console.log('alskdklq1111')
      axios
        .post("https://chew-chew-back.herokuapp.com/api/forms/", item)
      this.setState({
        firstName: '',
        lastName: '',
        telephone: '',
        redirectWelcome: true
      })
      return;
  }

      render() {
        if (this.state.redirectWelcome === true) {
            var date = new Date()
            console.log('creating date' + date);
            return <Redirect to={{
              pathname: "/welcome",
              state: date
            }} />
        }
        return (
            <div>
              <h1 className="text-white text-uppercase text-center my-4">Подключение к такси</h1>
              <div className="row">
                <div className="col-md-6 col-sm-10 mx-auto p-1">
                  <div className="card p-3 custom1">
                    <Avatar className='mx-auto'>
                      <AccountCircleIcon color="action" style={{'font-size': '200%'}}/>
                    </Avatar>
                    <ValidatorForm ref='form' onSubmit={this.handleSubmit} onError={errors => console.log(errors)} className='my-4'>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextValidator
                            name="firstName"
                            variant="outlined"
                            fullWidth
                            id="firstName"
                            validators={['required', 'matchRegexp:^[а-яА-Я]*$']}
                            errorMessages={['Поле должно быть заполнено', 'Имя должно содержать только буквы']}
                            label="Имя*"
                            autoFocus
                            onChange={this.handleInputChange}
                            value={this.state.firstName}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextValidator
                            variant="outlined"
                            fullWidth
                            validators={['required', 'matchRegexp:^[а-яА-Я]*$']}
                            errorMessages={['Поле должно быть заполнено', 'Фамилия должна содержать только буквы']}
                            label="Фамилия*"
                            name="lastName"
                            onChange={this.handleInputChange}
                            value={this.state.lastName}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextValidator
                            variant="outlined"
                            validators={['required', 'isTelephone']}
                            errorMessages={['Поле должно быть заполнено','Неправильный формат']}
                            fullWidth
                            name="telephone"
                            label="Номер телефона"
                            onChange={this.handleInputChange}
                            value={this.state.telephone}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="Я хочу получать новости об актуальных акциях и скидках."
                          />
                        </Grid>
                      </Grid>
                        <ButtonStrap type='submit' variant='warning' block>Warning</ButtonStrap>
                    </ValidatorForm>
                  </div>
                </div>
              </div>
            </div>
        );
      }
    }
export default withRouter(ApplyCpy);
