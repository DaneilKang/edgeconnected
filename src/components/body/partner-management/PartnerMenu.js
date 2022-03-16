import { DialogOverlay, DialogContent } from '@reach/dialog';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Partner.module.css';

function PartnerMenu({totalPartnerCount}) { 
    const [showDialog, setShowDialog] = useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    return (
        <div className={styles.menu}>
            <div>
                <div className={styles.title}>Partner Management</div>
                <div className={styles.total_number}>Total Number of Partners : {totalPartnerCount}</div>
            </div>
            
            <div className={styles.button}>
                <button className={styles.button_business} onClick={open}>Add New Business</button>
                <button className={styles.button_user}>Add New User</button>
            </div>

            <div>
                <DialogOverlay 
                    isOpen={showDialog}
                    onDismiss={close} 
                    style={{
                        display:"flex", 
                        position:"absolute", 
                        top:"50px", 
                        left:"50px", 
                        width:"400px", 
                        height:"400px",
                        background: "hsla(0, 100%, 100%, 0.9)",
                    }}
                >
                    <DialogContent
                    style={{
                        border: "solid 1px hsla(0, 0%, 0%, 0.5)",
                        borderRadius: "10px",
                        boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)",
                    }}
                    >
                    <Outlet />
                    <button onClick={close}>CLOSE</button>
                    </DialogContent>
                </DialogOverlay>
            </div>
        </div>
    )
}


export default PartnerMenu;