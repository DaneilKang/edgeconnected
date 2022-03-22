import React from 'react';
import styles from '../AddNew.module.css';

function AddNewBusiness ({partners}) {
    return ( 
        <div>
            <div className={styles.container}>
                <div className={styles.title}>Add New Business</div>
                <div className={styles.wrapper}>
                    <div>
                        <select className={styles.role} name='role'>
                            <option value={null} selected>Role *</option>
                        {partners.map(partner => (                        
                            <option value={partner}>{partner}</option>
                        ))}
                        </select>
                    </div>
                    <div className={styles.name}>
                        <div>
                            <input type="text" placeholder="Name *"/>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <input type="email" placeholder="E-mail Address *"/>
                    </div>
                    <div className={styles.text}>
                        <input  type="number" placeholder="Phone *" />
                    </div>
                    <div className={styles.text}>
                        <input type="text" placeholder="Address *" />
                    </div>
                    <div className={styles.text}>
                        <input type="text" placeholder="Company Logo" />
                    </div>
                    <div className={styles.text}>
                        <input type="button" placeholder="Save And New"/>
                        <input type="button" placeholder="Save And Close"/>
                        <input type="button" placeholder="Close"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNewBusiness;