import React, { useState } from "react";
import { Input, Form, Modal, ModalHeader, ModalBody } from "reactstrap";
import Uploading from "../../Uploading";

const PropertyCreate = (props) => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [serial, setSerial] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit =(event) => {
    event.preventDefault();
    fetch("http://localhost:4000/property/create", {
      method: "POST",
      body: JSON.stringify({
        category: category,
        name: name,
        year: year,
        model: model,
        serial: serial,
        imgURL: image,
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
        setValue("");
        props.createOff()
        props.fetchProperty()
      })
      .catch((err) => console.error(err));
  };
  return (
    <Modal isOpen={true}>
      <ModalHeader toggle={handleSubmit}>Create a New Property
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Input
            type="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled selected>Choose a Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Jewelry">Jewelry</option>
            <option value="Furs">Furs</option>
            <option value="Art">Art</option>
            <option value="Antiques">Antiques</option>
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
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        <Uploading image={image} setImage={setImage}/>
        <br />
          <button type="submit" className="create">Click to Submit</button>
          <button type='reset' className='close' onClick={handleSubmit}>Close</button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default PropertyCreate;
