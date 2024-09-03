import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createEmployee, getEmployeeByid, updateEmployee } from '../service/EmployeeService';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '', age: '', place: '', email: '', phone: '', dept: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      loadEmployee();
    }
  }, [id]);

  const loadEmployee = async () => {
    const response = await getEmployeeByid(id);
    setEmployee(response.data);
  };

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateEmployee(id, employee);
    } else {
      await createEmployee(employee);
    }
    navigate('/');
  };

  return (
    <div className="edit-container">
      <h2>{id ? 'Edit Employee' : 'Add Employee'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={employee.name} onChange={handleChange} required />
        
        <label>Age</label>
        <input type="number" name="age" value={employee.age} onChange={handleChange} required />
        
        <label>Place</label>
        <input type="text" name="place" value={employee.place} onChange={handleChange} required />
        
        <label>Email</label>
        <input type="email" name="email" value={employee.email} onChange={handleChange} required />
        
        <label>Phone</label>
        <input type="text" name="phone" value={employee.phone} onChange={handleChange} required />
        
        <label>Department</label>
        <input type="text" name="dept" value={employee.dept} onChange={handleChange} required />
        
        <button type="submit" className="btn save-button">{id ? 'Update' : 'Save'}</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
