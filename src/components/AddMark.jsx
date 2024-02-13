import axios from 'axios'
import React, { useState } from 'react'

const AddMark = () => {
    const [input,setInput]=new useState(
        {
            "userId":sessionStorage.getItem("userId"),
            "mark1":"",
            "mark2":"",
            "mark3":"",
            "mark4":"",
            "mark5":""
            
      
          }


    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target,value})

    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/mark/addwmark",input).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("marks added succesfully")
                    setInput(
                        {
                            
                            "mark1":"",
                            "mark2":"",
                            "mark3":"",
                            "mark4":"",
                            "mark5":""
                            
                      
                          }

                    )
                }else{
                    alert("something went wrong")
                }

            }
        )
    }
  return (
    <div>

<div className="container bg-info">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">mark1</label>
                        <input type="text" className="form-control" name="mark1" value={input.mark1} onChange={InputHandler} />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">mark1</label>
                        <input type="text" className="form-control" name="mark2" value={input.mark2} onChange={InputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">mark3</label>
                        <input type="text" className="form-control" name="mark3" value={input.mark3} onChange={InputHandler} />
                    </div>
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">mark4</label>
                        <input type="text" className="form-control" name="mark4" value={input.mark4} onChange={InputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">mark5</label>
                        <input type="text" className="form-control" name="mark5" value={input.mark5} onChange={InputHandler} />
                    </div>
                    
                    
           
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValues}>ADD-MARKS</button>
                    </div>
                </div>
            </div>


    </div>
  )
}

export default AddMark