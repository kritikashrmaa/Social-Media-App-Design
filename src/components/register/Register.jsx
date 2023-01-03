import React from 'react';
import './register.scss';
import {Link} from 'react-router-dom';
export default function Register() {
  return (
    <div className='register'>
        <div className="card">
        <div className="left">
          <h1>Plonk!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis officiis veniam provident quod, 
            facere modi aliquid corporis? Nostrum nemo deserunt placeat, maiores et voluptas omnis incidunt consequuntur vitae aliquid?</p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          
          <h1>Register</h1>
          <form>
             <input type="text" placeholder='Username' />
             <input type="email" placeholder='Email' />
             <input type="password" placeholder='Password' />
             <input type="text" placeholder='Name' />
             <button>Register</button>
          </form>
        </div>
       </div>
    </div>
  )
}
