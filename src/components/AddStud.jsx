import axios from 'axios'
import React, { useState } from 'react'
import AdminNavBar from './AdminNavBar'

const AddStud = () => {
    const [input, setInput] = new useState(
        {
            "name": "",
            "rollno": "",
            "admno": "",
            "collegename": "",
            "parentname": "",
            "mobileno": "",
            "emailId": "",
            "password": ""


        }


    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target, value })

    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3001/api/college/addstud", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("succesfully registerd")
                    setInput(
                        {
                            "name": "",
                            "rollno": "",
                            "admno": "",
                            "collegename": "",
                            "parentname": "",
                            "mobileno": "",
                            "emailId": "",
                            "password": ""


                        }

                    )
                } else {
                    alert("something went wrong")
                }

            }
        )
    }
    return (
        <div>
            <AdminNavBar />

            <div className="container bg-info">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">name</label>
                        <input type="text" className="form-control" name="name" value={input.name} onChange={InputHandler} />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">rollno</label>
                        <input type="text" className="form-control" name="rollno" value={input.rollno} onChange={InputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">admno</label>
                        <input type="text" className="form-control" name="admno" value={input.admno} onChange={InputHandler} />
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">collegename</label>
                        <input type="text" className="form-control" name="collegename" value={input.collegename} onChange={InputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">parentname</label>
                        <input type="text" className="form-control" name="parentname" value={input.parentname} onChange={InputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">mobileno</label>
                        <input type="text" className="form-control" name="mobileno" value={input.mobileno} onChange={InputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">emailId</label>
                        <input type="email" className="form-control" name="emailId" value={input.emailId} onChange={InputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">password</label>
                        <input type="password" className="form-control" name="password" value={input.password} onChange={InputHandler} />


                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValues}>REGISTER</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AddStud