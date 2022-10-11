import "../styles/style.css";

function Box({name,email}) {
	
	return (
		<div className="card box">
            <h2>{name}</h2>
            <h2>{email}</h2>
		</div> 
	);
}

export default Box;