import React, { useState } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'

const Sitebar = (props) => {
    return ( 
        <div>
            <h1></h1>
            <Button onClick={props.clickLogout}>Logout</Button>
        </div>
     );
}
 
export default Sitebar;