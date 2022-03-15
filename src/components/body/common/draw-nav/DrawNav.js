import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../header/Header';
import Body from '../../Body';
import './DrawNav.css';

export default function DrawNav () {
    return (
        <div className='Drawer-nav'>
            <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
            <label for="drawer-toggle" id="drawer-toggle-label"></label>
                <nav id="drawer">
                    <ul>
                        <li id='list-title'>FLEET VIEW</li>
                        <li><a href="#">Commercial Fleet</a></li>
                        <li><a href="#">Advanced Fleet</a></li>
                        <li><Link to="/residential-fleet">Residential Fleet</Link></li>
                        <li id='list-title'>DEVICE MANAGEMENT</li>
                        <li><a href="#">Register Device</a></li>
                        <li><a href="#">Unassigned Device</a></li>
                        <li><a href="#">Activate SIM</a></li>
                        <li><a href="#">Retired Device</a></li>
                        <li id='list-title'>USER MANAGEMENT</li>
                        <li><Link to="/partner-management">Partner Management</Link></li>
                        <li id='list-title'>NETWORK MANAGEMENT</li>
                        <li><a href="#">Live Loading Map</a></li>
                        <li><a href="#">Network Aggregated</a></li>
                        <li id='list-title'>ADMIN CONFIGURATION</li>
                        <li><a href="#">Device Status</a></li>
                        <li><a href="#">Register New Business</a></li>
                        <li><a href="#">High Voltage Dashboard</a></li>
                        <li><a href="#">High Voltage Opportunities</a></li>
                    </ul>
                </nav>
            <div id="page-content">
                <Header />
                <Body />
            </div>
        </div>
    );
}