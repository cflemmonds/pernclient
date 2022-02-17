import React, { useState } from 'react';
import { Container, FormGroup, Input } from 'reactstrap';

const Uploading = (props) => {
const {image, setImage} = props
const [loading, setLoading] = useState(false);

const UploadImage = async(e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Firelogger");
    setLoading(true);
    const res = await fetch (
        "https://api.cloudinary.com/v1_1/dzo98r8e7/image/upload", {
            method: "POST",
            body: data,
        }
    )
    const File = await res.json();
    console.log(File.secure_url)
    setImage(File.secure_url)
    setLoading(false)
}

    return ( 
    <div>
        <Container>
            <h1>Upload your file</h1>
            <FormGroup>
                <Input type="file" name="image" placeholder="Upload image here" onChange={UploadImage}/>
                <br />
                {loading ? (<h3>Loading...</h3>): <img src={image} className='upimage'alt='property'/>}
            </FormGroup>
        </Container>
        
    </div> );
}
 
export default Uploading;