import React from 'react'
import Card from './Card'
import NoDataSearch from './NoDataSearch'
import "../../styles/HomeCss/Listados.css"

export default function ListadoLowCost({LowCost,handlerAddProduct}) {
  return (
    <div className='product-container'>
        {LowCost.length === 0 ? (<NoDataSearch/>)
          : (LowCost.map( producto => 
                                    <Card key={producto.id} 
                                          name={producto.name} 
                                          price={producto.price} 
                                          id={producto.id}
                                          functionAddProduct={handlerAddProduct}/>
                        ))}
    </div>
  )
}
