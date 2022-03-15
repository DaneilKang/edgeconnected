import React from 'react';
import ResidentialFleet from "./residential-fleet/ResidentialFleet";
import styles from './Body.module.css';
import PartnerManagement from './partner-management/PartnerManagement';
import { Route, Routes } from 'react-router-dom';
// import DoughnutChart from "./residential-fleet/analytics/DoughnutChart";
// import DashBoard from "./residential-fleet/analytics/Dashboard";

function Body () {
    return (
        <div className={styles.container}>
            <Routes>
                    <Route path='partner-management' element={<PartnerManagement/>}/>
                    <Route path='residential-fleet' element={<ResidentialFleet/>}/>
            </Routes>
            {/* <DoughnutChart /> */}
            {/* <DashBoard /> */}
        </div>
    );
}

export default Body;