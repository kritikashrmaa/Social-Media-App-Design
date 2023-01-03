import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import './stories.scss'

export default function Stories() {
    const {currentUser}=useContext(AuthContext);
    const stories=[
        {
            id:1,
            name:"Shanaya",
            img:"https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWVzdGhldGljJTIwZmVtYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
        },
        {
            id:2,
            name:"Vrinda Oberoi",
            img:"https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZlbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
        },
        {
            id:3,
            name:"Bhavya Chauhan",
            img:"https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZlbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
        },
        {
            id:4,
            name:"Isha Kohli",
            img:"https://plus.unsplash.com/premium_photo-1661475871391-cc7652c61b4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZlbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
        },

    ]
  return (
    <div className='stories'>
       <div className="story">
             <img src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VybHklMjBoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
             <span>{currentUser.name}</span>
             <button>+</button>
          </div> 
      {stories.map(story=>(
          <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
       </div>
      ))}
    </div>
  )
}
