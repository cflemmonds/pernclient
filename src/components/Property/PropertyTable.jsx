import React from 'react';
import {Table, Button} from 'reactstrap';

const PropertyTable = (props) => {
    const deleteProperty = (property) => {
        fetch(`http://localhost:4000/property/${property.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchProperty())
    }
    const propertyMapper = () => {
        return props.property.map((property, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{property.id}</th>
                    <td>{property.category}</td>
                    <td>{property.name}</td>
                    <td>{property.year}</td>
                    <td>{property.model}</td>
                    <td>{property.serial}</td>
                    <td><img src={property.imgURL} /></td>
                    <td>{property.value}</td>
                    <td>
                        <Button color='warning' onClick={() => {props.editUpdateProperty(property); props.updateOn()}}>Update</Button>
                        <Button color='danger' onClick={() => {deleteProperty(property)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return(
        <>
        <h3>Property History</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Serial</th>
                    <th>Image</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {propertyMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default PropertyTable;