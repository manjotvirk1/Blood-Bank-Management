import React, { useState } from "react";
import Axios from "axios";
//css
import "../../assets/css/EmployeeLogin.css";

const EmployeeLogin = () => {
  const [empUserName, setempUsername] = useState("");
  const [empPassword, setempPassword] = useState("");

  //onclick function
  const empLoginCheck = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login/emp", {
      empUserName: empUserName,
      empPassword: empPassword,
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        alert("WELCOME!");
        window.location = "/login/emp/dash";
      }
    });
  };

  return (
    <div className="emp-login">
      <h2>EMPLOYEE LOGIN</h2>
      <form className="form-group" onSubmit={(e)=>empLoginCheck(e)}>
        <input
          name="username"
          type="text "
          placeholder="username"
          className="form-control"
          onChange={(e) => {
            setempUsername(e.target.value);
          }}
        />
        <input
          name="password"
          type="text "
          placeholder="password"
          className="form-control"
          onChange={(e) => {
            setempPassword(e.target.value);
          }}
        />
        <button className="btn btn-danger" type="submit" >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default EmployeeLogin;
