import React from "react";
import { useValidationContext } from "./ValidationContext";
import { Heading } from "../style/GalleryStyle";

const RagistrationData = () => {
const  {formData}  = useValidationContext();
  return (
    <div className="tableMain">
      <Heading> Registration From Data </Heading>
      <table className="tableFormData">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date Of Birth</th>
            <th>Genter</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((value,index) => {
            return (
            <tr key={index}>
                <td>{index}</td>
              <td>{value.name}</td>
              <td>{value.lname}</td>
              <td>{value.email}</td>
              <td>{value.dateOfBirth}</td>
              <td>{value.gender}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RagistrationData;
