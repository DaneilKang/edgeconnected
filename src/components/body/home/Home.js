import axios from 'axios';
import React from 'react';
import authService, { authHeader } from '../../login/auth.service';

const logoutClicked = () =>{
    authService.logout();
    window.location.href="/";
}

const getUser = async () => {
    console.log("authHeader: ", authHeader())
    if( authHeader() === {}) {
        return null;
    } 
    return await axios.get(process.env.REACT_APP_LOGIN_API_URL, {headers: authHeader() })
    
}

console.log("localStorage: ",localStorage.getItem('user'))

export default function Home () {
      
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Edge Electron Admin Home
            </h1>
            {/* {getUser()  && <button onClick={logoutClicked}>LOGOUT</button>} */}
            {localStorage.length >= 1  && <button onClick={logoutClicked}>LOGOUT</button>}
            
        </div>
    );
}