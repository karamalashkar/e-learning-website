import "../styles/style.css";

function addAssignment({title}) {
	
	return (
        <div className="sidebar flex">
			<h1 className="title">Add {title}</h1>
            <div className="flex">
                <input type='text' placeholder="Title" className="input"></input>
                <textarea className="input" placeholder="Info"></textarea>
                <input type='date' placeholder="Due" className="input"></input>
                <input type='file' placeholder="Due" className="input"></input>
                <button className="add">
                    ADD
                </button>
            </div>
		</div>
	);
}

export default addAssignment;