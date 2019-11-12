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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Button as ButtonStrap} from 'react-bootstrap';
import {

    Link as RouterLink,
    withRouter,
    Redirect
} from "react-router-dom";

import { red, blue, purple, green } from '@material-ui/core/colors'

import axios from "axios"; //pass data to django

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    error: red,
  },
});

const useStyles = makeStyles(theme => ({
  '@global': {
  },
  paper: {
    marginTop: theme.spacing(8),
    marginLeft: '10%',
    marginRight: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    backgroundColor: '#ffffff'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class Apply extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          firstName: '',
          lastName: '',
          telephone: '',
          redirectWelcome: false
        };
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
        console.log('theme' + theme)
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
                <div className="col-md-6 col-sm-10 mx-auto p-0">
                  <div className="card p-3 custom1">
                    <Avatar >
                      <AccountCircleIcon color="action" style={{'font-size': '40pt'}}/>
                    </Avatar>
                    <form onSubmit={this.handleSubmit} className='my-4'>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="Имя"
                            autoFocus
                            onChange={this.handleInputChange}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            label="Фамилия"
                            name="lastName"
                            onChange={this.handleInputChange}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="telephone"
                            label="Номер телефона"
                            onChange={this.handleInputChange}
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
        );
      }
    }
export default withRouter(Apply);
