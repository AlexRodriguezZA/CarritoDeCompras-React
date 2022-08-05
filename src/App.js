import React from "react";
import Home from "./components/Home/Home.js";
import Cart from "./components/Carrito/Cart.js"
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [ProductosEnCarrito, setProductosEnCarrito] = useState([])

  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setProductosEnCarrito={setProductosEnCarrito} ProductosEnCarrito={ProductosEnCarrito}/>}/>
          <Route path="/carrito" element={<Cart ProductosCart={ProductosEnCarrito}/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
