import React from 'react'
import Card from './Card'
import NoDataSearch from './NoDataSearch'
import "../../styles/HomeCss/Listados.css"


function ListadoCompleto({results,handlerAddProduct}) {
  return (
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
  )
}

export default ListadoCompleto