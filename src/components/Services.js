import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Spring} from 'react-spring/renderprops';
// import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
// import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import {
    Link
} from "react-router-dom";

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.service = this.service.bind(this);
  }

  service(r) {
    return (
      <Container className='my-4 px-2' style={{background: '#FEFE25', 'border-radius': '2em'}}>
        <Link to='/apply' style={{ textDecoration: 'none'}}>
          <Row>
            <Col xs={0.5}><CheckCircleOutlineIcon className="my-3 ml-4" style={{'font-size': '70px', color:'black'}}/></Col>
            <Col className='mx-1 my-auto font-question' style={{color:'black'}}>{r}</Col>
          </Row>
        </Link>
      </Container>
    )
  }

  render() {
    return (
      <div>

        <div className='my-4'>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
            {props => <div style={props}>
              <h1 className="text-white text-center mx-auto font-header">Сервисы</h1>
                      </div>}
          </Spring>
        </div>
        {this.service("Яндекс.Такси")}
        {this.service("Ситимобил")}
        {this.service("Gett")}
        {this.service("Uber")}
        {this.service("Трезвый водитель")}
        {this.service("Доставка")}
        {this.service("Доставка грузов")}
        {this.service("Грузовое такси")}


      </div>
    )
  }
}

export default Services;
