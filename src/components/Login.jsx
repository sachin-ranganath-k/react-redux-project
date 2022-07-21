import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataFetch } from "../action/action";

function Login() {
  const allData = useSelector((state) => state.reducer.loadData);
  const dispatch = useDispatch();
  const [message, setMessage]=useState(false)
 
  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => {
        dispatch(dataFetch(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(()=>{
  //     console.log(allData[0].studReg)
  // },[])

  const [inputs, setInputs] = useState({
    studReg: "",
    studMob: "",
  });

  const { studReg, studMob } = inputs;

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
   // console.log(inputs);
  };

  const login = () => {
    allData.map((dataa) => {
      if (studReg === dataa.studReg) {
        return setMessage(true)
      } else {
        setMessage(false)
      }
    });
  };

  return (
    <div className="container" align="center">
      <h3>Login</h3>
      <br />

      <div className="formContainer">
        <input
          type="text"
          name="studReg"
          value={studReg}
          placeholder="Enter Reg No."
          onChange={handleInputs}
        />
        <input
          type="text"
          name="studMob"
          value={studMob}
          placeholder="Enter Mobile No."
          onChange={handleInputs}
        />
        <br />
        <br />
        <input type="button" value="Login" onClick={login} />
        {message && <p>Success</p>}
      </div>
    </div>
  );
}

export default Login;
