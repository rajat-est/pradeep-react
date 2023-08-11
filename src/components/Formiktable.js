import React, { useEffect, useState } from "react";
import { Heading } from "../style/GalleryStyle";
import { TableBtn } from "../style/ButtonTable";
import { Link } from "react-router-dom";
const Formiktable = () => {
  const API =
    "https://crudcrud.com/api/09c17d35e99c4985994da2cf7e3fedd8/unicorns";
  const [dummyData, setDummyData] = useState(null);
  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setDummyData(data);
  };
  const DeleteDataAPI = async (url, option) => {
    const res = await fetch(url, option);
    fetchData(API);
  };
  const UpdateData = (id) => {
    alert(id);
  };
  const DeleteData = (id) => {
    DeleteDataAPI(`${API}/${id}`, { method: "DELETE" });
  };
  useEffect(() => {
    fetchData(API);
  }, []);

  return dummyData === null ? (
    <div>Loading...</div>
  ) : (
    <div className="tableMain">
      <Heading> Formik Form Data</Heading>
      <table className="tableFormData">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date Of Birth</th>
            <th>Genter</th>
            <th>Update Data</th>
            <th>Delete Data</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((value, index) => {
            console.log(value);
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.lname}</td>
                <td>{value.email}</td>
                <td>{value.dateOfBirth}</td>
                <td>{value.gender}</td>
                <td>
                  <Link to={`/UpdateForm/${value._id}`}>
                    <TableBtn textColor="#fff" bg="#FFFF00">
                      Update
                    </TableBtn>
                  </Link>
                </td>
                <td onClick={() => DeleteData(value._id)}>
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

export default Formiktable;
