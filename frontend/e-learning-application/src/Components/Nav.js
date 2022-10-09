import "../styles/style.css";

function Nav({link,link1,link2}) {
	
	return (
		<header>
			<h1>E-learning</h1>
			<nav>
				<a href={link}>Home</a>
				<a href={link1}>Assignments</a>
				<a href={link2}>Annoucements</a>
                <button className="logout">
                    Logout
                </button>
			</nav>
		</header>
	);
}

export default Nav;