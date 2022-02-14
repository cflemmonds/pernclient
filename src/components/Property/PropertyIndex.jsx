import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap';
import PropertyCreate from './PropertyCreate';
import PropertyTable from './PropertyTable';
import PropertyEdit from './PropertyEdit';

const PropertyIndex = (props) => {
    const [property, setProperty] = useState([]);
    const [updateActive, setUpdateActive] =useState(false);
    const [propertyToUpdate, setPropertyToUpdate] = useState({});
    const fetchProperty = () => {
        fetch('http://localhost:4000/property/get', {        
        method: 'GET',
        headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }) .then( (res) => res.json())
    .then((propertyData) => {
        
        setProperty(propertyData)
    })
    }

const editUpdateProperty = (property) => {
    setPropertyToUpdate(property);
}

const updateOn = () => {
    setUpdateActive(true);
}

const updateOff = () => {
    setUpdateActive(false);
}

    useEffect(() => {
        fetchProperty();
    }, [])
    return(
        
        <Container>
            <Row>
                <Col md="3">
                    <PropertyCreate fetchProperty={fetchProperty} token={props.token}/>
                </Col>
                <Col md="9">
                    <PropertyTable property={property} editUpdateProperty={editUpdateProperty}
                    updateOn={updateOn} fetchProperty={fetchProperty} token={props.token}/>
                </Col>
                {updateActive ? <PropertyEdit propertyToUpdate={propertyToUpdate}
                updateOff={updateOff} token={props.token} fetchProperty={fetchProperty}/> : <></>}
            </Row>
        </Container>
    )
}

export default PropertyIndex;