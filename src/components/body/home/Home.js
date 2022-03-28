import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export default function Home () {
    const {currentUserRole} = useContext(UserContext);
    const roleDetail = JSON.parse(localStorage.role);

    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                {currentUserRole ? <span className='text-orange-700'>{roleDetail.role_name.toUpperCase()} : {roleDetail.partner_name} Home</span> : ""}
            </h1>
        </div>
    );
}