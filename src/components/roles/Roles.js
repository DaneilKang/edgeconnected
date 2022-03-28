import React, { useState, useEffect, useContext } from "react";
import jwt from "jwt-decode";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "../context/UserContext";

const Roles = () => {
    const { logOut } = useContext(UserContext);
    const [roles, setRoles] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(localStorage.jwtToken) {
            const jwt_decode = jwt(localStorage.jwtToken);
            setRoles(jwt_decode.roles.sort((a,b) => a.role_id - b.role_id));
        }
        
    }, []);

    const selectedRole = (role) => {
        localStorage.setItem("role", JSON.stringify(role));
        navigate('/');
        window.location.reload();
    }

    return (
        <div className="flex justify-center">
            
            <div className="place-items-center m-4 border-2 rounded-lg w-80 drop-shadow-lg">
                <div className="h-15 text-2xl p-2">
                    Choose your role:
                </div>
                {roles.map((role,idx) => 
                    <Link to="/" key={idx} onClick={() => selectedRole(role)}>
                        <div className="bg-slate-300 p-3 m-1" >
                            {role.role_name.toUpperCase()} - {role.partner_name ? role.partner_name : role.site_name}
                        </div>
                    </Link>
                )}
                <Link to="/" onClick={logOut}>
                    <div className="bg-slate-600 p-3 m-1 text-blue-50">
                        LOGOUT
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Roles;