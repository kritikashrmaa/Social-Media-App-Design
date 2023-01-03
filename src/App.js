import './style.scss';
import Login from './components/login/Login';
import { Route, RouterProvider, BrowserRouter as Router,createBrowserRouter,Outlet,Navigate} from 'react-router-dom' 
import Register from './components/register/Register';
import NavBar from './components/navBar/NavBar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Home from './components/home/Home'
import Profile from './components/profile/Profile'
import { useContext } from 'react';
import { DarkModeContext } from './components/context/darkModeContext';
import { AuthContext } from './components/context/AuthContext';
function App() {
 const {currentUser}=useContext(AuthContext);

  const { darkMode }=useContext(DarkModeContext);

  const Layout=()=>{
    return(
      <div className={`theme-${darkMode?"dark":"light"}`}>
        <NavBar/>
        <div style={{display:"flex"}}>
          <LeftBar/>     {/* navbar leftbar and right bar will 
                             always show only outlet will change*/}
          <div style={{flex:6}}>
              <Outlet/> 
          </div>
         
          <RightBar/>
        </div>
      </div>
    )
  };
 
  //if there is no current user we will be automatically re-directed to the login page
  const ProtectedRoute=({children})=>{ //here children is layout
    if(!currentUser){
      return <Navigate to="/login"/>;
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:(
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
      children:[
        {
        path:"/",
        element:<Home/>
        },
        {
            path:"/profile/:id",
            element:<Profile/>
        },
      ]
     
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
