import { axios } from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Employee() {

  useEffect(()=>{
    axios
    .get("http://localhost:3000/auth/employee")
    .then((result) => {
      if (result.data.Status) {
        setCategory(result.data.Result);
      } else {
        alert(result.data.Error);
      }
    })
    .catch((err) => console.log(err));

  },[])

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to={"/dashboard/add_employee"} className="btn btn-success">
        Add Employee
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Salay</th>
              <th>Address</th>
              <th>Category</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((e) => (
              <tr>
                <td>{e.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3"></div>
    </div>
    
  );
}

export default Employee;
