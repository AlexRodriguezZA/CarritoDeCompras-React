import "../../styles/HomeCss/Home.css"
import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './Header';
import data from './data/data.js';
import ListadoCompleto from "./ListadoCompleto";
import ListadoLowCost from "./ListadoLowCost";


function Home() {
  const [product , setProduct] = useState([]);
  const [cartProd, setCartProd] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [CheckProduct, setCheckProduct] = useState(false); 
  const [ProductLowCost, setProductLowCost] = useState([]);

  useEffect(() => {
    setProduct(data)
    //Hacemos el array de los productos con menor precio
    const NewLowCost = data.filter( dato => dato.price < 100)
    setProductLowCost(NewLowCost)
    },[]);

    
  const handlerAddProduct = (id) => {
    const newProduct = product.filter( product =>  product.id === id)
    console.log(newProduct)
    console.log(cartProd)
    setCartProd(cartProd.concat(newProduct))
  }
 
// -------------lógica de filtrado y busquedas -----------------------
  const HandlerSearch = (event) => {
    setSearchProduct(event.target.value)
  }

  const results = searchProduct.length === 0 ? (product) : 
                  (product.filter( (dataSearch) => dataSearch.name.toLowerCase().includes(searchProduct.toLocaleLowerCase())));
//----------------------------------------------------------------------

  const HandlerCheckbox = (event)=>{
    setCheckProduct(event.target.checked)
  }

  
  return (
    <div className="Home">
        <Header cantidadCarrito={cartProd.length}
                functionSearch={HandlerSearch}
                functionCheckbox={HandlerCheckbox}
                checked={CheckProduct}/>

        {
        CheckProduct === true ? 
        (<ListadoLowCost LowCost={ProductLowCost} handlerAddProduct={handlerAddProduct}/>) : 
        (<ListadoCompleto results={results} handlerAddProduct={handlerAddProduct}/>) }
    </div>
  );
}

export default Home;