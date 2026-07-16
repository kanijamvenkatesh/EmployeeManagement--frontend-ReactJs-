import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import "./EmployeeList.css";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EmployeeService.createEmployee(employee)
      .then(() => {
        alert("✅ Employee added successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error("❌ Error adding employee:", error);
        alert("Failed to add employee!");
      });
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="employee-container">
      <h2 className="title">Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={handleChange}
            required
          />
        </div>

        <br />
        <button type="submit" className="add-btn">💾 Save</button>
        &nbsp;
        <button type="button" className="delete-btn" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
