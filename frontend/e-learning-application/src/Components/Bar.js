import { useRef } from "react";
import "../styles/style.css";

function bar() {
	
	return (
		<div className="bar">
			<h1 className="bar-title">Courses</h1>
            <div>
                <select className="select">
                    <option value={1}>Buisness</option>
                    <option value={2}>Engineering</option>
                    <option value={3}>Pharmacy</option>
                </select>        
                <button className="add">
                    ADD
                </button>
            </div>    
		</div>
	);
}

export default bar;