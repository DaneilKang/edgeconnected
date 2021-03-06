import React from 'react';
import ResidentialFleet from "./residential-fleet/ResidentialFleet";
import styles from './Body.module.css';
import PartnerManagement from './partner-management/PartnerManagement';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import AddNewUser from './partner-management/add-new-user/AddNewUser';
import LoginForm from '../login/LoginForm';
import AddNewBusiness from './partner-management/add-new-business/AddNewBusiness';

function Body () {
    
    return (
        <div className={styles.container}>
            <Routes>
                    <Route path='partner-management/*' element={<PartnerManagement/>}>
                        <Route path='add-new-user/*' element={<AddNewUser/>}/>
                        <Route path='add-new-business/*' element={<AddNewBusiness/>}/>
                    </Route>
                    <Route path='residential-fleet/*' element={<ResidentialFleet/>}/>
                    <Route path='/*' element={<Home/>} />
                    <Route path='login/*' element={<LoginForm/>} />
            </Routes>
        </div>
    );
}

export default Body;