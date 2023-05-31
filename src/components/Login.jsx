import React, { useState } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const myNavigation = useNavigate()

    const [user, setUserData] = useState({
        userName: "",
        password: ""
    })

    const dataOnChange = (event) => {
        setUserData({
            ...user, [event.target.name]: event.target.value
        })
    }

    const submitLogin = () => {
        console.log(user)
        if (user.userName == "admin" && user.password == "12345") {
            sessionStorage.setItem("name", "Admin")
            localStorage.setItem("token", "ywt365636386wggshwfhgfsh")
            myNavigation("/add")
        } else {
            alert("Login Failed!!!")
        }

    }

    return (
        <div>
            <div className="container">
                <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br></br>
                        <h2><label htmlFor="" className="form-label">Patient Management</label></h2>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p align="center" style={{ backgroundColor: "lightblue", padding: '10px', fontSize: '24px' }}> <img src="https://mopharma.com/images/patient-management-app-01.png" style={{ float: 'inline-start' }} alt="Logo" width="45" height="45" className="d-inline-block align-text-top" /><b>Login</b></p></div>

                    <div className="row g-3" >
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">UserName</label>
                            <input type="text" className="form-control" name="userName" value={user.userName} onChange={dataOnChange} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name="password" value={user.password} onChange={dataOnChange} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={submitLogin}>SignIn</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
