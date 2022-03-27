import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../header/Header';
import Body from '../../Body';
import './DrawNav.css';
import { UserContext } from '../../../context/UserContext';

import { useNavigate } from 'react-router-dom';


export default function DrawNav () {
    const {currentUserRole, logOut} = useContext(UserContext);
    const navigate = useNavigate();    
    const roleDetail = JSON.parse(localStorage.role);
    // const roleDetail = currentUserRole && JSON.parse(currentUserRole);
    const logoutClicked = () => {
        logOut();
        navigate('/');
        window.location.reload();
    }

    return (
        <div className='Drawer-nav'>
            <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
            <label htmlFor="drawer-toggle" id="drawer-toggle-label"></label>
                <nav id="drawer">
                    {
                        roleDetail ? 
                            (roleDetail.role_id === 1 ?
                            <ul> 
                                <li id='list-title'>FLEET VIEW</li>
                                <li><Link to="/residential-fleet">Residential Fleet</Link></li>
                                <li id='list-title'>DEVICE MANAGEMENT</li>
                                <li><Link to="/partner-management">Partner Management</Link></li>
                                <li><a href='#' onClick={logoutClicked}>LOGOUT</a></li>                            
                            </ul>
                            : roleDetail.role_id === 3 ?
                                <ul>
                                    <li id='list-title'>DEVICE MANAGEMENT</li>
                                    <li><Link to="/partner-management">Partner Management</Link></li>
                                    <li><a href='#' onClick={logoutClicked}>LOGOUT</a></li>    
                                </ul>
                                : roleDetail.role_id === 2 ?
                                    <ul>
                                        <li id='list-title'>FLEET VIEW</li>
                                        <li><Link to="/residential-fleet">Residential Fleet</Link></li>
                                        <li><a href='#' onClick={logoutClicked}>LOGOUT</a></li>
                                    </ul>
                                    :
                                    <ul>
                                        <li><a href='#' onClick={logoutClicked}>LOGOUT</a></li>
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