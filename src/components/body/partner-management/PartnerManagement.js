import React, { useState } from 'react';
import Filter from '../common/filter/Filter';
import PartnerList from './PartnerList';
import PartnerMenu from './PartnerMenu';


export default function PartnerManagement () {
    const [totalPartnerCount, setTotalPartnerCount] = useState(0);
    const [showModal,setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [modalTitle, setModalTitle] = useState(null);
    const [partnerLists, setPartnerLists] = useState([]);

    return (
        <div>
            <div>
                <PartnerMenu 
                    totalPartnerCount={totalPartnerCount} 
                    setShowModal={setShowModal} 
                    setModalTitle={setModalTitle} 
                    partnerLists={partnerLists}
                />
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
                    showModal={showModal}
                    setShowModal={setShowModal}
                    modalTitle={modalTitle}
                    setPartnerLists={setPartnerLists}
                />
            </div>
        </div>
    );
}