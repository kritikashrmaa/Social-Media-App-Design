import './comments.scss'
import { useContext } from "react";
import {AuthContext} from '../context/AuthContext'
export default function Comments() {
    const { currentUser } = useContext(AuthContext);
    const comments = [
      {
        id: 2,
        name: "Vrinda Oberoi",
        userId: 2,
        profilePic:
          "https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZlbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
        desc: "Nice Picture Kritika",
      },
      {
        id: 3,
        name: "Bhavya Chauhan",
        userId: 3,
        profilePic:
          "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZlbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
        desc: "Loving your Energy 😄",
        
      },
      ];
  return (
    <div className='comments'>
        <div className="write">
        <img src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VybHklMjBoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
       {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  )
}
