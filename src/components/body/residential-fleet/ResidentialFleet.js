import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./ResidentialFleet.module.css";
import { Audio } from 'react-loader-spinner';
import Pagination from "../common/pagination/Pagination";
import MapView from "../common/map-view/MapView";
// import Dashboard from "./analytics/ResidentialAnalytics";

// const baseURL = "https://imq13bo8qi.execute-api.ap-southeast-2.amazonaws.com/get-residential-fleet"
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

    return (
        isLoading ? 
        <div className={styles.loading_spinner}>
            <Audio
                height="100"
                width="100"
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
                                <td>{list.solar} {list.battery}</td>
                                <td>Alert</td>
                                <td>Last Activity</td>
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