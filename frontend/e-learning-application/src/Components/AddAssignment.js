import React, {useState } from "react";
import axios from "axios";
import "../styles/style.css";

function AddAssignment({title}) {
    const [title_assignemnt, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')
    const [due, setDue] = useState('')
    
    const onSubmit = async (e) => {
        e.preventDefault()
        if(!title_assignemnt || !body || !image || !due){
            alert('Fill in info');
            return;
        }
    
        const post = { ccode:'CENG450', title:title_assignemnt, body, image, due}
        try {
          const res = await axios.post('http://127.0.0.1:8000/api/v1/add_assignment', post)
          console.log(res.data)
        } catch (e) {
          alert(e)
        }
        setTitle("");
        setBody("");
        setImage("");
        setDue("");
      }


	return (
        <form onSubmit={onSubmit}>
        <div className="sidebar flex">
			<h1 className="title">Add {title}</h1>
            <div className="flex">
                <input type='text'
                placeholder="Title"
                className="input"
                onChange={(event) => {
                    setTitle(event.target.value)
                }}
                  value={title_assignemnt}></input>
                <textarea className="input"
                placeholder="Info"
                onChange={(event) => {
                    setBody(event.target.value)
                }}
                  value={body}></textarea>
                <input type='date'
                placeholder="Due"
                className="input"
                onChange={(event) => {
                    setDue(event.target.value)
                }}
                  value={due}></input>
                <input type='file'
                className="input"
                onChange={(event) => {
                    setImage(event.target.value)
                }}
                  value={image}></input>
                <button className="add btn">
                    ADD
                </button>
            </div>
		</div>
        </form>
	);
}

export default AddAssignment;