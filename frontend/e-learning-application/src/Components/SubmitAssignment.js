import "../styles/style.css";

function submitAssignment() {
	
	return (
        <div className="sidebar flex">
			<h1 className="title">submit Assignment</h1>
            <div className="flex">
                <input type='text' placeholder="Title" className="input"></input>
                <input type='file' placeholder="Due" className="input"></input>
                <button className="add btn">
                    Submit
                </button>
            </div>
		</div>
	);
}

export default submitAssignment;