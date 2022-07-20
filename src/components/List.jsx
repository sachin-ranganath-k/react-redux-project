import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { dataFetch } from "../action/action";

const List = () => {
  const allData = useSelector((state) => state.reducer.loadData);
  const dispatch = useDispatch();
  let sl=1;

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


  const deleteStudent=(id)=>{
    axios.delete(`http://localhost:3001/users/${id}`)
    .then((res)=>{
      console.log('deleted')
      getData()
    })
    .catch(()=>{
      console.log('Error..!')
    })
  }

  return (
    <div align="center">
      <input type="button" value="Get Data" onClick={getData} />
      <br />
      <Link to="/register">Register</Link>
      <br /><br />
      <table border="2">
        <tbody>
        <tr>
          <th>Sl. No</th>
          <th>Reg No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Delete</th>
        </tr>
        {allData.map((list) => {
          return (
            <tr key={list?.id}>
              <td>{sl++}</td>
              <td>{list?.studReg}</td>
              <td>{list?.studName}</td>
              <td>{list?.studEmail}</td>
              <td>{list?.studMob}</td>
              <td><input type="button"  value="Delete" onClick={()=>deleteStudent(list.id)}/></td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
