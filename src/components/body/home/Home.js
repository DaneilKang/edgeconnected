import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export default function Home () {
    const {currentUser, logOut} = useContext(UserContext);
    
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Edge Electron Admin Home
            </h1>
            {
                currentUser && <a href='/' onClick={logOut}>LOGOUT</a>
            }
            
        </div>
    );
}