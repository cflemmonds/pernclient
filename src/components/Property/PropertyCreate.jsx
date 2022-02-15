import React, { useState } from "react";
// import { APIURL, EndPoints } from "../../endpoints";
import { Input, Button, Form, Modal, ModalHeader, ModalBody } from "reactstrap";


const PropertyCreate = (props) => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [serial, setSerial] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [value, setValue] = useState("");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal)

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/property/create", {
      method: "POST",
      body: JSON.stringify({
        category: category,
        name: name,
        year: year,
        model: model,
        serial: serial,
        imgURL: imgURL,
        value: value,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCategory("");
        setName("");
        setYear("");
        setModel("");
        setSerial("");
        setImgURL("");
        setValue("");
        props.createOff()
        props.fetchProperty()
      })
      .catch((err) => console.error(err));
  };
  return (
    <Modal isOpen={true}>
      <ModalHeader toggle={toggle}>Create a New Property
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Input
            type="select"
            placeholder="Category of Property"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Category</option>
            <option value="electronics">Electronics</option>
            <option value="jewelry">Jewelry</option>
            <option value="furs">Furs</option>
            <option value="art">Art</option>
            <option value="antiques">Antiques</option>
          </Input>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Serial Number"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Image"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
          />

          <Input
            type="text"
            placeholder="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <br />
          <Button type="submit">Click to Submit</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default PropertyCreate;
