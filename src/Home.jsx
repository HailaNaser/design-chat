import React from 'react'
import Nav from './Nav'

 function Home() {
  return (
    <div> 
        <Nav></Nav>
        <div className="content">
            <div className="text">
                <h1>Chat messaging</h1>
                <p>You can use Chat directly if you have an account 
                  To exchange messages and collaborate with anyone you work with. You can use Chat to make 
                  To talk to others directly</p>
            </div>
         <div className="theImg">
            {/* <img src="https://img.freepik.com/free-vector/chat-conversation-mobile-phone-screen-tiny-people-group-persons-chatting-messenger-flat-vector-illustration-social-media-community-concept-banner-website-design-landing-web-page_74855-21724.jpg" alt="" /> */}
            {/* <img src="https://img.freepik.com/premium-photo/young-people-social-media-like-concept-flat-vector-illustration-daily-activities-working-ai-generated_705708-26385.jpg" alt="" /> */}
            <img src="https://img.freepik.com/premium-vector/vector-illustration-app-development-concept-with-people-doing-web-app-development_675567-4191.jpg" alt="" />
            {/* <img src="https://img.freepik.com/premium-vector/flat-customer-support-illustration_23-2148892450.jpg" alt="" /> */}
         </div>
            
        </div>
    </div>
  )
}

export default Home