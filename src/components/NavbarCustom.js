import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button} from 'reactstrap';

import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';

import {
    Link
} from "react-router-dom";

const NavbarCustom = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{backgroundColor: '#F7FF01'}}  light expand="md">
        <Link to='/' style={{ textDecoration: 'none' }}>
        <NavbarBrand href="/">
          <LocalTaxiIcon style={{'font-size': '35pt'}}/>
        </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen}navbar>
          <Nav className="text-uppercase" style={{}} navbar>
            <NavItem style={{'width': '10vw', 'textAlign': 'center'}}>
              <Link to='/about/' style={{ textDecoration: 'none'}}>
                <NavLink>О нас</NavLink>
              </Link>
            </NavItem>
            <NavItem style={{'width': '10vw'}}>
              <Link to='/about/' style={{ textDecoration: 'none' }}>
                <NavLink>Выплаты</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/apply' style={{ textDecoration: 'none' }}>
                <Button class="w3-button w3-block" style={{'width': '50vw'}}  color="warning">ПОДКЛЮЧИТЬСЯ</Button>
              </Link>
            </NavItem>
            <NavItem style={{'width': '10vw', 'textAlign': 'center'}}>
              <Link to='/about/' style={{ textDecoration: 'none' }}>
                <NavLink>Сервисы</NavLink>
              </Link>
            </NavItem>
            <NavItem style={{'width': '10vw', 'textAlign': 'center'}}>
              <Link to='/about/' style={{ textDecoration: 'none' }}>
                <NavLink>Требования</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarCustom;
