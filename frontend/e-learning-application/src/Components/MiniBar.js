import "../styles/style.css";

function bar({text}) {
	
	return (
		<div className="bar">
			<h1 className="bar-title">{text}</h1>
            <div>        
            <select className="select menu">
                <option value='1'>Buisness</option>
                <option value='2'>Engineering</option>
                <option value='3'>Pharmacy</option>
            </select>
            </div>    
		</div>
	);
}

export default bar;