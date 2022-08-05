import React from "react";
import Home from "./components/Home/Home.js";
import Cart from "./components/Carrito/Cart.js"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/carrito" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
