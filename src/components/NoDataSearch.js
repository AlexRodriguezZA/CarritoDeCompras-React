import React from "react";
import {BsExclamationLg } from "react-icons/bs";
import "../styles/NoDataSearch.css"

const NoDataSearch = ()=>{
        return(
            <div className="container">
                <div className="NoData-container">
                    <p>No se encontrĂ³ el producto <BsExclamationLg className="NoData-icon"/></p>
                </div>
            </div>
        );   
}

export default NoDataSearch;