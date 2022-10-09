import "../styles/style.css";

function Navbar() {
	
	return (
		<header>
			<h1>E-learning</h1>
			<nav>
				<a href="/#">Courses</a>
				<a href="/#">Instructors</a>
				<a href="/#">Students</a>
                <button className="logout">
                    Logout
                </button>
			</nav>
		</header>
	);
}

export default Navbar;