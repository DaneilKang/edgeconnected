import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./ResidentialFleet.module.css";
import { Audio } from 'react-loader-spinner';
import Pagination from "../common/pagination/Pagination";

const baseURL = "https://u8gmw4ohr6.execute-api.ap-southeast-2.amazonaws.com/test/demoapi";

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
            <div className={styles.table_wrapper}>
                <table className={styles.list_table}>
                    <thead className={styles.table_head}>
                        <tr>
                            <th>Performance Check</th>
                            <th>Customer</th>
                            <th>Site Address</th>
                            <th>Device</th>
                            <th>Alert</th>
                            <th>Last Activity</th>
                            <th>Partner</th>
                            <th>Installer</th>
                        </tr>
                    </thead>
                    <tbody className={styles.table_body}>
                    {
                        filteredLists.map((list) => (
                            <tr key={list.id}>
                                <td className={styles.list_name}>
                                    <input type="checkbox" name="performance-check" />
                                    Performance Check
                                </td>
                                <td>Customer</td>
                                <td>Site Address</td>
                                <td>Device</td>
                                <td>Alert</td>
                                <td>Last Activity</td>
                                <td>Partner</td>
                                <td>Installer</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            
            </div>
            <div>
                <ResidentialFleet/>
            </div>
            <div className={styles.pagination}>
                <div>&nbsp;</div>
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