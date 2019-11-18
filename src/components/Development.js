import React from 'react';
import {Container, Row, Col, Figure} from 'react-bootstrap';
import {Spring} from 'react-spring/renderprops';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

class Development extends React.Component {
  constructor(props) {
    super(props)
    this.requirement = this.requirement.bind(this);
  }

  requirement(r) {
    return (
      <Container className='my-5 px-2' style={{background: '#FEFE25', 'border-radius': '2em'}}>
        <Row>
          <Col xs={0.5}><ErrorOutlineIcon className="my-3 ml-4" style={{'font-size': '70px'}}/></Col>
          <Col className='mx-1 my-auto font-question' style={{color:'black'}}>{r}</Col>
        </Row>
      </Container>
    )
  }

  render() {
    return (
      <div>

        {this.requirement("Скоро здесь что-то будет!")}

      </div>
    )
  }
}

export default Development;
