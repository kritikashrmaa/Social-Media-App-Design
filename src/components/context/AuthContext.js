import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext=createContext();
export const AuthContextProvider=({children})=>{
     const [currentUser,setCurrentUser]=useState(
        JSON.parse(localStorage.getItem("user")) || null);

     const login=()=>{
       //
       setCurrentUser({
        id:1,
        name:"Kritika Sharma",
        profilePic:'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VybHklMjBoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
    });
};
     useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
     },[currentUser]); 

     return(
        <AuthContext.Provider value={{currentUser,login}}>
            {children}
        </AuthContext.Provider>
     );
};
