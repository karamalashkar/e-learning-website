import "../styles/style.css";

function addCourse() {
	
	return (
		<div className="form flex">
			<h1 className="bar-title">Add Course</h1>
            <div className="form-info flex">
                <input type='text' placeholder="Course Code" className="input"></input>
                <input type='text' placeholder="Course Name" className="input"></input>
                <input type='text' placeholder="Time" className="input"></input>
                <input type='file' className="input"></input>
                <select className="input"> 
                    <option value="">Major</option>  
                    <option value='1'>Buisness</option>
                    <option value='2'>Engineering</option>
                    <option value='3'>Pharmacy</option>
                </select>
                <button className="add">
                    ADD
                </button>
            </div>    
		</div>
	);
}

export default addCourse;