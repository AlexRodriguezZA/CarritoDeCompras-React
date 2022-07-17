import React from "react";

const CheckBox = ()=>{
    return(
        <div>
            <input id="filtrar" type="checkbox"/>
            <label htmlFor="filtrar">Productos en oferta</label>
        </div>
    );
}

export default CheckBox;