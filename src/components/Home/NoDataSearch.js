import React from "react";
import {BsExclamationLg } from "react-icons/bs";
import "../../styles/HomeCss/NoDataSearch.css"

const NoDataSearch = ()=>{
        return(
            <div className="container">
                <div className="NoData-container">
                    <p>No se encontró el producto <BsExclamationLg className="NoData-icon"/></p>
                </div>
            </div>
        );   
}

export default NoDataSearch;