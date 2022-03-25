import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../header/Header';
import Body from '../../Body';
import './DrawNav.css';
import { UserContext } from '../../../context/UserContext';

export default function DrawNav () {
    const {currentUserRole, logOut} = useContext(UserContext);
    return (
        <div className='Drawer-nav'>
            <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
            <label htmlFor="drawer-toggle" id="drawer-toggle-label"></label>
                <nav id="drawer">
                    {
                        currentUserRole ? 
                            (currentUserRole.role_id === '1' ?
                            <ul> 
                                <li id='list-title'>FLEET VIEW</li>
                                <li>Commercial Fleet</li>
                                <li><a href='/' onClick={logOut}>LOGOUT</a></li>
                                <li><Link to="/residential-fleet">Residential Fleet</Link></li>
                                <li id='list-title'>DEVICE MANAGEMENT</li>
                                <li>Register Device</li>
                                <li><Link to="/partner-management">Partner Management</Link></li>
                                <li>Unassigned Device</li>
                                <li>Activate SIM</li>
                                <li>Retired Device</li>
                                <li id='list-title'>USER MANAGEMENT</li>
                                <li id='list-title'>NETWORK MANAGEMENT</li>
                                <li>Live Loading Map</li>
                                <li>Network Aggregated</li>
                                <li id='list-title'>ADMIN CONFIGURATION</li>
                                <li>Device Status</li>
                                <li>Register New Business</li>
                                <li>High Voltage Dashboard</li>
                                <li>High Voltage Opportunities</li>
                            </ul>
                            : currentUserRole.role_id === '3' ?
                                <ul>
                                    <li><a href='/' onClick={logOut}>LOGOUT</a></li>
                                    <li id='list-title'>DEVICE MANAGEMENT</li>
                                    <li>Register Device</li>
                                    <li>Unassigned Device</li>
                                    <li>Activate SIM</li>
                                    <li>Retired Device</li>
                                </ul>
                                : currentUserRole.role_id === '2' ?
                                    <ul>
                                        <li><a href='/' onClick={logOut}>LOGOUT</a></li>
                                        <li><Link to="/partner-management">Partner Management</Link></li>
                                    </ul>
                                    :
                                    <ul>
                                        <li><a href='/' onClick={logOut}>LOGOUT</a></li>
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