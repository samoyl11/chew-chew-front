import React from 'react';
import City from "./img/city.png";
import Yandex from "./img/yandex.png";
import Uber from "./img/uber.png";
import Gett from "./img/gett1.png";
import { ReactComponent as ConnectButton } from './svg/connect.svg';
import {Spring} from 'react-spring/renderprops';
import { Link } from "react-router-dom";

import {Container, Row, Col, Figure} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenYandex: false,
      hiddenCity: false,
      hiddenGett: false,
      hiddenUber: false,
      hiddenConnect: false
    }
  }

  notify = () => toast("Выберите предпочитаемую компанию и нажмите на нее!",
    {
      progressClassName: css({ background: "white"}),
      className: css({background: 'yellow'}),
      bodyClassName: css({color: 'black'}),
      autoClose:5000
    });
  notifyApply = () => toast("Нажмите сюда, чтобы подключиться прямо сейчас",
    {
      progressClassName: css({ background: "white"}),
      className: css({background: 'yellow'}),
      bodyClassName: css({color: 'black'}),
      autoClose:15000
    });

  componentDidMount() {
    setTimeout(() => this.showYandex(), 600);
    setTimeout(() => this.showCity(), 1200);
    setTimeout(() => this.showGett(), 1800);
    setTimeout(() => this.showUber(), 2400);
    setTimeout(() => this.showConnect(), 3000);
    setTimeout(() => this.notify(), 3000);
    setTimeout(() => this.notifyApply(), 9000);

  }

  showYandex() {
    this.setState({hiddenYandex: true});
  }
  showCity() {
    this.setState({hiddenCity: true});
  }
  showGett() {
    this.setState({hiddenGett: true});
  }
  showUber() {
    this.setState({hiddenUber: true});
  }
  showConnect() {
    this.setState({hiddenConnect: true});
  }

  render() {
    return (
      <div>
        <Link to='/apply' style={{ textDecoration: 'none' }}>
        <ToastContainer  position={toast.POSITION.BOTTOM_RIGHT}/>
        </Link>
        <div className='my-4'>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
            {props => <div style={props}>
              <h1 className="text-white text-center mx-auto font-header">Подключиться к такси</h1>
                      </div>}
          </Spring>
        </div>
        <div className="text-center my-4">
          <Container className='my-4'>
            <Row className='my-4'>
              <Col>
                {this.state.hiddenYandex &&
                  <div>
                  <h1 className="text-white mx-auto"   style={{'font-size': '3vw'}}>Yandex</h1>
                  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                    {props => <div style={props}>
                      <div>
                        <Link to='/apply' style={{ textDecoration: 'none' }}>
                          <img src={Yandex} alt="Yandex" style={{
                            width: '25vw',
                            height: '25vw',
                            borderRadius: '7vw',
                            overflow: "hidden",
                            borderWidth: 3,
                            borderColor: "red"
                          }}/>
                        </Link>
                      </div>
                    </div>}
                  </Spring>
                </div>
                }
              </Col>
              <Col>
                {this.state.hiddenCity &&
                  <div>
                    <h1 className="text-white mx-auto" style={{'font-size': '3vw'}}>Ситимобил</h1>
                    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                      {props => <div style={props}>
                        <div>
                          <Link to='/apply' style={{ textDecoration: 'none' }}>
                            <img src={City} alt="City" style={{
                              width: '25vw',
                              height: '25vw',
                              borderRadius: '7vw',
                              overflow: "hidden",
                              borderWidth: 3,
                              borderColor: "red"
                            }}/>
                          </Link>
                        </div>
                      </div>}
                    </Spring>
                  </div>
                }
              </Col>
            </Row>

            <Row className='my-4'>
              <Col>
                {this.state.hiddenGett &&
                  <div>
                    <h1 className="text-white mx-auto" style={{'font-size': '3vw'}}>Gett</h1>
                    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                      {props => <div style={props}>
                        <div>
                          <Link to='/apply' style={{ textDecoration: 'none' }}>
                            <img src={Gett} alt="Gett" style={{
                              width: '25vw',
                              height: '25vw',
                              borderRadius: '7vw',
                              overflow: "hidden",
                              borderWidth: 3,
                              borderColor: "red"
                            }}/>
                          </Link>
                        </div>
                      </div>}
                    </Spring>
                  </div>
                }
              </Col>

              <Col>
                {this.state.hiddenUber &&
                  <div>
                    <h1 className="text-white mx-auto" style={{'font-size': '3vw'}}>Uber</h1>
                    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                      {props => <div style={props}>
                        <div>
                          <Link to='/apply' style={{ textDecoration: 'none' }}>
                            <img src={Uber} alt="Uber" style={{
                                width: '25vw',
                                height: '25vw',
                                borderRadius: '7vw',
                                overflow: "hidden",
                                borderWidth: 3,
                                borderColor: "red"
                            }}/>
                          </Link>
                        </div>
                      </div>}
                    </Spring>
                </div>
              }
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Home;
