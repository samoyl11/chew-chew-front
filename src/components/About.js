import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Spring} from 'react-spring/renderprops';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

class About extends React.Component {
  constructor(props) {
    super(props)
    this.questionAnswer = this.questionAnswer.bind(this);
  }

  questionAnswer(q, a) {
    return (
      <Container className='my-4 px-0' style={{background: '#FEFE25', 'border-radius': '2em'}}>
        <Row>
          <Col xs={0.5}><HelpOutlineIcon className="my-3 ml-4" style={{'font-size': '70px'}}/></Col>
          <Col className='mx-1 my-auto font-question' style={{color:'black'}}>{q}</Col>
        </Row>
        <hr style={{"border-top": "dotted 2px"}} />
        <Row>
          <Col xs={0.5}><CheckCircleOutlineIcon className="my-3 ml-4" style={{'font-size': '70px'}}/></Col>
          <hr width="1" size="500"/>
          <Col className='mx-1 my-auto font-answer' style={{color:'black'}}>{a}</Col>
        </Row>
      </Container>
    )
  }

  render() {
    return (
      <div className='px-2'>
        <div className='my-4'>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
            {props => <div style={props}>
              <h1 className="text-white text-center mx-auto font-header">О нас</h1>
                      </div>}
          </Spring>
        </div>
        {this.questionAnswer("Кто мы?", "Алкилар Коче – ведущая компания, осуществляющая свою деятельность в различных сферах")}
        {this.questionAnswer("Что мы делаем?", "Мы подключаем водителей ко всем существующим агрегаторам")}
        {this.questionAnswer("Какие автомобили мы подключаем?", "Мы подключаем любые автомобили")}
        {this.questionAnswer("Какая комиссия?", "Наша комиссия 2%")}
        {this.questionAnswer("Подключаем ли мы граждан СНГ?", "Да, подключаем")}
        {this.questionAnswer("Чем еще мы занимаемся? ", "Мы сдаем автомобили в аренду")}
      </div>
    )
  }
}

export default About;
