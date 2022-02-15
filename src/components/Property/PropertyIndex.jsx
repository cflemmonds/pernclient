import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import PropertyCreate from "./PropertyCreate";
import PropertyTable from "./PropertyTable";
import PropertyEdit from "./PropertyEdit";
import Sitebar from "../../site/navbar/Navbar";

const PropertyIndex = (props) => {
  const [property, setProperty] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [propertyToUpdate, setPropertyToUpdate] = useState({});
  const [createActive, setCreateActive] = useState(false);
  const fetchProperty = () => {
    fetch("http://localhost:4000/property/get", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((propertyData) => {
        setProperty(propertyData);
      });
  };

  const editUpdateProperty = (property) => {
    setPropertyToUpdate(property);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  const createOn = () => {
    setCreateActive(true);
  };

  const createOff = () => {
    setCreateActive(false);
  };

  useEffect(() => {
    fetchProperty();
  }, []);
  return (
    <div>
      {createActive ? (
        <PropertyCreate
          createOff={createOff}
          token={props.token}
          fetchProperty={fetchProperty}
        />
      ) : (
        <>
        <Sitebar clickLogout={props.clickLogout} createOn={createOn}/>
        </>
      )}
      <Container>
        <Row>
          <Col md="9">
            <PropertyTable
              property={property}
              editUpdateProperty={editUpdateProperty}
              updateOn={updateOn}
              createOn={createOn}
              fetchProperty={fetchProperty}
              token={props.token}
            />
          </Col>

          {updateActive ? (
            <PropertyEdit
              propertyToUpdate={propertyToUpdate}
              updateOff={updateOff}
              token={props.token}
              fetchProperty={fetchProperty}
            />
          ) : (
            <></>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default PropertyIndex;
