import "../styles/style.css";

function bar({text}) {
	
	return (
		<div className="bar">
			<h1 className="bar-title">{text}</h1>
            <div>        
                <button className="add">
                    ADD
                </button>
            </div>    
		</div>
	);
}

export default bar;