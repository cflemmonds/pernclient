import React from "react";
import { Table, Button } from "reactstrap";

const PropertyTable = (props) => {
  const deleteProperty = (property) => {
    fetch(`http://localhost:4000/property/${property.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchProperty());
  };
  const propertyMapper = () => {
    return props.property.map((property, index) => {
      return (
        <tr key={index}>
          <td scope="row">{property.id}</td>
          <td>{property.category}</td>
          <td>{property.name}</td>
          <td>{property.year}</td>
          <td>{property.model}</td>
          <td>{property.serial}</td>
          <td>{property.imageURL}</td>
          <td>{property.value}</td>
          <td className="btns">
            <button
              className="edit"
              size="sm"
              onClick={() => {
                props.editUpdateProperty(property);
                props.updateOn();
              }}
            >
              Edit
            </button>
            <button
              className="delete"
              size="sm"
              onClick={() => {
                deleteProperty(property);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h1 className='caption'>Property List</h1>
      <div className="tbl">
      <Table>
        <th>#</th>
        <th>Category</th>
        <th>Name</th>
        <th>Year</th>
        <th>Model</th>
        <th>Serial</th>
        <th>Image</th>
        <th>Value</th>
        <th></th>
        <tbody>{propertyMapper()}</tbody>
      </Table>
      </div>
    </div>
  );
};

export default PropertyTable;
