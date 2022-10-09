import React, {useState} from "react";

import "../styles/style.css";
import AddCourse from "./AddCourse";


function Bar() {
	const[isOpen,setIsOpen]=useState(false)
	return (
        <>
		<div className="bar">
			<h1 className="bar-title">Courses</h1>
            <div>
                <select className="select">
                    <option value='1'>Buisness</option>
                    <option value='2'>Engineering</option>
                    <option value='3'>Pharmacy</option>
                </select>        
                <button className="add" onClick={()=>setIsOpen(true)}>
                    ADD
                </button>
            </div>    
		</div>
        <AddCourse open={isOpen} onClose={()=>setIsOpen(false)}>

        </AddCourse>
        </>
	);
}

export default Bar;