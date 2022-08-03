import "../../styles/HomeCss/Home.css"
import React, { useEffect } from 'react';
import { useState } from 'react';
import NoDataSearch from './NoDataSearch';
import Card from './Card';
import Header from './Header';
import data from './data/data.js';






function Home() {
  const [product , setProduct] = useState([]);
  const [cartProd, setCartProd] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [CheckProduct, setCheckProduct] = useState(false); //Chequear el control de checkbox
  const [ProductLowCost, setProductLowCost] = useState([]);

  useEffect(() => {
    setProduct(data)
    //Hacemos el array de los productos con menor precio
    const NewLowCost = data.filter( dato => dato.price < 100)
    setProductLowCost(NewLowCost)
    },[]);

    
  const handlerAddProduct = (id) => {
    const newProduct = product.filter( product =>  product.id === id)
    setCartProd(cartProd.concat(newProduct))
    console.log(cartProd)
  }
 
// -------------lógica de filtrado de busquedas -----------------------
  const HandlerSearch = (event) => {
    setSearchProduct(event.target.value)
    
  }

  const results = searchProduct.length === 0 ? (product) : 
                  (product.filter( (dataSearch) => dataSearch.name.toLowerCase().includes(searchProduct.toLocaleLowerCase())));
  //----------------------------------------------------------------------

  const HandlerCheckbox = (event)=>{
    setCheckProduct(event.target.checked)
    console.log(CheckProduct)

    
  }

  
  return (
    <div className="Home">
        <Header cantidadCarrito={cartProd.length}
                functionSearch={HandlerSearch}
                functionCheckbox={HandlerCheckbox}
                checked={CheckProduct}/>

      <div className='product-container'>
        {results.length === 0 ? (<NoDataSearch/>)
        : (results.map( producto => 
                                  <Card key={producto.id} 
                                        name={producto.name} 
                                        price={producto.price} 
                                        id={producto.id}
                                        functionAddProduct={handlerAddProduct}/>
                      ))}
        
      </div>
    </div>
  );
}

export default Home;