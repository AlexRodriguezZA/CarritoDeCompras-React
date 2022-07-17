import React from "react";
import {BsCart2 } from "react-icons/bs";
import CheckBox from "./CheckBox";

import "../styles/Header.css"


const Header = ({cantidadCarrito, functionSearch})=>{
    return(
        <header>
            <h1>Shopping </h1>
            <div className="input-container">
                <input autoFocus type="text" placeholder="Search" onChange={(e)=>functionSearch(e)}/>
                <a href="#">  
                    <span className={cantidadCarrito === 0 ? ("numero-carrito-vacio") : ("numero-carrito")}> {cantidadCarrito} </span> 
                    <BsCart2 className="cart"/>
                </a>
                <CheckBox/>
            </div>
        </header>
    )
}

export default Header;