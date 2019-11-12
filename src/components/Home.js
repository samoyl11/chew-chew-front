import React from 'react';
import City from "./img/city.png";
import Yandex from "./img/yandex.png";
import Uber from "./img/uber.png";
import Gett from "./img/gett.jpg";
import { ReactComponent as ConnectButton } from './svg/connect.svg';
import {Spring} from 'react-spring/renderprops';
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to='/apply' style={{ textDecoration: 'none' }}>
            <div className='my-4'>
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}>
                {props => <div style={props}>
                  <h1 className="text-white text-center h2-responsive mx-auto">Подключиться к Яндекс.Такси, Ситимобил, Gett, Uber</h1>
                          </div>}
              </Spring>
            </div>

            <div style={{'position': 'absolute', 'left': '5%', 'top': '30%'}}>
              <img src={Yandex} alt="Yandex" style={{
                  width: '14vw',
                  height: '14vw',
                  borderRadius: '7vw',
                  overflow: "hidden",
                  borderWidth: 3,
                  borderColor: "red"
                }}/>
            </div>

            <div style={{'position': 'absolute', 'left': '80%', 'top': '30%'}}>
              <img src={Uber} alt="Uber" style={{
                  width: '14vw',
                  height: '14vw',
                  borderRadius: '7vw',
                  overflow: "hidden",
                  borderWidth: 3,
                  borderColor: "red"
                }}/>
            </div>

            <div style={{'position': 'absolute', 'left': '5%', 'top': '65%'}}>
              <img src={Gett} alt="Gett" style={{
                  width: '14vw',
                  height: '14vw',
                  borderRadius: '7vw',
                  overflow: "hidden",
                  borderWidth: 3,
                  borderColor: "red"
                }}/>
            </div>

            <div style={{'position': 'absolute', 'left': '80%', 'top': '65%'}}>
              <img src={City} alt="City" style={{
                  width: '14vw',
                  height: '14vw',
                  borderRadius: '7vw',
                  overflow: "hidden",
                  borderWidth: 3,
                  borderColor: "red"
                }}/>
            </div>
          </Link>
        </div>

        <div style={{'position': 'absolute', 'left': '20%', 'top': '35%'}}>
          <Link to='/apply' style={{ textDecoration: 'none' }}>
            <ConnectButton width='60vw' space='preserve'/>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home;
