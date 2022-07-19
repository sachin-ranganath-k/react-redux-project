import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { dataFetch } from "../action/action";

const List = () => {
  const allData = useSelector((state) => state.reducer.loadData);

  const dispatch = useDispatch();

  const getData = () => {
    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        dispatch(dataFetch(response.data));
      })
      .catch(() => {
        console.log("Error...!");
      });
  };

  return (
    <>
      <input type="button" value="Get Data" onClick={getData} />
      <Link to="/register">Register</Link>
      <table border="2">
        <tbody>
        <tr>
          <th>Reg No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
        </tr>
        {allData.map((list) => {
          return (
            <tr key={list?.id}>
              <td>{list?.regno}</td>
              <td>{list?.name}</td>
              <td>{list?.email}</td>
              <td>{list?.mobile}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </>
  );
};

export default List;
