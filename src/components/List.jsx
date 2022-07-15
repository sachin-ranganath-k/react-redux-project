import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dataFetch } from "../action/action";

const List = () => {
  const allData = useSelector((state) => state.reducer.loadData);

  const dispatch = useDispatch();

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
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

      <table border="2">
        <tbody>
        <tr>
          <th>User ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {allData.map((list) => {
          return (
            <tr key={list.id}>
              <td>{list.userId}</td>
              <td>{list.title}</td>
              <td>{list.body}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </>
  );
};

export default List;
