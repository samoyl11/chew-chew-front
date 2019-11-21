import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Spring} from 'react-spring/renderprops';
import PaymentIcon from '@material-ui/icons/Payment';

class Payments extends React.Component {
  constructor(props) {
    super(props)
    this.payment = this.payment.bind(this);
  }

  payment(r) {
    return (
      <Container className='my-4 px-2' style={{background: '#FEFE25', 'border-radius': '2em'}}>
        <Row>
          <Col xs={0.5}><PaymentIcon className="my-3 ml-4" style={{'font-size': '70px'}}/></Col>
          <Col className='mx-1 my-auto font-question' style={{color:'black'}}>{r}</Col>
        </Row>
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
              <h1 className="text-white text-center mx-auto font-header">Выплаты</h1>
                      </div>}
          </Spring>
        </div>
        {this.payment("Точные и быстрые выплаты")}
        {this.payment("Выплаты наличными")}
        {this.payment("Выплаты на банковскую карту")}
      </div>
    )
  }
}

export default Payments;
