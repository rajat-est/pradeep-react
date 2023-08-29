import React, { useEffect, useState } from "react";
import { Heading } from "../style/GalleryStyle";
import { TableBtn } from "../style/ButtonTable";
import { Link } from "react-router-dom";
import axios from "./axios/Axios";
const Formiktable = () => {
  const API = "http://localhost/API/select.php";
  const [dummyData, setDummyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  // *********   without the use of axios
  // const fetchData = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setDummyData(data.tableData);
  //     setIsLoading(false);
  //   } catch (err) {
  //     setIsLoading(false);
  //     setIsError(true);
  //     setError(err.message);
  //     //console.log(err);
  //   }
  // };

  // without the use of axios Delete function
  // const DeleteDataAPI = async (url, option) => {
  //   try {
  //     const res = await fetch(url, option);
  //     fetchData(API);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const DeleteData = (id) => {
  //   DeleteDataAPI(`http://localhost/API/delete.php`, {
  //     method: "DELETE",
  //     body: JSON.stringify({
  //       id: id,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   });
  // };




  // *********   use the use of axios Select
  // const token = localStorage.getItem("token");
  // const headers = {
  //   Authorization: `Bearer ${token}`,
  // };
  const fetchData = async (url) => {
    try {
      const response = await axios.get(url, {
        // headers
      });
      setDummyData(response.data.tableData);
      setIsLoading(false);
    } catch (error) {
      console.log("select", error);
    }
  };

  useEffect(() => {
    fetchData("/select.php");
  }, []);
 // *********   use the use of axios Delete



 const DeleteDataAPI = async (id) => {
  try {
    const res = await axios.delete('/delete.php', {
      data: {
        id: id
      },
      // headers: headers
    });
    fetchData("/select.php");
  } catch (error) {
    console.log(error);
  }
};

  const DeleteData = (id) => {
    DeleteDataAPI(id);
  };

  if (isError) {
    return <div>error occured : {error}</div>;
  }
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="tableMain">
      <Heading> Formik Form Data</Heading>
      <table className="tableFormData">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Date Of Birth</th>
            <th>Genter</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>Update Data</th>
            <th>Delete Data</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((value, index) => {
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.lastName}</td>
                <td>{value.dateOfBirth}</td>
                <td>{value.gender}</td>
                <td>{value.email}</td>
                <td>{value.mobile}</td>
                <td>
                  <Link to={`/UpdateForm/${value.id}`}>
                    <TableBtn textcolor="#fff" bg="#FFFF00">
                      Update
                    </TableBtn>
                  </Link>
                </td>
                <td onClick={()=>DeleteData(value.id)}>
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
