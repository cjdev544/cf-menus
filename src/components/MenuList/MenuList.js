import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import './MenuList.scss'

const MenuList = () => {
  return (
    <>
      <a
        href="https://www.centralfoodmalaga.com/sushiguay"
        className="menu-list"
      >
        <h3>Sushi Guay</h3>
        <StaticImage
          src="../../images/logo-sushi.jpg"
          alt="logo sushiguay"
          placeholder="tracedSVG"
          layout="constrained"
          width={300}
        />
      </a>
      <a href="https://www.centralfoodmalaga.com/guaywok" className="menu-list">
        <h3>GuayWok</h3>
        <StaticImage
          src="../../images/logo-guaywok.jpg"
          alt="logo guaywok"
          placeholder="tracedSVG"
          layout="constrained"
          width={300}
        />
      </a>
      <a
        href="https://www.centralfoodmalaga.com/sabor-casita"
        className="menu-list"
      >
        <h3>Con Sabor a Casita</h3>
        <StaticImage
          src="../../images/logo-sabor.jpg"
          alt="logo con sabor a casita"
          placeholder="tracedSVG"
          layout="constrained"
          width={300}
        />
      </a>
      <a
        href="https://www.centralfoodmalaga.com/hamburgueseria-venezuela"
        className="menu-list"
      >
        <h3>Hamburguesería VZLA</h3>
        <StaticImage
          src="../../images/logo-hamburgueseria.png"
          alt="Hamburguesería VZLA"
          placeholder="tracedSVG"
          layout="constrained"
          width={300}
        />
      </a>
      <a
        href="https://www.centralfoodmalaga.com/postres-bebidas"
        className="menu-list menu-list-center"
      >
        <h3>Postres y Bebidas</h3>
      </a>
    </>
  )
}

export default MenuList
