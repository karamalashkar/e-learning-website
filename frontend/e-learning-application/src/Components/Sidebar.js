import "../styles/style.css";

function Sidebar({text}) {
	
	return (
		<div className="sidebar flex">
			<h1 className="title">{text}</h1>
            <div className="courses flex"></div>
		</div>
	);
}

export default Sidebar;