import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './AddNewBusiness.module.css';

function AddNewBusiness ({setShowModal}) {
    
    const {register, handleSubmit} = useForm();
        
    const formDataField = [  {'formTitle':'Name', 'formName':'name', 'formType':'text', 'isNeeded':true}, 
                        {'formTitle':'Phone', 'formName':'phone_number', 'formType':'text', 'isNeeded':true}, 
                        {'formTitle':'Address', 'formName':'address', 'formType':'text', 'isNeeded':true}, 
                        {'formTitle':'City', 'formName':'city', 'formType':'text', 'isNeeded':false}, 
                        {'formTitle':'Postcode', 'formName':'post_code', 'formType':'text', 'isNeeded':false}, 
                        {'formTitle':'State', 'formName':'state', 'formType':'text', 'isNeeded':false},
                        {'formTitle':'Country', 'formName':'country', 'formType':'text', 'isNeeded':false}];
    
    const onSubmit = (data) => {

        const newData = {...data, admin_id: JSON.parse(localStorage.role).role_id}; // add admin_id to data
            
        // get the authendication token
        const USER_TOKEN = localStorage.getItem('jwtToken');
        // send post request to server
        const url = 'https://u8gmw4ohr6.execute-api.ap-southeast-2.amazonaws.com/test/add-new-partner';
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': USER_TOKEN
            },
            body: JSON.stringify(newData)
        };

        console.log("data : ", newData);
        fetch(url, config)
            .then(response => response.json())
            .then(newData => console.log(newData));

        setShowModal(false);
    }
    
    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <div className={styles.title}>Register Business</div>
                <div className={styles.form}>
                    <div className={styles.name}>
                        {formDataField.map((field, index) => (
                            <>
                                <div className={styles.col_25}><label htmlFor={field.formName}>{field.formTitle}</label></div>
                                <div><input {...register(field.formName, { required: true })} type={field.formType} id={index} placeholder={field.formName}/></div>
                            </>
                            )
                        )}                   
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.button} onClick={onSubmit}>Add New</button>
                        <button className={styles.button} onClick={()=>setShowModal(false)}>Close</button>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default AddNewBusiness;