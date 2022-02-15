import React, { useState } from 'react';
import { Button, Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem } from 'reactstrap'
import fireLogger from "../Assets/fireLogger.png"


const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    return (    
        <Navbar light>
            <img src={fireLogger} alt="Firelogger Logo" className='logo'/>
            <NavbarBrand className="title">FireLogger</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className='nav' navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    

                    <Button color='warning' onClick={props.createOn}>Create a New Property</Button>
                    
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

     );
}
 
export default Sitebar;