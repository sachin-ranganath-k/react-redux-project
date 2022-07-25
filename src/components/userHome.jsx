import React from "react";
import { useNavigate } from "react-router-dom";
import GlobalError from "./globalError";

function UserHome() {
  const navigate = useNavigate();
  let userReg = sessionStorage.getItem("userReg");
  const logOut = () => {
    sessionStorage.clear("userReg");
    navigate("/");
  };

  return (
    <div>
      {!userReg ? (
        <GlobalError />
      ) : (
        <div>
          <p>Register No : {userReg} </p>
          <input type="button" value="Logout" onClick={logOut} />)
        </div>
      )}
    </div>
  );
}

export default UserHome;
