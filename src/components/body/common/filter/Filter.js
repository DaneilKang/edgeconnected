import React from 'react';
import styles from './Filter.module.css';

function Filter({setSearchQuery, searchQuery}) {
    
    return (
        <div>
            <form>
                <input 
                    name="filter" 
                    placeholder="Filter *" 
                    type="text" 
                    value={searchQuery} 
                    width="100%" 
                    onChange={e=>setSearchQuery(e.target.value)}/>
            </form>
        </div>
    )
}

export default Filter;