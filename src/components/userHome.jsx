import React from "react";

function UserHome() {
  return <div>Register No : {sessionStorage.getItem("userReg")}</div>;
}

export default UserHome;
