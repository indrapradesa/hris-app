import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EmployeeShow from './pages/Employee/EmployeeShow';
import EmployeeCreate from './pages/Employee/EmployeeCreate';
import EmployeeDetail from './pages/Employee/EmployeeDetail';
import { BasicTable } from './components/BasicTable';
// import Sidebar from './components/Sidebar';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/employee" element={<EmployeeShow />} />
        <Route path="/employee/create" element={<EmployeeCreate />} />
        <Route path="/employee/detail" element={<EmployeeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
