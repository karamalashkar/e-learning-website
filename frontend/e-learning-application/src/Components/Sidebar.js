import "../styles/style.css";
import CourseBox from "./CourseBox.js";

function Sidebar({text}) {
	
	return (
		<div className="sidebar flex">
			<h1 className="title">{text}</h1>
            <div className="courses flex">
				<CourseBox></CourseBox>
			</div>
		</div>
	);
}

export default Sidebar;