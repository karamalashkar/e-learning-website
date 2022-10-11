import React from "react";
import "../styles/style.css";
import Card from "./Card";

function ShowCourse({courses}) {
        return (
                <div className="show">
                {courses.map((course) => {
                return (
                <Card
                title={course.title}
                name={course.name}
                time={course.time}/>
                );
                })}
        </div>
	);
}

export default ShowCourse;