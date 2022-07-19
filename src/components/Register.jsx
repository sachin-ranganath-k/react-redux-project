import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function RegisterStudent() {
  const [inputs, setInputs] = useState({
    studReg: "",
    studName: "",
    studEmail: "",
    studMob: "",
  });
  const { studReg, studName, studEmail, studMob } = inputs;
  //const dispatch=useDispatch();
  // const [studReg, setStudReg] = useState("");
  // const [studName, setStudName] = useState("");
  // const [studEmail, setStudEmail] = useState("");
  // const [studMob, setStudMob] = useState("");

  const handleAllInputs = (e) => {
    setInputs({ [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/users",inputs)
      .then((response) => {
        console.log("ee",response);
      })
      .catch((err) => {
        console.log("err",err);
      });
  };

  return (
      <div className="container">
        <div align="center">
          <h2>Register Student</h2>
        </div>

        <div className="formContainer">
          <input
            type="text"
            name="studentReg"
            placeholder="Enter Student Reg"
            value={studReg}
            onChange={handleAllInputs}
          />

          <input
            type="text"
            name="studentName"
            placeholder="Enter Student Name"
            value={studName}
            onChange={handleAllInputs}
          />

          <input
            type="text"
            name="studentEmail"
            placeholder="Enter Student Email"
            value={studEmail}
            onChange={handleAllInputs}
          />

          <input
            type="text"
            name="studentMob"
            placeholder="Enter Student Mob"
            value={studMob}
            onChange={handleAllInputs}
          />

          <input type="button" value="Submit" onClick={handleSubmit} />
        </div>
      </div>
  );
}

export default RegisterStudent;
