import React, {useState } from "react";
import axios from "axios";
import "../styles/style.css";

function SubmitAssignment() {
	const [title,setTitle]=useState('')
    const [image,setImage]=useState('')

    const onSubmit=async (e)=>{
        e.preventDefault()
        if(!title || !image){
            alert('Fill in info');
            return;
        }
    
        const post = { ccode:'CENG450', sid: '123' , title, image}
        try {
          const res = await axios.post('http://127.0.0.1:8000/api/v1/submit_assignment', post)
          console.log(res.data)
        } catch (e) {
          alert(e)
        }
        setTitle("");
        setImage("");
      }

	return (
        <form onSubmit={onSubmit}>
        <div className="sidebar flex">
			<h1 className="title">submit Assignment</h1>
            <div className="flex">
                <input type='text'
                placeholder="Title"
                className="input"
                onChange={(event) => {
                    setTitle(event.target.value)
                }}
                  value={title}></input>

                <input type='file'
                className="input"
                onChange={(event) => {
                    setImage(event.target.value)
                }}
                  value={image}></input>
                <button className="add btn">
                    Submit
                </button>
            </div>
		</div>
        </form>
	);
}

export default SubmitAssignment;