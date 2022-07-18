// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Home from './Home'
// import {useNavigate} from 'react-router-dom'
// function Update() {
//     const navigate = useNavigate()
//     const [firstName,setFirstName] = useState ("");
//     const [lastName,setLastName] = useState("")
//     const [id,setId] = useState(null)
// const UpdateData=()=>{
//     useEffect(()=>{
//         setId()
//         setFirstName.localStorage.getItem("firstName");
//         setLastName(localStorage.getItem("lastName"));

       
//     })

//     axios.put(`https://62d3e352cd960e45d44f7d6d.mockapi.io/fakeAPI`,{firstName,lastName,id})// when you used back-end project u should write like this first: 'firstName'
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
//         <button onClick={UpdateData}>Update</button>
//     </div>
//   )
// }

// export default Update


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState(null);
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
  }, []);
  const updateData = () => {
    axios
      .update(`https://62d3e352cd960e45d44f7d6d.mockapi.io/fakeAPI/${id}`, {
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
    <div>
      <input
        placeholder="firstName"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      ></input>
      <input
        placeholder="lastName"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      ></input>
      <button onClick={updateData}>LogIn</button>
    </div>
  );
}

export default Update;