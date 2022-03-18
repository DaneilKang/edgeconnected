import React from 'react';
import styles from './AddNewUser.module.css';

function AddNewUser ({partners}) {
    return ( 
        <div>
            <div className={styles.container}>
                <div className={styles.title}>Add New User</div>
                <div>
                    <select className={styles.partner} name='partner'>
                        <option value={null} selected>Partner *</option>
                    {partners.map(partner => (                        
                        <option value={partner}>{partner}</option>
                    ))}
                    </select>
                </div>
                <div className={styles.role}>
                    <select>Role</select>
                </div>
                <div className={styles.name}>
                    <div>
                        <input type="text" placeholder="First Name *"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Last Name *"/>
                    </div>
                </div>
                <div>
                    <input  className={styles.email} type="email" placeholder="E-mail Address *"/>
                </div>
                <div>
                    <input  className={styles.phone} type="number" placeholder="Phone *" />
                </div>
                <div>
                    <input type="button" placeholder="Save And New"/>
                    <input type="button" placeholder="Save And Close"/>
                    <input type="button" placeholder="Close"/>
                </div>
            </div>
        </div>
    );
}

export default AddNewUser;