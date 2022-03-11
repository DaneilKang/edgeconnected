import React from "react";

const Pagination = ({ listsPerPage, totalLists, pagenate, currentPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalLists / listsPerPage); i++){
        pageNumbers.push(i)
    }
    
    return (
        <div className="narrows1">
            {currentPage === 1 ? 
            <span style={{color:"lightgray"}}>
                <span style={{padding:"0 10px"}}>
                    <i class="fa-solid fa-angles-left"></i>
                </span>
                <span style={{padding:"0 10px"}}>
                    <i class="fa-solid fa-angle-left"></i>
                </span>
            </span> 
            : 
            <span>
                <span style={{padding:"0 10px"}}><a href="#" onClick={() => pagenate(1)}><i class="fa-solid fa-angles-left"></i></a></span>
                <span style={{padding:"0 10px"}}><a href="#" onClick={() => pagenate(currentPage - 1)}><i class="fa-solid fa-angle-left"></i></a></span>
            </span>}
            {currentPage === (totalLists / listsPerPage) ? 
            <span style={{color:"lightgray"}}>
                <span style={{padding:"0 10px"}}>
                    <i class="fa-solid fa-angle-right"></i>
                </span>
                <span style={{padding:"0 10px"}}>
                    <i class="fa-solid fa-angles-right"></i>
                </span>
            </span>
             :
            <span>
                <span style={{padding:"0 10px"}}><a href="#" onClick={() => pagenate(currentPage + 1)}><i class="fa-solid fa-angle-right"></i></a></span>
                <span style={{padding:"0 10px"}}><a href="#" onClick={() => pagenate(totalLists / listsPerPage)}><i class="fa-solid fa-angles-right"></i></a></span>
            </span>
            }
        </div>
    );
}

export default Pagination;