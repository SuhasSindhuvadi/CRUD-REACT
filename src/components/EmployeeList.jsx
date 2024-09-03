import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteEmployee, getAllEmployees } from '../service/EmployeeService';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const response = await getAllEmployees();
    setEmployees(response.data);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    loadEmployees();
  };

  return (
    <div className="details-container">
      <h2>Employee List</h2>
      <Link to="/add" className="btn add-button mb-3">Add Employee</Link>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Place</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Dept</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.place}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.dept}</td>
              <td>
                <div className="button-group">
                  <Link to={`/edit/${emp.id}`} className="btn edit-button btn-sm">Edit</Link>
                  <button onClick={() => handleDelete(emp.id)} className="btn delete-button btn-sm">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
