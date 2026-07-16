import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => console.error("Error fetching employee:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(id, employee)
      .then(() => {
        alert("Employee updated successfully!");
        navigate("/"); // go back to list
      })
      .catch((error) => console.error("Error updating employee:", error));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button type="submit">💾 Save</button> &nbsp;
        <button type="button" onClick={() => navigate("/")}>↩️ Cancel</button>
      </form>
    </div>
  );
};

export default EditEmployee;
