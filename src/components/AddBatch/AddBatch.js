import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './AddBatch.css';
import { Link } from 'react-router-dom';
import SideBar from "../nav/sidbar";
import DashNavbar from "../nav/nav";

function Batch() {
  const [batchNumber, setBatchNumber] = useState('');
  const [batchMode, setBatchMode] = useState('');
  const [totalStudents, setTotalStudents] = useState('');
  const [maleCount, setMaleCount] = useState('');
  const [femaleCount, setFemaleCount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [createdBatches, setCreatedBatches] = useState([]);

  const containerStyle = {
    
    minHeight: '130vh',
    padding: '20px',
  };

  const handleCreateBatch = () => {
    const newBatch = {
      batchNumber,
      batchMode,
      totalStudents,
      maleCount,
      femaleCount,
      startDate,
      endDate,
    };

    setCreatedBatches((prevBatches) => [...prevBatches, newBatch]);
    clearInputFields();
  };

  const clearInputFields = () => {
    setBatchNumber('');
    setBatchMode('');
    setTotalStudents('');
    setMaleCount('');
    setFemaleCount('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div>
      <div className="fixed-top"><DashNavbar/></div>
    <div className="d-flex position-fixed ">
    <div className=""><SideBar/></div>
    <div className="container-fluid-batch" style={containerStyle}>
      <div className="row justify-content-between align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
             
            </div>
            <div className="col-lg-6 mt-4 d-flex justify-content-end align-items-center pe-3">
              <button className="btn custom-button custom-batch" onClick={handleCreateBatch}>CREATE NEW BATCH</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-5 ms-4 me-3">
        <div className="card-body p-1">
          <div className="d-flex justify-content-between bg-light text-center mt-3">
            <h3 className="text-secondary">Batch</h3>
            <div className="dropdown">
              <button className="btn text-secondary dropdown-toggle me-5" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
                Filter
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                <li><a className="dropdown-item" href="#">Save as CSV</a></li>
                <li><a className="dropdown-item" href="#">Save as Excel</a></li>
                <li><a className="dropdown-item" href="#">Customize</a></li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="table-responsive p-1">
            <table className="table table-bordered">
              <thead>
                <tr>
                  
                  <th>Batch Number</th>
                  <th>Batch Mode</th>
                  <th>Total Number Of Students</th>
                  <th>Total Number Of Male</th>
                  <th>Total Number Of Female</th>
                  <th>Batch Start Date</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                 
                  <td><input type="number" className="form-batch" aria-label="Text input with serial number" placeholder="Type here" value={batchNumber} onChange={(e) => setBatchNumber(e.target.value)} /></td>
                  <td><input type="text" className="form-batch" aria-label="Text input with serial number" placeholder="Batch Mode" value={batchMode} onChange={(e) => setBatchMode(e.target.value)} /></td>
                  <td><input type="number" className="form-batch" aria-label="Text input with serial number" placeholder="Total Students" value={totalStudents} onChange={(e) => setTotalStudents(e.target.value)} /></td>
                  <td><input type="number" className="form-batch" aria-label="Text input with serial number" placeholder="Male Count" value={maleCount} onChange={(e) => setMaleCount(e.target.value)} /></td>
                  <td><input type="number" className="form-batch" aria-label="Text input with serial number" placeholder="Female Count " value={femaleCount} onChange={(e) => setFemaleCount(e.target.value)} /></td>
                  <td><input type="date" className="form-batch" aria-label="Text input with serial number" placeholder="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} /></td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h3 className="text-secondary">Created Batches</h3>
        <div className="table-responsive p-1">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Batch Number</th>
                <th>Batch Mode</th>
                <th>Total Number Of Students</th>
                <th>Total Number Of Male</th>
                <th>Total Number Of Female</th>
                <th>Batch Start Date</th>
                <th>Milestone</th>
                
              </tr>
            </thead>
            <tbody>
              {createdBatches.map((batch, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{batch.batchNumber}</td>
                  <td>{batch.batchMode}</td>
                  <td>{batch.totalStudents}</td>
                  <td>{batch.maleCount}</td>
                  <td>{batch.femaleCount}</td>
                  <td>{batch.startDate}</td>
                  <td><Link to={"/MilestoneTable"}><button type="button" className="btn btn-secondary">Add Milestone</button></Link></td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Batch;