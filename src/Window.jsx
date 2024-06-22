import React from 'react';
import ChatOne from './s2';
import  ChatTwo from './s1';
import { useState } from 'react';
import Signout from './Signout';
import Home from './Home';
import { Link, useNavigate } from "react-router-dom";


function Window() {
    const [msg , setMsg] = useState([]);
  return (
    <div>
    <Link to='/Home'>
    <Signout></Signout>
    </Link>
    <div className="container">
    <ChatTwo className='Amy' messge={msg} changeMsg={setMsg}></ChatTwo>
    <ChatOne className='john' messge={msg} changeMsg={setMsg}></ChatOne>
    </div>
    </div>
  )
}

export default  Window