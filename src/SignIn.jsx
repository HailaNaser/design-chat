import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Home from './Home';
import Window from './Window';

 function SignIn() {
    const [namee, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate();

    const handleClick = ()=> {
        localStorage.setItem('thename' , namee)
        localStorage.setItem('theEmail' , email)
        localStorage.setItem('thePass' , pass)
        if(namee != "" && email != "" && pass != ""){
            navigate('/Window') 
        }
    }

  return (
    <div className='container-signin'>
        <div className='signin'>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/036/255/337/small_2x/sign-in-page-flat-design-concept-illustration-icon-account-login-user-login-abstract-metaphor-can-use-for-landing-page-mobile-app-ui-posters-free-vector.jpg" alt="" />
        <input type='text' placeholder='Enter your Name' value={namee} onChange={(e)=> setName(e.target.value)}/>
        <input type='email' placeholder='Enter your Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type='password' placeholder='Enter your password'value={pass} onChange={(e)=> setPass(e.target.value)}/>
        <button onClick={handleClick}>Click Here</button>
    </div>
    </div>

  )
}

export default SignIn