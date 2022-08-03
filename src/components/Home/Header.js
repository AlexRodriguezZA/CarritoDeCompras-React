import React from "react";
import {BsCart2 } from "react-icons/bs";
import CheckBox from "./CheckBox";

import "../../styles/HomeCss/Header.css"


const Header = ({cantidadCarrito, functionSearch,functionCheckbox,checked})=>{
    return(
        <header>
            <h1>Shopping </h1>
            <div className="input-container">
                <input autoFocus type="text" placeholder="Search" onChange={(e)=>functionSearch(e)}/>
                <a href="#">  
                    <span className={cantidadCarrito === 0 ? ("numero-carrito-vacio") : ("numero-carrito")}> {cantidadCarrito} </span> 
                    <BsCart2 className="cart"/>
                </a>
            </div>
            {/* Zona del checkbox */}
            <CheckBox HandlerCheckbox={functionCheckbox}
                        checkedValue={checked}/>
        </header>
    )
}

export default Header;