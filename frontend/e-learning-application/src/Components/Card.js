import "../styles/style.css";

function Card({image, title, name,instructor,time}) {
	
	return (
		<div className="card flex">
            <img src='logo192.png'></img>
            <div className="card-info">
                <h1>{title}</h1>
                <h2>{name}</h2>
                <h2></h2>
                <h3>{time}</h3>
            </div>
		</div> 
	);
}

export default Card;