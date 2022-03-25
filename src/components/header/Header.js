import React, {useContext} from 'react';
import styles from './Header.module.css';
import {UserContext} from '../context/UserContext';

const getCurrentTime = () => {
    
    // add zero before number when number is less than 10 
    const addZero = (num) => {
        return num < 10 ? '0' + num : num;
    }

    const currentDateTime = new Date();
    let month = currentDateTime.toLocaleString('default', {month:'long'});
    let day = addZero(currentDateTime.getDate());
    let hour = addZero(currentDateTime.getHours());
    let hour12 = hour <=12 ? hour : hour - 12;
    let minite = addZero(currentDateTime.getMinutes());
    let amPm = hour <= 12 ? 'am' : 'pm';

    return `${hour12}:${minite} ${amPm} ${day} ${month}`;
}

function Header() {
    const {currentUser, currentUserRole, logOut} = useContext(UserContext);
    const roleDetail = JSON.parse(localStorage.role);

    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                <img src='https://edgeconnected.com/manage/assets/images/pages/edge-logo.png' alt="logo" width="230px"/>
            </div>
            <div className={styles.welcome}>
                <div className={styles.item}>
                    <div className={styles.msg}>Welcome Edge {roleDetail.role_name.toUpperCase()}</div>
                    <div className={styles.date}>{getCurrentTime()}</div>
                </div>
                <div className={styles.icon}>
                    <i className="fa-solid fa-user"></i>
                </div>
            </div>
        </nav>
    )    
}


export default Header;