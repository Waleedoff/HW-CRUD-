// import React from 'react'
// import axios from 'axios'
// import {useEffect,useState} from 'react'
// //rules ==> first downolad the axios package , second 
// export default function FatchingData() {
//     const [data,setData] =useState([]) 

//     useEffect(()=>{ //run directly when the document reload.
//         // axios.get("http://127.0.0.1:8000/error/showcom")
//         axios.get("https://62d3e352cd960e45d44f7d6d.mockapi.io/fakeAPI")
//         // axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then(res=>{setData(res.data)})  // res.data ==>save  all the data inside the endpoints.
//         .catch(err=>{console.log(err)})
//     },[]) //use dependency array...(render page one the first time only )
//     // const dd = data.map((ele)=>(<li>{ele.title}</li>));
//     const setUpdate =(e)=>{
//       let {id, firstName,lastName} = e;
//       localStorage.setItem("id",id);
//       localStorage.setItem("firstName",firstName);
//       localStorage.setItem("lastName",lastName);
//     }

//     const getData = () =>{
//       axios.get(`https://62d3e352cd960e45d44f7d6d.mockapi.io/fakeAPI/${id}`)
//       .then(getData=>{
//         setData(res.data)
//       })
//     }


//     const onDelete = () =>{
//       axios.delete(`https://62d3e352cd960e45d44f7d6d.mockapi.io/fakeAPI/${id}`)
//     }
//   return (
//     <div>
//         <ul>
            
              
//                { data.map((ele)=>(
//                 <>
//                 <li>{ele.firstName} {ele.lastName}</li>
//                 <button onClick={setUpdate}>UPDATE</button>
//                </>
//                ))}
              
            
//         </ul>
       
//     </div>
//   )
// }


// // // second episode.
// // import React from 'react'
// // import axios from 'axios'
// // // import axios from 'axios' 
// // import {useEffect,useState} from 'react'
// // //rules ==> first downolad the axios package , second import the axios library, third useEffect and use axios keyword to get the url endpoint.
// // export default function FatchingData() {
// //     const [post,setPost] =useState({}) //convert from empty object to empty array
// //     const [id,setId] = useState()
// //     useEffect(()=>{
// //         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
// //         .then(res=>{setPost(res.data)})
// //         .catch(err=>{console.log(err)})
// //     })
// //   return (
// //     <div>
// //             <input value={id} onChange={e=>setId(e.target.value)}/>
// //        <div>{post.title}</div> 
// //         {/* <ul>
// //             {
// //                 post.map((post)=>(<li key={post.id}>{post.title}</li>))
// //             }
// //         </ul> */}
// //     </div>
// //   )
// // }


import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

function FatchingData() {
  // let navigate = useNavigate();
  const [post, setPost] = useState({});
  const [id, setId] = useState();
  const [idButton, setIdButton] = useState(1);

  useEffect(() => {
    axios
      .get(`https://62d3e352cd960e45d44f7d6d.mockapi.io/fakeAPI${idButton}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idButton]);

  const handelClick = () => {
    setIdButton(id);
  };
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handelClick}>
        Fetch Post
      </button>
      {/* <ul>
        {post.map((posts) => (
          <li>{posts.title}</li>
        ))}{" "}
      </ul> */}
      <div>{post.title}</div>
      {/* <button onClick={navigate("Axios/id")}></button> */}
    </div>
  );
}

export default FatchingData;