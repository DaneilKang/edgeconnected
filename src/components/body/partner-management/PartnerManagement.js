import React, { useState } from 'react';
import Filter from '../common/filter/Filter';
import PartnerList from './PartnerList';
import PartnerMenu from './PartnerMenu';


export default function PartnerManagement () {
    const [totalPartnerCount, setTotalPartnerCount] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div>
            <div>
                    <PartnerMenu totalPartnerCount={totalPartnerCount}/>
                </div>
            
                <div>
                    <Filter 
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                </div>
                
                <div>
                    <PartnerList 
                        setTotalPartnerCount={setTotalPartnerCount} 
                        searchQuery={searchQuery} 
                    />
                </div>
        </div>
    );
}