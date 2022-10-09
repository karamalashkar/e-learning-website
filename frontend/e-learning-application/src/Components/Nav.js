import "../styles/style.css";

function Nav() {
	
	return (
		<header>
			<h1>E-learning</h1>
			<nav>
				<a href="/course">Home</a>
				<a href="/instructor">Assignments</a>
				<a href="/student">Annoucements</a>
                <button className="logout">
                    Logout
                </button>
			</nav>
		</header>
	);
}

export default Nav;