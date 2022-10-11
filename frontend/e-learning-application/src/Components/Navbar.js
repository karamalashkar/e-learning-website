import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function Navbar() {
	const navigate = useNavigate();

	const logout=()=>{
		localStorage.clear();
		navigate('/');
	}
	return (
		<header>
			<h1>E-learning</h1>
			<nav>
				<a href="/course">Courses</a>
				<a href="/instructor">Instructors</a>
				<a href="/student">Students</a>
                <button className="logout" onClick={logout}>
                    Logout
                </button>
			</nav>
		</header>
	);
}

export default Navbar;