import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./ResidentialFleet.module.css";
import { Audio } from 'react-loader-spinner';
import Pagination from "../common/pagination/Pagination";
import MapView from "../common/map-view/MapView";
// import Dashboard from "./analytics/ResidentialAnalytics";

import eiq_blue from "../../../assets/resi-edgeiq-blue.svg";
import eiq_gray from "../../../assets/resi-edgeiq-gray.svg";
import battery_blue from "../../../assets/resi-battery-blue.svg";
import battery_gray from "../../../assets/resi-battery-gray.svg";
import battery_orange from "../../../assets/resi-battery-orange.svg";
import load_gray from "../../../assets/resi-load-gray.svg";
import load_blue from "../../../assets/resi-load-blue.svg";
import monitor_orange from "../../../assets/resi-monitor-orange.svg";
import monitor_blue from "../../../assets/resi-monitor-blue.svg";
import solar_blue from "../../../assets/resi-solar-blue.svg";
import solar_orange from "../../../assets/resi-solar-orange.svg";


const baseURL = "https://u8gmw4ohr6.execute-api.ap-southeast-2.amazonaws.com/test/get-residential-fleet"

function ResidentialFleet ({searchQuery}) {
    const [lists, setLists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [listsPerPage] = useState(10);

    useEffect(() => {
        const fetchLists = async () => {
            setIsLoading(true);

            const res = await axios.get(`${baseURL}`);
            
            setLists(res.data);
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

    // Change page with pagination
    const pagenate = (pageNumber) => setCurrentPage(pageNumber);

    const currentDateTime = new Date();
    const one_hour = 1000 * 60 * 60;

    const getTimestampToRealTime = (timestamp) => {
        const timestampToNow = Math.floor(Math.round(currentDateTime.getTime() - new Date((timestamp) * 1000).getTime()) / one_hour);
        return timestampToNow > 24 
            ? Math.floor(timestampToNow / 24) + "day(s)"
            : timestampToNow === 0 
                ? ""
                : Math.floor(timestampToNow) + "hour(s)"
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
            <div>
                <MapView />
            </div>
            <div className={styles.table_wrapper}>
                <table className={styles.list_table}>
                    <thead className={styles.table_head}>
                        <tr>
                            <th className={styles.list_performance_check}>Performance<br/>Check</th>
                            <th>Customer</th>
                            <th>Site Address</th>
                            <th>Device</th>
                            <th>Alert</th>
                            <th>Last Activity</th>
                            <th>Partner</th>
                            <th>Installer</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        filteredLists.map((list,index) => (
                            <tr key={index} className={styles.table_body}>
                                <td className={styles.list_performance_check}>
                                    <input type="checkbox" name="performance-check" />
                                </td>
                                <td>{list.customer}</td>
                                <td>{list.site_address}</td>
                                <td>
                                    <div className={styles.device}>
                                        
                                        <img src={list.has_eiq === 1 ? eiq_blue : eiq_gray} width="25px" height="25px"/>
                                        {list.device}
                                        <img src={list.has_energymonitor === 1 ? monitor_blue : monitor_orange} width="25px" height="25px"/>
                                        <img src={list.solar === 1 ? solar_blue : solar_orange} width="25px" height="25px"/>
                                        <img src={list.battery === 1 ? battery_blue : battery_gray} width="25px" height="25px"/>
                                        <img src={list.has_load === 1 ? load_blue : load_gray} width="25px" height="25px"/>
                                        
                                    </div>
                                </td>
                                <td>
                                    {
                                        list.devices.length > 0 &&
                                            list.devices.map(device=>
                                                (
                                                    <div className={styles.alert}>
                                                        {device.serial_number} {getTimestampToRealTime(device.last_received_packet)} offline
                                                    </div>
                                                )
                                            )        
                                    }
                                </td>
                                <td>
                                    <div className={styles.last_activity}>
                                        <div>Desktop Login: {list.last_accessed_desktop === null ? "Never" : getTimestampToRealTime(list.last_accessed_desktop) + " ago"}</div>
                                        <div>App Login: {list.last_accessed_app === null ? "Never" : getTimestampToRealTime(list.last_accessed_app) + " ago"}</div>
                                    </div>
                                </td>
                                <td>{list.partners}</td>
                                <td>{list.installers}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            
            </div>
            <div className={styles.pagination}>
                
                <div className={styles.items_per_page}>
                    Items per page: {listsPerPage}
                </div>
                <div className={styles.page_info}>
                    {`${indexOfFirstList + 1} - ${currentPage * listsPerPage} of ${lists.length}`}
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
    );
}

export default ResidentialFleet;