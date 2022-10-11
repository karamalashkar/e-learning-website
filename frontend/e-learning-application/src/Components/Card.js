import "../styles/style.css";

function Card() {
	
	return (
		<div className="card flex">
            <img src='logo192.png'></img>
            <div className="card-info">
                <h1>CENG400</h1>
                <h2>Computer</h2>
                <h2>Dr Ali Bazzi</h2>
                <h3>MW 12:00</h3>
            </div>
		</div> 
	);
}

export default Card;