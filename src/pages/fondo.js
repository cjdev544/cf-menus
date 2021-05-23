import React from 'react'
import AppLayout from '../components/AppLayout'
import '../scss/fondo.scss'

const Fondo = () => {
  return (
    <AppLayout>
      <div className="fondo">
        <h2>ENTRANTES Y PICOTEOS</h2>
        <h3>Tequeños</h3>
        <p>deditos de queso fresco blanco latino</p>
        <div className="separator">
          <p className="separator-product">
            Media Ración: 5 unidades
            .....................................................
          </p>

          <p className="separator-cost">€ 6.9</p>
        </div>
      </div>
    </AppLayout>
  )
}

export default Fondo
