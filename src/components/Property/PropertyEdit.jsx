import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const PropertyEdit = (props) => {
  const [editCat, setEditCat] = useState(props.propertyToUpdate.category);
  const [editName, setEditName] = useState(props.propertyToUpdate.name);
  const [editYear, setEditYear] = useState(props.propertyToUpdate.year);
  const [editModel, setEditModel] = useState(props.propertyToUpdate.model);
  const [editSerial, setEditSerial] = useState(props.propertyToUpdate.serial);
  const [editImgURL, setEditImgURL] = useState(props.propertyToUpdate.imgURL);
  const [editValue, setEditValue] = useState(props.propertyToUpdate.value);
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => {
//     let newIsOpen = !isOpen;
//     setIsOpen(newIsOpen);
//   };
  const propertyUpdate = (event, property) => {
    event.preventDefault();
    fetch(`http://localhost:4000/property/${props.propertyToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        category: editCat,
        name: editName,
        year: editYear,
        model: editModel,
        serial: editSerial,
        imgURL: editImgURL,
        value: editValue,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then((res) => {
      props.fetchProperty();
      props.updateOff();
    });
  };

  return (
    <Modal isOpen={true}>
      <ModalHeader toggle={propertyUpdate}>Log a Property</ModalHeader>
      <ModalBody>
        <Form onSubmit={propertyUpdate}>
          <FormGroup>
            <Label htmlFor="category">Edit Category:</Label>
            <Input
              type="select"
              name="category"
              value={editCat}
              onChange={(e) => setEditCat(e.target.value)}
            >
              <option value="Electronics">Electronics</option>
              <option value="Jewelry">Jewelry</option>
              <option value="Furs">Furs</option>
              <option value="Art">Art</option>
              <option value="Antiques">Antiques</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Edit Name:</Label>
            <Input
              type="text"
              name="name"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="year">Edit Year:</Label>
            <Input
              type="text"
              name="year"
              value={editYear}
              onChange={(e) => setEditYear(e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="model">Edit Model:</Label>
            <Input
              type="text"
              name="model"
              value={editModel}
              onChange={(e) => setEditModel(e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="serial">Edit Serial:</Label>
            <Input
              type="text"
              name="serial"
              value={editSerial}
              onChange={(e) => setEditSerial(e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="imgURL">Edit Image:</Label>
            <Input
              type="text"
              name="imgURL"
              value={editImgURL}
              onChange={(e) => setEditImgURL(e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="value">Edit Value:</Label>
            <Input
              type="text"
              name="value"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            ></Input>
          </FormGroup>
          <Button className='update' type="submit">Update</Button>
          <Button className='close' type='reset' onClick={propertyUpdate}>Close</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default PropertyEdit;
