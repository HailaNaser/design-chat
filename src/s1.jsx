import React, { useState , useEffect } from 'react';
// import React from 'react'

 function ChatTwo(props) {
    const [text , setText] = useState("");
  
    const handleClick = () => {
     const newMsge = { text, className: props.className };
     props.changeMsg([...props.messge.slice(-9), newMsge]);
      setText("");
    };

    return (
      <div className='right'>
        <div className="header">
          <div className="img">
          <div className="battaria">
          <i className="fa-solid fa-battery-three-quarters"></i>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06GG6U1z8vUT-Xt6lDNBlK8OG0NYPsYe2sg&s" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPC8dp8h4bd4wQiQwX8hz5qyCdi_H59kh9FaINvpN3zW2XeHAK_MrlAr_fQIU_Og1KIe8&usqp=CAU" alt="" />  
            </div>
            <div className="avatar">
            <i className="fa-solid fa-signal"></i>
            <i className="fa-solid fa-wifi"></i>
              <img className='avtr' src="https://formationepgv.com/wp-content/uploads/2020/11/avatar-femme-brune-300x300.png" alt="" />
              {/* <img src="https://w1.pngwing.com/pngs/117/64/png-transparent-equals-sign-lessthan-sign-point-number-greaterthan-sign-approximation-mathematics-angle.png" alt="" /> */}
            </div>
          </div>
          
      <div className={`form ${props.className}`}>
      <div className="hidden">
          {props.messge.slice(-10).map((item , index)=> {
             return <div key={index} className={item.className}>
              {item.text}</div>
          })}
            </div>
          <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
          <button type="submit" onClick={handleClick}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQg-UUQE7KhpP-mCdwd-MFgLeFODSqAumMpw&s" alt="" /></button>
          </div>
  </div>
)
}


export default ChatTwo



