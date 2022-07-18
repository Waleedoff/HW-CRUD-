// // import React from 'react'

// // function Home() {
// //   return (
// //     <div>Home</div>
// //   )
// // }

// // export default Home
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Home() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`https://62d3e352cd960e45d44f7d6d.mockapi.io/fakeAPI`)
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   //UPDATE

//   const setUbdate = (e) => {
//     let { id, firstName, lastName } = e;
//     localStorage.setItem("id", id);
//     localStorage.setItem("firstName", firstName);
//     localStorage.setItem("lastName", lastName);
//   };
//   const getData = () => {
//     axios
//       .get(`https://62d3e34acd960e45d44f7ccf.mockapi.io/fakeAPI`)
//       .then((getData) => {
//         setData(getData.data);
//       });
//   };
//   const onDelete = (id) => {
//     axios
//       .delete(`https://62d3e352cd960e45d44f7d6d.mockapi.io/fakeAPI${id}`)
//       .then(() => {
//         getData();
//       });
//   };
//   return (
//     <div>
//       <ul>
//         {data.map((e) => (
//           <>
//             <li>{e.firstName}</li>
//             <li>{e.lastName}</li>
//             <Link to="/Update">
//               <button onClick={setUbdate(e)}>Ubdate</button>
//             </Link>
//             <button
//               onClick={() => {
//                 onDelete(e.id);
//               }}
//             >
//               Delete
//             </button>
//           </>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://62d3e352cd960e45d44f7d6d.mockapi.io/fakeAPI`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //UPDATE

  const setUbdate = (e) => {
    let { id, firstName, lastName } = e;
    localStorage.setItem("id", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
  };
  const getData = () => {
    axios
      .get(`https://62d3e352cd960e45d44f7d6d.mockapi.io/fakeAPI`)
      .then((getData) => {
        setData(getData.data);
      });
  };
  const onDelete = (id) => {
    axios
      .delete(`https://62d3e352cd960e45d44f7d6d.mockapi.io/fakeAPI/${id}`)
      .then(() => {
        getData();
      });
  };
  return (
    <div>
      <ul>
        {data.map((e) => (
          // <>
          //   <li>{e.firstName}</li>
          //   <li>{e.lastName}</li>
          //   <Link to="/Update">
          //     <button onClick={setUbdate(e)}>Update</button>
          //   </Link>
          //   <button
          //     onClick={() => {
          //       onDelete(e.id);
          //     }}
          //   >
          //     Delete
          //   </button>
          // </>
          <ListGroup>
      <ListGroup.Item>{e.firstName}</ListGroup.Item>
      <ListGroup.Item>{e.lastName}</ListGroup.Item>
      <Link to="/Update">
      <button onClick={setUbdate(e)}>Update</button>
      </Link>
      <button
              onClick={() => {
                onDelete(e.id);}}
            >
              Delete
             </button>
    </ListGroup>
          
        ))}
      </ul>
    </div>
  );
}

export default Home;