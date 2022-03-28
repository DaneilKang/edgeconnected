import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './AddNewBusiness.module.css';

function AddNewBusiness ({setShowModal}) {

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
            
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
            body: JSON.stringify(data)
        };

        console.log(data);
        fetch(url, config)
            .then(response => response.json())
            .then(data => console.log(data));

        setShowModal(false);
    }
    
    const fake_roles = [{'role_id': 1, 'role_name': 'Wholesale Distributor'},
                        {'role_id': 2, 'role_name': 'Partner'},
                        {'role_id': 3, 'role_name': 'Installer'},
                        {'role_id': 4, 'role_name': 'Partner network'}];
    
    const formDataField = [  {'formTitle':'Name', 'formName':'name', 'formType':'text', 'isNeeded':true}, 
                        {'formTitle':'Email', 'formName':'email', 'formType':'email', 'isNeeded':true}, 
                        {'formTitle':'Phone', 'formName':'phone', 'formType':'number', 'isNeeded':true}, 
                        {'formTitle':'Address', 'formName':'address', 'formType':'text', 'isNeeded':true}, 
                        {'formTitle':'Company Logo', 'formName':'company_logo', 'formType':'text', 'isNeeded':false}, 
                        {'formTitle':'Website', 'formName':'website', 'formType':'text', 'isNeeded':false}, 
                        {'formTitle':'Customer Service Email', 'formName':'customer_service_email', 'formType':'email', 'isNeeded':false}, 
                        {'formTitle':'Customer Service Phone', 'formName':'customer_service_phone', 'formType':'number', 'isNeeded':false}, 
                        {'formTitle':'Customer Service Url', 'formName':'customer_service_url', 'formType':'text', 'isNeeded':false}, 
                        {'formTitle':'Partner Rep Email', 'formName':'partner_rep_email', 'formType':'text', 'isNeeded':false}, 
                        {'formTitle':'Memo', 'formName':'memo', 'formType':'text', 'isNeeded':false}, 
                        {'formTitle':'Profile Description', 'formName':'profile_description', 'formType':'text', 'isNeeded':false}];    
    
    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <div className={styles.title}>Register Business</div>
                <div className={styles.form}>
                    <div>
                        <label htmlFor="role">Role</label>
                        <select className={styles.role} name='role' id='role' {...register("role", { required: true })}>
                                <option value="" disabled defaultValue>Select Role</option>
                            {fake_roles.map((role, index) => (                        
                                <option id={index} value={role.role_id}>{role.role_name}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.name}>
                        {formDataField.map((field, index) => (
                            <>
                                <div><label htmlFor={field.formName}>{field.formTitle}</label></div>
                                <div><input {...register(field.formName, { required: true })} type={field.formType} id={index} placeholder={field.formName}/></div>
                            </>
                            )
                        )}                   
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={onSubmit}>Add New</button>
                    <button className={styles.button} onClick={()=>setShowModal(false)}>Close</button>
                </div>
            </div>
        </form>
    );
}
export default AddNewBusiness;