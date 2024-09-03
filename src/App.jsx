import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Employee Management</h1>
      <Routes>
        <Route exact path="/" element={<EmployeeList />} />
        <Route path="/add" element={<EmployeeForm />} />
        <Route path="/edit/:id" element={<EmployeeForm />} />
      </Routes>
    </div>
  );
}

export default App;
