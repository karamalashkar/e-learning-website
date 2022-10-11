import React, {useState} from "react";
import axios from 'axios';
import "../styles/style.css";
import AddCourse from "./AddCourse";
import ShowCourse from "./ShowCourse";

function Bar() {
	const[isOpen,setIsOpen]=useState(false)
    const[isChanged,setIsChanged]=useState('')
    const[courses,setCourse]=useState([])
    
        const get=(isChanged)=>{
            axios.get(`http://127.0.0.1:8000/api/v1/course/${isChanged}`).then(res=>{
            setCourse(res.data.data)
            });
        }
        

	return (
        <>
		<div className="bar">
			<h1 className="bar-title">Courses</h1>
            <div>
                <select className="select"
                 onChange={(event) => {
                get(event.target.value)}}>
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
        
        <ShowCourse courses={courses}>                     
        </ShowCourse>
        </>
    );
}

export default Bar;