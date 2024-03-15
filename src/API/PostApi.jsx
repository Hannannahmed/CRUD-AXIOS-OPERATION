import axios from "axios";
import React, { useState } from "react";
import './style.css'
const PostApi = () => {
  const userdata = {
    fname: "",
    lastname: "",
  };
  const [inputdata, setinputdata] = useState(userdata);
  const handledata = (e) => {
    setinputdata({ ...inputdata, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", inputdata)
      .then((response) => {
        console.log(response);
      });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", inputdata)
      .then((response) => {
        console.log(response);
      });
  };
  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <>
    
      <div className="container text-center mt-5">
        <h1>CRUD OPERATION USING AXIOS</h1>
        <p className="fw-bold text-muted">POST , PUT , DELETE</p>
        <input
        placeholder="Enter First Name"
          type="text"
          name="fname"
          className="form-control p-3"
          value={inputdata.fname}
          onChange={handledata}
        />
        <br />
        <input
        placeholder="Enter Last Name"
          type="text"
          name="lastname"
          className="form-control p-3"
          value={inputdata.lastname}
          onChange={handledata}
        />
    <div className="d-flex justify-content-center mt-4 gap-4 mb-5">
        <button className="Submit" onClick={handelSubmit}>Submit</button>
    
        <button className="update" onClick={handleUpdate}>Update</button>
    
        <button  className="delete" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default PostApi;
