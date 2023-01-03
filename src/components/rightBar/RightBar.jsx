import React from 'react'
import './rightbar.scss'
export default function RightBar() {
  return (
    <div className='RightBar'>
       <div className="container">
          <div className="item">
            <span>Suggestions For You</span>
            <div className="user">
              <div className="userInfo">
                <img src="https://th.bing.com/th/id/OIP.AUA0uCezRtIpTw8YHXxl-gHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                <span>Kritika Sharma</span>
              </div>
              <div className="buttons">
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>

            <div className="user">
              <div className="userInfo">
                <img src="https://th.bing.com/th/id/OIP.AUA0uCezRtIpTw8YHXxl-gHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                <span>Vrinda Oberoi</span>
              </div>
              <div className="buttons">
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>
          </div>
          <div className="item">
             <span>Latest Activities</span>
             <div className="user">
              <div className="userInfo">
                <img src="https://th.bing.com/th/id/OIP.AUA0uCezRtIpTw8YHXxl-gHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                <p>
                <span>Vrinda Oberoi</span> Liked Your Photo
                </p>
                <span>1 min ago</span>
              </div>
             

              
            </div>
            <div className="user">
              <div className="userInfo">
                <img src="https://th.bing.com/th/id/OIP.AUA0uCezRtIpTw8YHXxl-gHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                <p>
                <span>Bhavya Chauhan</span> Posted a New Picture
                </p>
                <span>1 hr ago</span>
              </div>
              

              
            </div>
            <div className="user">
              <div className="userInfo">
                <img src="https://th.bing.com/th/id/OIP.AUA0uCezRtIpTw8YHXxl-gHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                <p>
                <span>Isha Kohli</span> Commented on your picture
                </p>
                <span>3 hrs ago</span>
              </div>
              

              
            </div>
          </div>
          <div className="item">
             <span>Online Friends</span>
             <div className="user">
              <div className="userInfo">
                <img src="https://th.bing.com/th/id/OIP.AUA0uCezRtIpTw8YHXxl-gHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                <div className='online'/>
                <span>Isha Kohli</span> 
               
                
              </div>
              

              
            </div>
          </div>
       </div>
    </div>
  )
}
