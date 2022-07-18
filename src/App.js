// import logo from './logo.svg';
// import { Route,Router,Routes } from 'react-router-dom';
import {BrowserRouter as Router,Route, Routes,Link} from "react-router-dom"
import './App.css';
import Create from './Create';
import FatchingData from './FatchingData'
import Home from './Home'
import Update from "./Update";
function App() {
  return (
    // <div className="App">
    //   {/* <h1>hi there</h1> */}
    //    <FatchingData/> 
    //    <Create/>
    // </div>
    <>
    
      <Router>
      <Link to="/Create">Login</Link>
        <Routes>
        <Route path='/'></Route>   
        <Route path='Home' element={<Home/>} ></Route>
        <Route path='Create' element={<Create/>} ></Route>
        <Route path='data' element={<FatchingData/>} ></Route>
        <Route path='update' element={<Update/>} ></Route>

        </Routes>
      </Router>
    
    </>
  );
}

export default App;