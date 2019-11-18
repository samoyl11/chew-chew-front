import React from 'react';
import {Container, Row, Col, Figure} from 'react-bootstrap';
import {Spring} from 'react-spring/renderprops';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

class About extends React.Component {
  constructor(props) {
    super(props)
    this.questionAnswer = this.questionAnswer.bind(this);
    this.questionAnswerBlack = this.questionAnswerBlack.bind(this);
  }

  questionAnswer(q, a) {
    return (
      <Container className='my-4' style={{background: '#F7FF01', 'border-radius': '2em'}}>
        <Row>
          <Col xs={0.5}><HelpOutlineIcon className="my-3 mx-4" style={{'font-size': '6vw'}}/></Col>
          <Col className='mx-2 my-auto' style={{color:'black', 'font-size': '3vw'}}>{q}</Col>
        </Row>
        <hr style={{"border-top": "dotted 2px"}} />
        <Row>
          <Col xs={0.5}><CheckCircleOutlineIcon className="my-3 mx-4" style={{'font-size': '6vw'}}/></Col>
          <hr width="1" size="500"/>
          <Col className='mx-2 my-auto' style={{color:'black', 'font-size': '2vw'}}>{a}</Col>
        </Row>
      </Container>
    )
  }

  questionAnswerBlack(q, a) {
    return (
      <Container className='my-4' style={{background: 'black', 'border-radius': '2em'}}>
        <Row>
          <Col xs={0.5}><HelpOutlineIcon className="my-3 mx-4" style={{'font-size': '6vw', color:'#F7FF01'}}/></Col>
          <Col className='mx-2 my-auto' style={{color:'white', 'font-size': '3vw'}}>{q}</Col>
        </Row>
        <hr style={{"border-top": "dotted 2px", color: '#F7FF01'}} />
        <Row>
          <Col xs={0.5}><CheckCircleOutlineIcon className="my-3 mx-4" style={{'font-size': '6vw', color:'#F7FF01'}}/></Col>
          <hr width="1" size="500"/>
          <Col className='mx-2 my-auto' style={{color:'white', 'font-size': '2vw'}}>{a}</Col>
        </Row>
      </Container>
    )
  }

  render() {
    return (
      <div>
        <h1 className="text-white text-uppercase text-center my-4">О нас  </h1>
        {this.questionAnswer("Кто мы?", "Алкилар Коче – ведущая компания, осуществляющая свою деятельность в различных сферах")}
        {this.questionAnswer("Что мы делаем?", "Мы подключаем водителей ко всем существующим агрегаторам")}




















        <div className='my-4'>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
            {props => <div style={props}>
              <h1 className="text-white text-center mx-auto" style={{'font-size': '5vw'}}>О нас</h1>
                      </div>}
          </Spring>
        </div>
        <Container className="my-2  mx-auto">
          <Row className="mx-auto">
                <div
                  style={{
                    backgroundColor: '#000000',
                    width: '20vw',
                    height: '20vw',
                    margin: '0',
                  }}>
                  <h1 className='text-center my-2' style={{color:'white', 'font-size': '1.5vw'}}>Кто мы?</h1>
                  <h1 className='text-center my-auto' style={{color:'white', 'font-size': '1vw'}}>Алкилар Коче – ведущая компания, осуществляющая свою деятельность в различных сферах</h1>
                </div>
                <div
                  style={{
                    backgroundColor: '#F7FF01',
                    width: '20vw',
                    height: '20vw',
                    margin: '0'
                  }}>
                </div>

                <div
                  style={{
                    backgroundColor: '#000000',
                    width: '20vw',
                    height: '20vw',
                    margin: '0'
                  }}>
                  <h1 className='text-center my-2' style={{color:'white', 'font-size': '1.5vw'}}>Какие автомобили мы подключаем? </h1>
                  <h1 className='text-center my-auto' style={{color:'white', 'font-size': '1vw'}}>Любые</h1>
                </div>
                <div
                  style={{
                    backgroundColor: '#F7FF01',
                    width: '20vw',
                    height: '20vw',
                    margin: '0'
                  }}>
                </div>
          </Row>
          <Row className="mx-auto">
              <div
                style={{
                  backgroundColor: '#F7FF01',
                  width: '20vw',
                  height: '20vw',
                  margin: '0'

                }}
              />
              <div
                style={{
                  backgroundColor: '#000000',
                  width: '20vw',
                  height: '20vw',
                  margin: '0'

                }}>
                <h1 className='text-center my-2' style={{color:'white', 'font-size': '1.5vw'}}>Что мы делаем?</h1>
                <h1 className='text-center my-auto' style={{color:'white', 'font-size': '1vw'}}>Мы подключаем водителей ко всем существующим агрегаторам</h1>
              </div>
              <div
                style={{
                  backgroundColor: '#F7FF01',
                  width: '20vw',
                  height: '20vw',
                  margin: '0'

                }}
              />
              <div
                style={{
                  backgroundColor: '#000000',
                  width: '20vw',
                  height: '20vw',
                  margin: '0'

                }}>
                <h1 className='text-center my-2' style={{color:'white', 'font-size': '1.5vw'}}>Подключаем ли мы граждан СНГ?</h1>
                <h1 className='text-center my-auto' style={{color:'white', 'font-size': '1vw'}}>Да, подключаем</h1>
              </div>
          </Row>
          <Row className="mx-auto">
                <div
                  style={{
                    backgroundColor: '#000000',
                    width: '20vw',
                    height: '20vw',
                    margin: '0',
                  }}>
                  <h1 className='text-center my-2' style={{color:'white', 'font-size': '1.5vw'}}>Какая комиссия?</h1>
                  <h1 className='text-center my-auto' style={{color:'white', 'font-size': '1vw'}}>Наша комиссия 2%</h1>
                </div>
                <div
                  style={{
                    backgroundColor: '#F7FF01',
                    width: '20vw',
                    height: '20vw',
                    margin: '0'
                  }}>
                </div>

                <div
                  style={{
                    backgroundColor: '#000000',
                    width: '20vw',
                    height: '20vw',
                    margin: '0'
                  }}>
                  <h1 className='text-center my-2' style={{color:'white', 'font-size': '3vw'}}>Чем еще мы занимаемся? </h1>
                  <h1 className='text-center my-auto' style={{color:'white', 'font-size': '2vw'}}>Мы сдаем машины в аренду</h1>
                </div>
                <div
                  style={{
                    backgroundColor: '#F7FF01',
                    width: '20vw',
                    height: '20vw',
                    margin: '0'
                  }}>
                </div>
          </Row>
        </Container>
      </div>
    )
  }
}

export default About;
