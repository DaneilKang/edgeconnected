import React, { useState, useEffect, useContext } from "react";
import jwt from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/UserContext";

const Roles = () => {
    const { logOut } = useContext(UserContext);
    const [roles, setRoles] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(localStorage.jwtToken) {
            const jwt_decode = jwt(localStorage.jwtToken);
            setRoles(jwt_decode.roles);
        }
        
    }, []);

    const selectedRole = (role) => {
        localStorage.setItem("role", JSON.stringify(role));
        
        navigate("/");
    }

    return (
        <div className="flex justify-center">
            
            <div className="place-items-center m-10 border-2 w-80 h-80 drop-shadow-lg">
                <div className="h-20 text-2xl p-3">
                    Choose your role:
                </div>
                {roles.map((role,idx) => 
                    <div className="bg-slate-300 p-3 m-1" key={idx}>
                        <a href="/"  onClick={() => selectedRole(role)}>
                            {role.role_name.toUpperCase()} - {role.partner_name}
                        </a>
                    </div>
                )}
                <div className="bg-slate-300 p-3 m-1 text-blue-50">
                    <a href="/" onClick={logOut}>LOGOUT</a>
                </div>
            </div>
        </div>
    );
}

export default Roles;