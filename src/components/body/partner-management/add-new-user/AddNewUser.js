import React, { useRef } from 'react';
import styles from './AddNewUser.module.css';

function AddNewUser ({partners, setShowModal}) {
    const inputPartner = useRef(null);
    const inputRole = useRef(null);
    const inputFirstName = useRef(null);
    const inputLastName = useRef(null);
    const inputEmail = useRef(null);
    const inputPassword = useRef(null);
    const inputPhone = useRef(null);
    const fake_roles = [{'role_id': 1, 'role_name': 'admin'},
                        {'role_id': 2, 'role_name': 'user'},
                        {'role_id': 3, 'role_name': 'installer'},
                        {'role_id': 4, 'role_name': 'customer'}];
    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            partner_id: inputPartner.current.value,
            role_id: inputRole.current.value,
            first_name: inputFirstName.current.value,
            last_name: inputLastName.current.value,
            email: inputEmail.current.value,
            password: inputPassword.current.value,
            phone_number: inputPhone.current.value
        };
        
        // get the authendication token
        const USER_TOKEN = localStorage.getItem('jwtToken');
        // send post request to server
        const url = 'https://u8gmw4ohr6.execute-api.ap-southeast-2.amazonaws.com/test/add-new-user';
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': USER_TOKEN
            },
            body: JSON.stringify(data)
        };

        fetch(url, config)
            .then(response => response.json())
            .then(data => console.log(data));
        setShowModal(false);
    }
    return ( 
        <form className={styles.form}>
            <div className={styles.container}>
                <div className={styles.title}>Add New User</div>
                <div className={styles.form}>
                    <div>
                        <label htmlFor="partner">Partner</label>
                        <select ref={inputPartner} className={styles.partner} name='partner' id='partner' required>
                            <option value="" disabled selected>Select Partner</option>
                        {partners.map(partner => (                        
                            <option value={partner.partner_id}>{partner.name}</option>
                        ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="role">Role</label>
                        <select ref={inputRole} className={styles.role} name='role' id='role' required>
                                <option value="" disabled selected>Select Role</option>
                            {fake_roles.map(role => (                        
                                <option value={role.role_id}>{role.role_name}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.name}>
                        <div><label htmlFor="first-name">First Name</label></div>
                        <div><input ref={inputFirstName} type="text" id="first-name" placeholder="John"/></div>
                        <div><label htmlFor="last-name">Last Name</label></div>
                        <div><input ref={inputLastName} type="text" id="last-name" placeholder="Smith"/></div>
                        <div><label htmlFor="email">Email</label></div>
                        <div><input ref={inputEmail} id='email' type="email" placeholder="example@example.com"/></div>
                        <div><label htmlFor="password">Password</label></div>
                        <div><input ref={inputPassword} id='password' type="password" placeholder="********"/></div>
                        <div><label htmlFor="phone">Phone</label></div>
                        <div><input ref={inputPhone} id='phone' type="tel" placeholder="0412345678" /></div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={onSubmit}>Add New User</button>
                    <button className={styles.button} onClick={()=>setShowModal(false)}>Close</button>
                </div>
            </div>
        </form>
    );
}
export default AddNewUser;