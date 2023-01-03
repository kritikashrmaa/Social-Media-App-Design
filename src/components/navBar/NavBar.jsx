import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import {Link} from 'react-router-dom';
import './NavBar.scss'
import Home from '../home/Home';
import { DarkModeContext } from '../context/darkModeContext';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';



export default function NavBar() {

   const {toggle,darkMode}=useContext(DarkModeContext);
   const {currentUser}=useContext(AuthContext);
  return (
    <div className='NavBar'>
      <div className="left">
         <Link to="/" style={{textDecoration:"none"}}>
        <span>Plonk!</span>
        </Link>
        <HomeIcon/>
        {darkMode ? <LightModeIcon onClick={toggle}/>:<DarkModeIcon onClick={toggle}/>}
        <GridViewOutlinedIcon/>
         <div className="search">
            <SearchOutlinedIcon/>
            <input type="text" placeholder='Search...'/>
         </div>
      </div>
      <div className="right">
         <PersonOutlineOutlinedIcon/>
         <EmailOutlinedIcon/>
         <NotificationAddOutlinedIcon/>
         <div className="user">
            <img src="https://th.bing.com/th/id/OIP.Cl56H6WgxJ8npVqyhefTdQHaHa?w=216&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            <span>{currentUser.name}</span>
         </div>
      </div>
    </div>
  )
}
