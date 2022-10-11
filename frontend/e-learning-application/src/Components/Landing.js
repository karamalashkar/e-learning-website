import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";


function Landing() {
    const navigate = useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const onSubmit=async (e)=>{
        e.preventDefault()
        if(!email || !password){
            alert('Fill in the form')
            return;
        }
        const post={email,password}
        try {
            const res=await axios.post('http://127.0.0.1:8000/api/v1/login', post)
            const type=res.data.data.type;
            localStorage.setItem('id',res.data.data._id);
            localStorage.setItem('type',type);
            if(type=='1'){
                navigate("/course");
            }
            else if(type=='2'){
                navigate("/instructor_home");
            }
            else if(type=='3'){
                navigate("/student_home");
            }
            
          } catch (e) {
            alert(e)
          }
          setEmail("");
          setPassword("");
    }
	return (
        <>
		<div>
			<h1 className="login-title">E-learning System</h1>
            <div className="landing">
                <img src="eLearning.jpg"></img>
                <div className="login flex">
                    <h1>LOGIN</h1>
                    <form onSubmit={onSubmit}>
                    <input type='email'
                    placeholder="Email"
                    className="input sign"
                    onChange={(event)=>{
                        setEmail(event.target.value)
                    }}
                    value={email}></input>

                    <input type='password'
                    placeholder="Password"
                    className="input sign"
                    onChange={(event)=>{
                        setPassword(event.target.value)
                    }}
                    value={password}></input>
                    <button type={"submit"} className="sign-btn">
                        LOGIN
                    </button>
                    </form>
                </div>
            </div>    
		</div>
        </>
	);
}

export default Landing;