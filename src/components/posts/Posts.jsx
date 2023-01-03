import Post from '../post/Post';
import './posts.scss'

export default function Posts() {
  const posts = [
    {
      id: 1,
      name: "Kritika Sharma",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VybHklMjBoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      desc: "Having the Time of My life",
      img: "https://images.unsplash.com/flagged/photo-1580820258381-20c91a156841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3VybHklMjBoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 2,
      name: "Vrinda Oberoi",
      userId: 2,
      profilePic:
        "https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZlbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      desc: "Being Close to Nature will always bring me Peace",
      img:"https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
    },
    {
      id: 3,
      name: "Bhavya Chauhan",
      userId: 3,
      profilePic:
        "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZlbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      desc: "Just completed the Data Structures and Algo course from Udemy.It was the best experience ever",
      
    },
    {
      id: 4,
      name: "Isha Kohli",
      userId: 4,
      profilePic:
        "https://plus.unsplash.com/premium_photo-1661475871391-cc7652c61b4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZlbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      desc: "Do rate my new Coding Setup",
      img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
    },
    {
      id: 5,
      name: "Shanaya",
      userId: 5,
      profilePic:
        "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWVzdGhldGljJTIwZmVtYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      desc:"Work Mode on",
      img:"https://images.unsplash.com/photo-1665686307516-1915b9616526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZlbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
    },
    {
      id: 6,
      name: "Rahul Gupta",
      userId: 6,
      profilePic:
        "https://images.unsplash.com/photo-1474031317822-f51f48735ddd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWVzdGhldGljJTIwbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      desc: " ",
      img:"https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
    },
  ];
  return (
    <div className='posts'>
       {posts.map(post=>(
            <Post post={post} key={post.id}/>
       ))}
    </div>
  )
}
