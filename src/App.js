import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import NoDataSearch from './components/NoDataSearch';
import Card from './components/Card';
import Header from './components/Header';
import data from './data/data.js';
import Cart from './components/Cart';

function App() {
  const [product , setProduct] = useState([]);
  const [cartProd, setCartProd] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    setProduct(data)
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

 
  
  return (
    <div className="App">
        <Header cantidadCarrito={cartProd.length}
                functionSearch={HandlerSearch}/>

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

export default App;
