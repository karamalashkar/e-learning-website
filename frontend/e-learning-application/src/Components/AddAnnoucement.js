import React, {useState } from "react";
import axios from "axios";
import "../styles/style.css";

function AddAnnoucement() {
	const [title,setTitle]=useState('')
    const [text,setText]=useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!title || !text){
            alert('Fill in info');
            return;
        }
    
        const post = { ccode:'CENG450', title, text}
        try {
          await axios.post('http://127.0.0.1:8000/api/v1/add_annoucement', post)
        } catch (e) {
          alert(e)
        }
        setTitle("");
        setText("");
      }

	return (
        <form onSubmit={onSubmit}>
        <div className="sidebar flex">
			<h1 className="title">Add Annoucement</h1>
            <div className="flex">
                <input type='text'
                placeholder="Title"
                className="input annoucement"
                onChange={(event)=>
                setTitle(event.target.value)}
                value={title}></input>
                <textarea className="input annoucement"
                placeholder="Info"
                onChange={(event)=>
                setText(event.target.value)}
                value={text}></textarea>
                <button className="add btn">
                    ADD
                </button>
            </div>
		</div>
        </form>
	);
}

export default AddAnnoucement;