import React from 'react'
import Card from '../Card/Card'

function ProductPage() {
  return (
    <Card>
        <img 
            width={100} 
            height={100} 
            src="https://tienda.starware.com.ar/wp-content/uploads/2024/09/kit-arcade-mame-led-usb-starware-1-jugador-completo-2764-7331.jpg" alt="" 
        />
        <h2>Producto Destacado</h2>
        <p>Este es un producto muy solicitado  </p>
    </Card>
  )
}

export default ProductPage