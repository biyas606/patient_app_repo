import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchPatient = () => {

    
    const [phoneNo, setPhoneNo] = useState(
        {
            patientPhone: ""
        }
    )


    const [searchResult, setSearchResult] = useState({
        "data": {
            "patientName": "",
            "patientAddress": "",
            "patientPhone": ""
        },
        "status": ""
    })

    const dataOnChange = (event) => {
        setPhoneNo(
            {
                ...phoneNo, [event.target.name]: event.target.value
            }

        )
    }


    const search = () => {
        console.log(phoneNo)
        axios.post("http://localhost:8080/search",phoneNo).then(
            (response)=>{
                console.log(response.data.data)
                if (response.data.status != "Found!!!") {
                    alert("Invalid Phone No")
                    setSearchResult(
                        {
                            "id": "",
                            "patientName": "",
                            "patientAddress": "",
                            "patientPhone": ""
                        }  
                    )
                } else {
                    setSearchResult(response.data.data)
                }
            }
          )
    }

      const dataOnUpdate = (event) => {
        setSearchResult(
            {
              ...searchResult,[event.target.name]: event.target.value
            }
        )
      }
    
      const updatePatient = () => {
        console.log(searchResult)
        axios.put("http://localhost:8080/updatePatient", searchResult).then(
          (response) => {
    
            console.log(response.data.data)
            if (response.data.Status === "Updated Successfully") {
              alert("Patient Updation Added")
            } else {
              alert("Patient update Failed!!!")
            }
          }
        )
      }

      const deletePatient=()=>{
        console.log(searchResult)
        axios.post("http://localhost:8080/deletePatient",searchResult).then((response)=>{
            if (response.data.Status=="Deleted successfully") {
                alert("Patient Deleted Successfully")
                setSearchResult(
                    {
                        "id": "",
                        "patientName": "",
                        "patientAddress": "",
                        "patientPhone": ""
                    }  
                )
            } else {
                alert("Failed")
            }
        })

    }

  return (
    <div>
      <NavBar/>
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><p align="center" style={{ backgroundColor: "lightblue", padding: '10px', fontSize: '24px' }}><b>Search/Update Patient</b></p></div>
      <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
                        <label htmlFor="" className="form-label">Enter Phone No.</label>
                        <input type="text" className="form-control" name="patientPhone" value={phoneNo.patientPhone} onChange={dataOnChange} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
                        <button className="btn btn-success" onClick={search}>SUBMIT</button>
                    </div>
                </div>

                <div className="row-g-3">
                    <br></br>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <input type="text" className="form-control" name="id"  value={searchResult.id}  hidden/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name="patientName" defaultValue={searchResult.patientName} onChange={dataOnUpdate}  />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Address</label>
                        <input type="text" className="form-control" name="patientAddress" defaultValue={searchResult.patientAddress} onChange={dataOnUpdate} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Phone</label>
                        <input type="text" className="form-control" name="patientPhone"  defaultValue={searchResult.patientPhone} onChange={dataOnUpdate} />
                    </div>
                    <br></br>
                     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={updatePatient}>UPDATE</button>
                        <button className="btn btn-danger" onClick={deletePatient}>DELETE</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SearchPatient
