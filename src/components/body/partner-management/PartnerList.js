import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Partner.module.css";
import { Audio } from 'react-loader-spinner';
import Pagination from "../common/pagination/Pagination";
import { Modal } from "../common/modal/Modal";
import AddNewUser from "./add-new-user/AddNewUser";
import AddNewBusiness from "./add-new-business/AddNewBusiness";
import AuthService from "../../../service/auth.service";

const partnerListURL = "https://u8gmw4ohr6.execute-api.ap-southeast-2.amazonaws.com/test/get-partner-management";
const deviceListURL = "https://u8gmw4ohr6.execute-api.ap-southeast-2.amazonaws.com/test/get-device-type-list";

export default function PartnerList(
        {
            setTotalPartnerCount, 
            searchQuery, 
            showModal, 
            setShowModal, 
            modalTitle
        }) 
{

    const [lists, setLists] = useState([]);
    const [deviceLists, setDeviceLists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPagination, setCurrentPagination] = useState(1);
    const [listsPerPage] = useState(10);
   
    useEffect(() => {
        const fetchLists = async () => {
            setIsLoading(true);
            const USER_TOKEN = localStorage.getItem('jwtToken');
            const USER_ROLE = localStorage.getItem('role').replace(/\"/gi,'\\"');

            const resPartner = await axios.get(`${partnerListURL}`, { headers: { "x-token": USER_TOKEN, "x-role": USER_ROLE } });
            const resDevice = await axios.get(`${deviceListURL}`, { headers: { "x-token": USER_TOKEN, "x-role": USER_ROLE } });

            AuthService.getCurrentUserPermission(resPartner.data.statusCode, resPartner.data.message);
            
            setLists(resPartner.data.body);
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

    // Make an array just partner name
    const partners = lists.map(list => list.name);
    // setPartnerLists(partners);

    // Get current partner lists
    const indexOfLastList = currentPagination * listsPerPage;
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

    // Change page with pagination
    const pagenate = (pageNumber) => setCurrentPagination(pageNumber);


    // Modal direction
    let modalDirection = "";
    if (modalTitle === "user") {
        modalDirection = <AddNewUser partners={lists} setShowModal={setShowModal}/>
    } else if (modalTitle === "business") {
        modalDirection = <AddNewBusiness partners={partners} />
    }

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
                                    <td className={styles.list_name}>{partner.name}</td>
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
                            currentPagination={currentPagination}
                        />
                    </div>
                </div>
                {showModal ? 
                <Modal openClose={showModal} setShowModal={setShowModal}>
                    {modalDirection}
                </Modal>
                : null }
            </div>
    )
}
