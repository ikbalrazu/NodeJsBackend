import React, { useState, useEffect } from "react";
import axios from "axios";

const CRUDoperation = () => {
  const [field1, setField1] = useState();
  const [field2, setField2] = useState();
  const [usersdata, setUsersdata] = useState();

  const savehandler = () => {
    axios
      .post("http://localhost:3001/insert/users", {
        Name: field1,
        Email: field2,
      })
      .then(() => {
        console.log("insert successfully");
      });
  };

  useEffect(() => {
    console.log("crud operation");
    // axios.get("http://localhost:3001/insert/users/data").then((response)=>{
    //     console.log(response.data);
    //     setUsersdata(response.data);
    // });
    fetch("http://localhost:3001/insert/users/data")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsersdata(response.data);
      });
  }, []);

  return (
    <div>
      <h1>CRUD operaton</h1>
      <div>
        <label>Field 1</label>
        <input
          type="text"
          onChange={(e) => setField1(e.target.value)}
          placeholder="name"
        />
      </div>
      <div>
        <label>Field 2</label>
        <input
          type="text"
          onChange={(e) => setField2(e.target.value)}
          placeholder="email"
        />
      </div>
      <div>
        <button onClick={savehandler}>Save</button>
      </div>
      {usersdata?.map((data, index) => (
        <p>{data}</p>
      ))}
    </div>
  );
};
export default CRUDoperation;
