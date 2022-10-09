import "../styles/style.css";

function Navbar() {
	
	return (
		<header>
			<h1>E-learning</h1>
			<nav>
				<a href="/course">Courses</a>
				<a href="/instructor">Instructors</a>
				<a href="/student">Students</a>
                <button className="logout">
                    Logout
                </button>
			</nav>
		</header>
	);
}

export default Navbar;