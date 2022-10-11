import React, {useState} from "react";

import "../styles/style.css";
import AddCourse from "./AddCourse";
import ShowCourse from "./ShowCourse";

function Bar() {
	const[isOpen,setIsOpen]=useState(false)
    const[isChanged,setIsChanged]=useState('')
    
	return (
        <>
		<div className="bar">
			<h1 className="bar-title">Courses</h1>
            <div>
                <select className="select"
                 onChange={(event) => {
                setIsChanged(event.target.value)}}>
                value={isChanged}
                    <option value=''>Major</option>
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
        
        <ShowCourse major={isChanged}>

        </ShowCourse>
        </>
    );
}

export default Bar;