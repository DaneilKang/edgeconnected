import React from "react";

const Pagination = ({ listsPerPage, totalLists, pagenate, currentPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalLists / listsPerPage); i++){
        pageNumbers.push(i)
    }
    
    return (
        <div>
            {/* <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href="!#" className="page-link" onClick={() => pagenate(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul> */}
            {currentPage === 1 ? 
            "|< <" : 
            <span>
                <a href="#" onClick={() => pagenate(1)}>&lt;&lt;</a>&nbsp;
                <a href="#" onClick={() => pagenate(currentPage - 1)}>&lt;</a>&nbsp;
            </span>}
            {currentPage === (totalLists / listsPerPage) ? 
            "> >|" :
            <span>
                <a href="#" onClick={() => pagenate(currentPage + 1)}>&gt;</a>&nbsp;
                <a href="#" onClick={() => pagenate(totalLists / listsPerPage)}>&gt;&gt;</a>
            </span>
            }
        </div>
    );
}

export default Pagination;