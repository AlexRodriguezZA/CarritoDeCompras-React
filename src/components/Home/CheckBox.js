import React from "react";

const CheckBox = ({HandlerCheckbox,checkedValue}) => {
    return(
        <div>
            <input id="filtrar" type="checkbox" checked={checkedValue} className="check" onChange={(e)=> HandlerCheckbox(e)}/>
            <label htmlFor="filtrar">Productos en oferta</label>
        </div>
    );
}

export default CheckBox;