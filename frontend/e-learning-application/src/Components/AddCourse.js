import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/style.css";

function AddCourse({open,onClose}) {

    const [code, setCode] = useState('')
    const [course, setCourse] = useState('')
    const [time, setTime] = useState('')
    const [image, setImage] = useState('')
    const [major, setMajor] = useState('')
    //add new course
    const onSubmit = async (e) => {
    e.preventDefault()
    if(!code || !course || !time || !image || !major){
        alert('Fill in info');
        return;
    }

    const post = { code, 'name': course, time, image, major }
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/v1/add_course', post)
      console.log(res.data)
    } catch (e) {
      alert(e)
    }
    setCode("");
    setCourse("");
    setTime("");
    setImage("");
    setMajor("");
  }

    if(!open){
        return null
    }
	return (
        <form onSubmit={onSubmit}>
		<div className="form flex">
            <button className="close" onClick={onClose}>
                    x
            </button>
			<h1 className="bar-title">Add Course</h1>
            <div className="form-info flex">
                <input 
                type='text' 
                placeholder="Course Code" 
                className="input"
                onChange={(event) => {
                    setCode(event.target.value)
                  }}
                  value={code}></input>

                <input type='text' 
                placeholder="Course Name" 
                className="input"
                onChange={(event) => {
                    setCourse(event.target.value)
                  }}
                  value={course}></input>

                <input type='text'
                placeholder="Time"
                className="input"
                onChange={(event) => {
                    setTime(event.target.value)
                  }}
                  value={time}></input>
                
                <input type='file'
                className="input"
                onChange={(event) => {
                    setImage(event.target.value)
                  }}
                  value={image}></input>
                
                <select className="input"
                onChange={(event) => {
                    setMajor(event.target.value)
                  }}
                  value={major}> 
                    <option value={''}>Major</option>  
                    <option value={'1'}>Buisness</option>
                    <option value={'2'}>Engineering</option>
                    <option value={'3'}>Pharmacy</option>
                </select>

                <input type={"submit"} value="Add Course" className="add btn" />
            </div>    
		</div>
        </form>
	);
}

export default AddCourse;
