import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button} from 'reactstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const NavbarCustom = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{backgroundColor: '#F7FF01'}}  light expand="md">
        <Link to='/' style={{ textDecoration: 'none' }}>
        <NavbarBrand href="/">Подключение к таксопарку</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <NavLink>О нас</NavLink>
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Дополнительно
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Link to='/apply' style={{ textDecoration: 'none' }}>
            <Button class="w3-button w3-block" style={{'width': '50vw'}}  color="warning">Оставить заявку</Button>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarCustom;
