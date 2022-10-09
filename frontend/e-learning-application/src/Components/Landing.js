import React from "react";

import "../styles/style.css";


function Landing() {
	return (
        <>
		<div>
			<h1 className="login-title">E-learning System</h1>
            <div className="landing">
                <img src="eLearning.jpg"></img>
                <div className="login flex">
                    <h1>LOGIN</h1>
                    <input type='text' placeholder="Email" className="input sign"></input>
                    <input type='password' placeholder="Password" className="input sign"></input>
                    <button className="sign-btn">
                        LOGIN
                    </button>
                </div>
            </div>    
		</div>
        </>
	);
}

export default Landing;