import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Spring} from 'react-spring/renderprops';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

class Requirements extends React.Component {
  constructor(props) {
    super(props)
    this.requirement = this.requirement.bind(this);
  }

  requirement(r) {
    return (
      <Container className='my-4 px-2' style={{background: '#FEFE25', 'border-radius': '2em'}}>
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

        <div className='my-4'>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
            {props => <div style={props}>
              <h1 className="text-white text-center mx-auto font-header">Требования</h1>
                      </div>}
          </Spring>
        </div>
        {this.requirement("Опыт вождения не требуется")}
        {this.requirement("Гражданство РФ или одной из стран СНГ")}
        {this.requirement("Подключаем любые автомобили")}

      </div>
    )
  }
}

export default Requirements;
