import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [adminTotal, SetAdminTotal] = useState(0);
  const [salaryTotal, SetSalaryTotal] = useState(0);
  const [employeeTotal, SetEmployeeTotal] = useState(0);
  const [adminDetail, SetAdmindetail] = useState([]);

  useEffect(() => {
    adminCount();
    employeeCount();
    salaryCount();
    getAdminDetail();
  }, []);

  const getAdminDetail = () => {
    axios
      .get("http://localhost:3000/auth/getAdminDetail")
      .then((result) => {
        if (result.data.Status) {
          SetAdmindetail(result.data.Result);
        }
      })
      .catch((err) => console.log(err));
  };

  const adminCount = () => {
    axios
      .get("http://localhost:3000/auth/getAdminCount")
      .then((result) => {
        if (result.data.Status) {
          SetAdminTotal(result.data.Result[0].AdminCount);
        }
      })
      .catch((err) => console.log(err));
  };

  const employeeCount = () => {
    axios
      .get("http://localhost:3000/auth/getEmployeeCount")
      .then((result) => {
        if (result.data.Status) {
          SetEmployeeTotal(result.data.Result[0].employeeCount);
        }
      })
      .catch((err) => console.log(err));
  };

  const salaryCount = () => {
    axios
      .get("http://localhost:3000/auth/getSalaryCount")
      .then((result) => {
        if (result.data.Status) {
          SetSalaryTotal(result.data.Result[0].salaryCount);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="p-3 d-flex justify-content-around mt-3">
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Admin</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{adminTotal}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3  border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Employee</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{employeeTotal}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Salary</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{salaryTotal}</h5>
          </div>
        </div>
      </div>
      <div className="mt-4 px-5 pt-3">
        <h3>List of Admins</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {adminDetail.map((a) => (
              <tr>
                <td>{a.Email}</td>
                <td>
                  <button className="btn btn-info btn-sm me-2">Edit</button>
                  <button className="btn btn-warning btn-sm ">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
