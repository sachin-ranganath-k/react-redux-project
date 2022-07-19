import axios from "axios";
import React, { useState } from "react";

function RegisterStudent() {
  const [inputs, setInputs] = useState({
    studReg: "",
    studName: "",
    studEmail: "",
    studMob: "",
  });
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [fieldsFill, setFieldsFill] = useState(false);

  const { studReg, studName, studEmail, studMob } = inputs;

  const handleAllInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const apiCall = () => {
    axios
      .post("http://localhost:3001/users", inputs)
      .then((response) => {
        setErrorMsg(false);
        setFieldsFill(false)
        setSuccessMsg(true)
      })
      .catch((err) => {
        setFieldsFill(false)
        setSuccessMsg(false)
        setErrorMsg(true)
      });
  };

  const handleSubmit = () => {
    if (studReg === "" || studName === "" || studEmail === "" || studMob === "") {
      setFieldsFill(true)
    }
    else {
      apiCall();
    }
  };

  return (
    <div className="container">
      <div align="center">
        <h2>Register Student</h2>
      </div>

      <div className="formContainer">
        {successMsg && <p>Successfuly Registered</p>}
        {errorMsg && <p>Error..!</p>}
        {fieldsFill && <p>All Fields are required..!</p>}
        <input
          type="text"
          name="studReg"
          placeholder="Enter Student Reg"
          value={studReg}
          onChange={handleAllInputs}
          required
        />

        <input
          type="text"
          name="studName"
          placeholder="Enter Student Name"
          value={studName}
          onChange={handleAllInputs}
          required
        />

        <input
          type="email"
          name="studEmail"
          placeholder="Enter Student Email"
          value={studEmail}
          onChange={handleAllInputs}
          required
        />

        <input
          type="text"
          name="studMob"
          placeholder="Enter Student Mob"
          value={studMob}
          onChange={handleAllInputs}
          required
        />

        <input type="button" value="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default RegisterStudent;
