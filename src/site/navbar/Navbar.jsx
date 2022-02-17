import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import fireLogger from "../../Assets/fireLogger.png";

const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <Navbar dark>
      <img src={fireLogger} alt="Firelogger Logo" className="logo" />
      <h1 className="title">FireLogger</h1>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav>
          <NavItem className="navbtn">
            <button className='create' onClick={props.createOn}>Create Property</button>
            <button className='logout' onClick={props.clickLogout}>Logout</button>

          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Sitebar;
