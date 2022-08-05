import React from "react";
import {BsCart2 } from "react-icons/bs";
import CheckBox from "./CheckBox";
import { Link } from "react-router-dom";
import "../../styles/HomeCss/Header.css"


const Header = ({cantidadCarrito, functionSearch,functionCheckbox,checked})=>{
    return(
        <header>
            <h1>Shopping </h1>
            <div className="input-container">
                <input autoFocus type="text" placeholder="Search" onChange={(e)=>functionSearch(e)}/>
                <Link to="/carrito">  
                    <span className={cantidadCarrito === 0 ? ("numero-carrito-vacio") : ("numero-carrito")}> {cantidadCarrito} </span> 
                    <BsCart2 className="cart"/>
                </Link>
            </div>
            {/* Zona del checkbox */}
            <CheckBox HandlerCheckbox={functionCheckbox}
                        checkedValue={checked}/>
        </header>
    )
}

export default Header;