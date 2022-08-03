import React from "react";
import "../../styles/HomeCss/Card.css"

const Card = ({id, name, price, functionAddProduct})=>{
    return(
        <div className={ price > 100 ? ("card-conteiner"):("card-conteiner-lowcost")}>
            <h2>{name}</h2>
            <div className="linea-divisora"></div>
            <p>$ {price}</p>
            <button onClick={ ()=> functionAddProduct(id)}>Add to cart</button>

        </div>
    );
}

export default Card;