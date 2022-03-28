import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../header/Header';
import Body from '../../Body';
import './DrawNav.css';
import { UserContext } from '../../../context/UserContext';

import { useNavigate } from 'react-router-dom';


export default function DrawNav () {
    const {logOut, switchRole} = useContext(UserContext);
    const navigate = useNavigate();    
    const roleDetail = JSON.parse(localStorage.role);
    // const roleDetail = currentUserRole && JSON.parse(currentUserRole);
    const logoutClicked = () => {
        logOut();
        navigate('/');
        window.location.reload();
    }

    const switchRoleClicked = () => {
        switchRole();
        navigate('/');
        window.location.reload();
    }

    return (
        <div className='Drawer-nav'>
            <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
            <label htmlFor="drawer-toggle" id="drawer-toggle-label"></label>
                <nav id="drawer">
                    {
                        // 1 admin
                        // 2 user
                        // 3 installer
                        // 4 customer

                        roleDetail ? 
                            (roleDetail.role_id === 1 ?
                            <ul> 
                                <li id='list-title'>FLEET VIEW</li>
                                <li><Link to="/residential-fleet">Residential Fleet</Link></li>
                                <li id='list-title'>DEVICE MANAGEMENT</li>
                                <li><Link to="/partner-management">Partner Management</Link></li>
                                <li id='list-title'>ACCOUNT</li>
                                <li><Link to="" onClick={switchRoleClicked}>Switch Roles</Link></li>
                                <li><Link to="" onClick={logoutClicked}>Logout</Link></li>
                            </ul>
                            : (roleDetail.role_id === 2) || (roleDetail.role_id === 3) ?
                                // Not yet implemented, display fake tabs
                                <ul>
                                    <li id='list-title'>DEVICE MANAGEMENT</li>
                                    <li><Link to="">Manage Devices</Link></li>
                                    <li id='list-title'>ACCOUNT</li>
                                    <li><Link to="" onClick={switchRoleClicked}>Switch Roles</Link></li>
                                    <li><Link to="" onClick={logoutClicked}>Logout</Link></li>
                                </ul>
                                : roleDetail.role_id === 4 ?
                                    <ul>
                                        <li id='list-title'>FLEET VIEW</li>
                                        <li><Link to="/residential-fleet">Residential Fleet</Link></li>
                                        <li id='list-title'>ACCOUNT</li>
                                        <li><Link to="" onClick={switchRoleClicked}>Switch Roles</Link></li>
                                        <li><Link to="" onClick={logoutClicked}>Logout</Link></li>
                                    </ul>
                                    :
                                    // Unknown role
                                    <ul>
                                        <li id='list-title'>ACCOUNT</li>
                                        <li><Link to="" onClick={switchRoleClicked}>Switch Roles</Link></li>
                                        <li><Link to="" onClick={logoutClicked}>Logout</Link></li>
                                    </ul> 
                            )
                        : 
                        <ul>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    }
                </nav>
            <div id="page-content">
                <Header />
                <Body />
            </div>
        </div>
    );
}