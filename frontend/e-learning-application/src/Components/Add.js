import React, {useState } from "react";
import axios from "axios";
import "../styles/style.css";

function Add({title}) {
    let type='';
    const [user_name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [major, setMajor] = useState('')
    //add new user
    const onSubmit = async (e) => {
    e.preventDefault()
    if(!user_name || !email || !major){
        alert('Fill in info');
        return;
    }

    if(title=='Instructor'){
        type='2';
    }
    else{
        type='3';
    }
    
    console.log(type);
    const post = { name:user_name, email, major, type}
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/v1/add', post)
      console.log(res.data)
    } catch (e) {
      alert(e)
    }
    setName("");
    setEmail("");
    setMajor("");
  }
	
	return (
        <form onSubmit={onSubmit}>
        <div className="sidebar flex">
			<h1 className="title">Add {title}</h1>
            <div className="flex">
                <input type='text' 
                placeholder="Name" 
                className="input"
                onChange={(event) => {
                    setName(event.target.value)
                  }}
                  value={user_name}></input>
                <input type='text'
                placeholder="Email"
                className="input"
                onChange={(event) => {
                    setEmail(event.target.value)
                  }}
                  value={email}></input>
                <select className="input"
                onChange={(event) => {
                    setMajor(event.target.value)
                  }}
                  value={major}>
                    <option value="">Major</option>   
                    <option value='1'>Buisness</option>
                    <option value='2'>Engineering</option>
                    <option value='3'>Pharmacy</option>
                </select>
                <button className="add btn">
                    ADD
                </button>
            </div>
		</div>
        </form>
	);
}

export default Add;