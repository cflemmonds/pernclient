import React, { useState } from 'react';
import { Button, Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem } from 'reactstrap'
import PropertyCreate from '../../components/Property/PropertyCreate';


const Sitebar = (props) => {
    const [createActive, setCreateActive] =useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    const createOn = () => {
        setCreateActive(true);
    }
    
    const createOff = () => {
        setCreateActive(false);
    }

    return (    
        <Navbar color='faded' light expand='md'>
            <NavbarBrand href='/'>FireLogger</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
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