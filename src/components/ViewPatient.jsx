import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewPatient = () => {

    const [data, setdata] = useState(
        []
    )

    const fetchdata = () => {
        axios.get("http://localhost:8080/viewPatientLists").then(
            (response) => {
                setdata(response.data)
            }
        )
    }

    React.useEffect(
        () => {
            fetchdata()
        }, []                 //array used only for calling once
    )


    return (
        <div>
            <NavBar/>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><p align="center" style={{ backgroundColor: "lightblue", padding: '10px', fontSize: '24px' }}><b>View Patient</b></p></div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(
                            (value, index) => {
                                return <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{value.patientName}</td>
                                    <td>{value.patientAddress}</td>
                                    <td>{value.patientPhone}</td>
                                </tr>
                            }
                        )}

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ViewPatient
