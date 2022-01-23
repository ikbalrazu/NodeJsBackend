import React, { useEffect, useState } from "react";
import axios from "axios";
import Generator from "license-key-generator";
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import CRUDoperation from './components/CRUDoperation'
import Header from "./components/Header";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [email, setName] = useState("");
  const [id, setId] = useState("");

  const handlesave = () => {
    axios.post("http://localhost:3001/users/", { email, id });
  };

  const LicenseKey = () => {
    const options = {
      type: "random", // default "random"
      length: 16, // default 16
      group: 4, // default 4
      split: "-", // default "-"
      splitStatus: true, // default true
    };
    const code = new Generator(options);
    code.get((error, code) => {
      if (error) return console.error(error);
      console.log("code=", code);
    });
  };

  useEffect(() => {
    console.log("hello world");
    fetch("https://backendserver2.herokuapp.com/api")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBackendData(data);
      });
    //LicenseKey();  
  }, []);
  return (
    <BrowserRouter>
    {/* <div className="App"> */}
      {/* {backendData?.users?.map((data, index) => (
        <p key={index}>{data}</p>
      ))}
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <input
        type="text"
        onChange={(e) => setId(e.target.value)}
        placeholder="id"
      />
      <button onClick={handlesave}>Save</button> */}
    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/crud" element={<CRUDoperation/>}/>
    </Routes>
    {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
