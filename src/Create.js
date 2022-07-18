// import React, { useState } from 'react'
// import axios from 'axios'
// import Home from './Home'
// import {useNavigate} from 'react-router-dom'
// function Create() {
//     const navigate = useNavigate()
//     const [firstName,setFirstName] = useState ("");
//     const [lastName,setLastName] = useState("")
// const postData=()=>{
//     //
//     axios.post(`https://62d3e352cd960e45d44f7d6d.mockapi.io/fakeAPI`,{firstName,lastName})// when you used back-end project u should write like this first: 'firstName'
//     .then((res)=>{console.log(res);
//     navigate("/data");
// })
//     .catch(error=>{console.log(error)})
// };
//   return (
//     <div>
//         <hr/>
//         <input placeholder='firstName' onChange={(e)=>{setFirstName(e.target.value)}}></input>
//         <input placeholder='secondName' onChange={(e)=>{setLastName(e.target.value)}}></input>
//         <button onClick={postData}>login</button>
//     </div>
//   )
// }

// export default Create

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Create() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const postData = () => {
    axios
      .post(`https://62d3e352cd960e45d44f7d6d.mockapi.io/fakeAPI`, {
        firstName,
        lastName,
      })
      .then((res) => {
        console.log(res);
        navigate("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // <div>
    //   <input
    //     placeholder="firstName"
    //     onChange={(e) => {
    //       setFirstName(e.target.value);
    //     }}
    //   ></input>
    //   <input
    //     placeholder="lastName"
    //     onChange={(e) => {
    //       setLastName(e.target.value);
    //     }}
    //   ></input>
    //   <button onClick={postData}>LogIn</button>
    // </div>

    <>
   
      <Form className="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email" placeholder="Enter First Name " onChange={(e) => {
          setFirstName(e.target.value);
        }} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="password" placeholder="Enter Last Name"  onChange={(e) => {
          setLastName(e.target.value);
        }} />
      </Form.Group>
   
      <Button variant="primary" type="submit" onClick={postData}>
        Login
      </Button>
    </Form>
    
    </>

  );
}

export default Create;