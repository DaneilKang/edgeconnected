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


    // Get the current time
    const currentDateTime = Math.round(new Date().getTime() / 1000);
    const periods = [
                        ['year', 60 * 60 * 24 * 365],
                        ['month', (60 * 60 * 24 * 365) / 12],
                        ['week', (60 * 60 * 24 * 365) / 52],
                        ['day', 60 * 60 * 24],
                        ['hour', 60 * 60],
                        ['minute', 60]
                    ];

    // getTimeString(defaultValue, timestamp, suffix)
    const getTimeString = (defaultValue, timestamp, suffix) => {
        
        if ( timestamp === null || isNaN(timestamp)) return defaultValue;

        let difference = currentDateTime - timestamp;
        var suffixes = "";

        if (difference <= 15) {
            return Math.floor(difference / 60) + " " + "Online";
        }

        for (let i = 0; i < periods.length; i++){
            if (difference >= periods[i][1]) {
                suffixes = Math.floor(difference / periods[i][1]) > 1 ? "s " : " ";
                return Math.floor(difference / periods[i][1]) + " " + periods[i][0] + suffixes + suffix;
            }
        }
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
                            <th className={styles.list_performance_check}>Performance Check</th>
                            <th className={styles.list_star}></th>
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
                                <td className={styles.list_star}><i class="fa-solid fa-star"></i></td>
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
                                        list.devices.length > 0 ?
                                            list.devices.map((device,idx,arr)=>
                                                (
                                                    <div className={styles.alert}>
                                                        {
                                                            arr.length > 1 
                                                                ? (device.serial_number !== null && device.last_received_packet !== null
                                                                    ? device.serial_number 
                                                                    : "" )
                                                                : ""
                                                        } {getTimeString("", device.last_received_packet, "offline")} 
                                                    </div>
                                                )
                                            )
                                            : "No Devices Installed"        
                                    }
                                </td>
                                <td>
                                    <div className={styles.last_activity}>
                                        <div>Desktop Login: {getTimeString("Never", list.last_accessed_desktop, "ago")}</div>
                                        <div>App Login: {getTimeString("Never", list.last_accessed_app, "ago")}</div>
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
                    {Math.floor(indexOfFirstList + 1) + " - " + Math.floor(currentPage * listsPerPage) + " of " + lists.length}
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