import React from 'react';
import styles from './Partner.module.css';

function PartnerMenu({totalPartnerCount, setShowModal, setModalTitle}) { 
    const openModal = (modalTitle) => {
        setShowModal(true);
        setModalTitle(modalTitle);
    };

    return (
        <div className={styles.menu}>
            <div>
                <div className={styles.title}>Partner Management</div>
                <div className={styles.total_number}>Total Number of Partners : {totalPartnerCount}</div>
            </div>
            
            <div className={styles.button}>
                <button className={styles.button_business} onClick={() => openModal("business")}>Add New Business</button>
                <button className={styles.button_user} onClick={() => openModal("user")}>Add New User</button>
            </div>
            
        </div>
    )
}


export default PartnerMenu;