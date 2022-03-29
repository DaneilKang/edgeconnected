import React from 'react';

function Filter({setSearchQuery, searchQuery}) {
    
    return (
        <div>
            <form style={{width:"100%"}}>
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