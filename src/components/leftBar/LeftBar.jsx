import React, { useContext } from 'react'
import './leftbar.scss';
import friends from '../images/friends.jpg'
import groups from '../images/groups.jpg'
import marketplace from '../images/market.jpg'
import play from '../images/play.jpg'
import memories from '../images/memories.jpg'
import user from '../images/user.jpg'
import events from '../images/events.jpg'
import gaming from '../images/gaming.jpg'
import gallery from '../images/gallery.jpg'
import videos from '../images/videos.jpg'
import messages from '../images/messages.jpg'
import fund from '../images/fund.jpg'
import tut from '../images/tut.jpg'
import course from '../images/course.jpg'
import { AuthContext } from '../context/AuthContext';
export default function LeftBar() {
  const {currentUser}=useContext(AuthContext);
  return (
    <div className='LeftBar'>
       <div className="container">
       <div className="menu">
             <span>Your shortcuts</span>
             <div className="item">
            <img src={user} alt=""/>
            <span>{currentUser.name}</span>
            </div>
             <div className="item">
            <img src={friends} alt=""/>
            <span>Friends</span>
            </div>
            <div className="item">
            <img src={groups} alt=""/>
            <span>Groups</span>
            </div>
            <div className="item">
            <img src={marketplace} alt=""/>
            <span>MarketPlace</span>
            </div>
            <div className="item">
            <img src={play} alt=""/>
            <span>Watch</span>
            </div>
            <div className="item">
            <img src={memories} alt=""/>
            <span>Memories</span>
            </div>
          </div>
          <hr/>
          <div className="menu">
            <div className="item">
            <img src={events} alt=""/>
            <span>Events</span>
            </div>
            <div className="item">
            <img src={gaming} alt=""/>
            <span>Gaming</span>
            </div>
            <div className="item">
            <img src={gallery} alt=""/>
            <span>Gallery</span>
            </div>
            <div className="item">
            <img src={videos} alt=""/>
            <span>Videos</span>
            </div>
            <div className="item">
            <img src={messages} alt=""/>
            <span>Messages</span>
            </div>
          </div>
          <hr />
          <div className="menu">
             <span>Others</span>
             <div className="item">
            <img src={fund} alt=""/>
            <span>Fundraiser</span>
            </div>
            <div className="item">
            <img src={tut} alt=""/>
            <span>Tutorials</span>
            </div>
            <div className="item">
            <img src={course} alt=""/>
            <span>Courses</span>
            </div>
          </div>
       </div>
    </div>
  )
}
