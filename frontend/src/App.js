import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EditEmployee from "./components/EditEmployee";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <Router>
      <div>
        <h1><center>Employee Management</center></h1>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
          <Route path="/add" element={<AddEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



