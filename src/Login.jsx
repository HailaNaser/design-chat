import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Home from './Home';
import Window from './Window';

 function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const  handleClick = ()=> {
        if(localStorage.getItem("theEmail") == email && localStorage.getItem("thePass") == pass){
            navigate('/Window')
        }
    }
  return (
    <div className='container-login'>
      <div className='login'>
        <h2>USER LOGIN</h2>
        <input type='email' placeholder='Enter Your Email' onChange={(e)=> {setEmail(e.target.value)}}/>
        <input type='password' placeholder='Enter Your Password' onChange={(e)=> {setPass(e.target.value)}}/>
        <button onClick={handleClick}>CLICK HERE</button>
        <Link to ='/SignIn'>Register</Link>
    </div>
    <div className="theImg">
        <img src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-online-registration_516790-1807.jpg" alt="" />
    </div>
    </div>
  
  )
}

export default Login