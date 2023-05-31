import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddPatient = () => {

  const [inputField, setInputField] = useState(
    {
      patientName: "",
      patientAddress: "",
      patientPhone: "",
    }
  )
  const dataOnChange = (event) => {
    setInputField(
      {
        ...inputField, [event.target.name]: event.target.value
      }
    )
  }

  const submitPatient = () => {
    console.log(inputField)
    axios.post("http://localhost:8080/addPatient", inputField).then(
      (response) => {

        console.log(response.data)
        if (response.data.status == "success") {
          alert("Patient Successfully Added")
          setInputField(
            {
              patientName: "",
              patientAddress: "",
              patientPhone: "",
            }
          )
        } else {
          alert("Patient entry Failed!!!")
        }
      }
    )
  }



  return (
    <div>
      <NavBar />
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><p align="center" style={{ backgroundColor: "lightblue", padding: '10px', fontSize: '24px' }}><b>Add Patient</b></p></div>
      <div className="container">
        <div className="row">
          <div className="row g-3" >
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label">Name</label>
              <input type="text" className="form-control" name="patientName" value={inputField.patientName} onChange={dataOnChange} />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label">Address</label>
              <input type="text" className="form-control" name="patientAddress" value={inputField.patientAddress} onChange={dataOnChange} />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label">Phone</label>
              <input type="text" className="form-control" name="patientPhone" value={inputField.patientPhone} onChange={dataOnChange} />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <button className="btn btn-success" onClick={submitPatient}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPatient
