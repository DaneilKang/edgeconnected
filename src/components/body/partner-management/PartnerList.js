import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Partner.module.css";
import { Audio } from 'react-loader-spinner';
import Pagination from "../common/pagination/Pagination";

const partnerListURL = "https://u8gmw4ohr6.execute-api.ap-southeast-2.amazonaws.com/test/get-partner-management";
const deviceListURL = "https://u8gmw4ohr6.execute-api.ap-southeast-2.amazonaws.com/test/get-device-type-list";

export default function PartnerList({setTotalPartnerCount, searchQuery}) {

    const [lists, setLists] = useState([]);
    const [deviceLists, setDeviceLists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [listsPerPage] = useState(10);
   
    useEffect(() => {
        const fetchLists = async () => {
            setIsLoading(true);

            const resPartner = await axios.get(`${partnerListURL}`);
            const resDevice = await axios.get(`${deviceListURL}`);
            
            setLists(resPartner.data);
            setDeviceLists(resDevice.data);
            setIsLoading(false);
        };

        fetchLists();
        
    }, []);

    // filtered lists when filter input
    const filterList = (currentLists, query) => {
        if(!query) {
            return currentLists;
        }

        return lists.filter(list => {
            const listName = list.name.toLowerCase();
            return listName.includes(query);
        });
    };

    // Get current partner lists
    const indexOfLastList = currentPage * listsPerPage;
    const indexOfFirstList = indexOfLastList - listsPerPage;
    const currentLists = lists.slice(indexOfFirstList, indexOfLastList);
    const filteredLists = filterList(currentLists,searchQuery);

    
    // Total list counts
    setTotalPartnerCount(lists.length);

    // Device type list add
    const deviceTypeLists = [];
    deviceLists.forEach((device) => {
        deviceTypeLists.push(device.short_name)
    });
    console.log(deviceTypeLists)

    // Change page with pagination
    const pagenate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        isLoading ? 
            <div className={styles.loading_spinner}>
                <Audio
                    height="80"
                    width="80"
                    color="grey"
                    ariaLabel="loading"
                />
            </div> :
            <div>
                <div className={styles.table_wrapper}>
                    <table className={styles.list_table}>
                        <thead className={styles.table_head}>
                            <tr>
                                <th scope="col">Name</th>
                                <th>Register Installer</th>
                                <th>Installer</th>
                                <th>User</th>
                                {
                                    deviceLists.map((deviceList) => (
                                        <td>
                                            <th>{deviceList.short_name.toUpperCase()} Stock</th>
                                            <th>{deviceList.short_name.toUpperCase()} Installed</th>
                                        </td>
                                    ))
                                }
                                
                            </tr>
                        </thead>
                        <tbody className={styles.table_body}>
                        {
                            filteredLists.map((partner,index) => (
                                <tr key={partner.partnet_id} className={index % 2 === 0 ? styles.list_dark : styles.list_light}>
                                    <td scope="row" className={styles.list_name}>{partner.name}</td>
                                    <td>_ _ _ _</td>
                                    <td>{partner.installers}</td>
                                    <td>{partner.users}</td>
                                    {
                                        deviceTypeLists.map((device) => (
                                            <td>
                                                <td>{device in partner.stock_devices ? partner.stock_devices[device] : "0"}</td>
                                                <td>{device in partner.installed_devices ? partner.installed_devices[device] : "0"}</td>
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                
                </div>
                <div className={styles.pagination}>
                    <div>&nbsp;</div>
                    <div className={styles.items_per_page}>
                        Items per page: {listsPerPage}
                    </div>
                    <div className={styles.page_info}>
                        {Math.floor(indexOfFirstList + 1) + " - " + Math.floor(indexOfLastList > lists.length ? lists.length : indexOfLastList) + " of " + lists.length}
                    </div>
                    
                    <div className={styles.pagination_nav}>
                        <Pagination
                            listsPerPage={listsPerPage}
                            totalLists={lists.length}
                            pagenate={pagenate}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </div>
    )
}
