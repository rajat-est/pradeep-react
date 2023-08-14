import React, { useEffect, useState } from "react";
import { Heading } from "../style/GalleryStyle";
import { TableBtn } from "../style/ButtonTable";
const API = "https://jsonplaceholder.typicode.com/users";
const DummyTable = () => {
  const [dummyData, setDummyData] = useState(null);
  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setDummyData(data);
  };
  const UpdateData = (id) => {
    alert(id);
  };
  const DeleteData = async(id) => {
    alert(id);
  };
  useEffect(() => {
    fetchData(API);
  }, []);


  //    if (dummyData === null) {
  //       return null;
  //    }
  return dummyData === null ? (
    <div>Loading.....</div>
  ) : (
    <div>
      <Heading>User Data</Heading>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Company</th>
            <th>Website</th>
            <th>Username</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Update Data</th>
            <th>Delete Data</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((value, index) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.company.name}</td>
                <td>{value.website}</td>
                <td>{value.username}</td>
                <td>
                  {value.address.city},{value.address.street},
                  {value.address.zipcode},
                </td>
                <td>{value.phone}</td>
                <td>{value.email}</td>
                <td onClick={() => UpdateData(value.id)}>
                  <TableBtn bg="#FFFF00" textcolor='#000'>Update</TableBtn>
                </td>
                <td onClick={() => DeleteData(value.id)}>
                  <TableBtn>Delete</TableBtn>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DummyTable;
