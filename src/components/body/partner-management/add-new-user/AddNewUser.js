import React from 'react';
import './AddNewUser.css';

function AddNewUser () {
    return <div>
        <div className="container">
           <div>Add New User</div>
           
               <div>
                   <select >Partner</select>
               </div>
               <div>
                   <select>Role</select>
               </div>
               <div className="name">
                   <div>
                       <input type="text" placeholder="First Name *"/>
                   </div>
                   <div>
                       <input type="text" placeholder="Last Name *"/>
                   </div>
               </div>
               <div>
                   <input type="email" placeholder="E-mail Address *"/>
               </div>
               <div>
                   <input type="number" placeholder="Phone *" />
               </div>
               <div>
                   <input type="button" placeholder="Save And New"/>
                   <input type="button" placeholder="Save And Close"/>
                   <input type="button" placeholder="Close"/>
               </div>
        </div>
        
    </div>;
}

export default AddNewUser;