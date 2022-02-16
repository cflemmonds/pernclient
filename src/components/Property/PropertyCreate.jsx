import React, { useState } from "react";
// import { APIURL, EndPoints } from "../../endpoints";
import { Input, Button, Form } from "reactstrap";
import Uploading from "../../Uploading";

const PropertyCreate = (props) => {
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [model, setModel] = useState("");
    const [serial, setSerial] = useState("");
    const [imgURL, setImgURL] = useState("");
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
        "Authorization": props.token
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setCategory('')
        setName('')
        setYear('')
        setModel('')
        setSerial('')
        setImage('')
        setValue('')
        props.fetchProperty()
      })
       .catch((err) => console.error(err));
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="select"
          placeholder="Category of Property"
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
                        <option>Category</option>
                        <option value='electronics'>Electronics</option>
                        <option value='jewelry'>Jewelry</option>
                        <option value='furs'>Furs</option>
                        <option value='art'>Art</option>
                        <option value='antiques'>Antiques</option>
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

        {/* <Input
          type="text"
          placeholder="Image"
          value={imgURL}
          onChange={(e) => setImgURL(e.target.value)}
        /> */}

        <Input
          type="text"
          placeholder="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {/* <Input
          type="text"
          placeholder="ownerID"
          value={ownerID}
          onChange={(e) => setOwnerID(e.target.value)}
        /> */}

        <br />
        <Uploading image={image} setImage={setImage}/>
        <Button type="submit">Click to Submit a Property</Button>
      </Form>
    </div>
  );
};

export default PropertyCreate;