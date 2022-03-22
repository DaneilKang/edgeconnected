import React from "react";

const Pagination = ({ listsPerPage, totalLists, pagenate, currentPagination}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalLists / listsPerPage); i++){
        pageNumbers.push(i)
    }
    
    return (
        <div className="narrows1">
            {
                currentPagination === 1 
                ? 
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
                    <span style={{padding:"0 10px"}}><i className="fa-solid fa-angles-left" onClick={() => pagenate(1)}></i></span>
                    <span style={{padding:"0 10px"}}>
                        
                            <i className="fa-solid fa-angle-left" onClick={() => pagenate(currentPagination - 1 <= 1 ? 1 : currentPagination - 1)}></i>
                        
                    </span>
                </span>
            }
            
            {
                currentPagination === Math.ceil(totalLists / listsPerPage) 
                ? 
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
                    <span style={{padding:"0 10px"}}>
                        
                            <i className="fa-solid fa-angle-right" onClick={() => 
                                pagenate((currentPagination + 1) >= Math.ceil(totalLists / listsPerPage) 
                                ? Math.ceil(totalLists / listsPerPage) 
                                : currentPagination + 1)}></i>
                        
                    </span>
                    <span style={{padding:"0 10px"}}>
                            <i className="fa-solid fa-angles-right" onClick={() => pagenate(Math.ceil(totalLists / listsPerPage))}></i>
                        
                    </span>
                </span>
            }
        </div>
    );
}

export default Pagination;