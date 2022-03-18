import React from 'react';
import styles from './Partner.module.css';

function PartnerMenu({totalPartnerCount, setShowModal}) { 

    return (
        <div className={styles.menu}>
            <div>
                <div className={styles.title}>Partner Management</div>
                <div className={styles.total_number}>Total Number of Partners : {totalPartnerCount}</div>
            </div>
            
            <div className={styles.button}>
                <button className={styles.button_business} onClick={() => setShowModal(true)}>Add New Business</button>
                <button className={styles.button_user}>Add New User</button>
            </div>
            
        </div>
    )
}


export default PartnerMenu;