import React, {useState} from "react";
import axios from 'axios';
import "../styles/style.css";
import Show from "./Show";

function MiniBar({text,type}) {
    const[isChanged,setIsChanged]=useState('')
    const[users,setUser]=useState([])

    const getUser=(isChanged)=>{
        axios.get(`http://127.0.0.1:8000/api/v1/${type}/${isChanged}`).then(res=>{
         setUser(res.data.data);
        });
    }
	
	return (
        <>
		<div className="bar">
			<h1 className="bar-title">{text}</h1>
            <div>        
            <select className="select menu"
            onChange={(event) => {
                getUser(event.target.value)}}>
                value={isChanged}
                <option value=''>Major</option>
                <option value='1'>Buisness</option>
                <option value='2'>Engineering</option>
                <option value='3'>Pharmacy</option>
            </select>
            </div>
		</div>
        <Show users={users}>
        </Show>
        </>
	);
}

export default MiniBar;