import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { StaticImage } from 'gatsby-plugin-image'
import './MenuList.scss'

const MenuList = () => {
  return (
    <>
      <AniLink paintDrip hex="#b2b2b2" to="/sushiguay" className="menu-list">
        <h3>Sushi Guay</h3>
        <StaticImage
          src="../../images/logo-sushi.jpg"
          alt="logo sushiguay"
          placeholder="tracedSVG"
          layout="constrained"
          width={300}
        />
      </AniLink>
      <AniLink paintDrip hex="#b2b2b2" to="/guaywok" className="menu-list">
        <h3>GuayWok</h3>
        <StaticImage
          src="../../images/logo-guaywok.jpg"
          alt="logo guaywok"
          placeholder="tracedSVG"
          layout="constrained"
          width={300}
        />
      </AniLink>
      <AniLink paintDrip hex="#b2b2b2" to="/saborcasita" className="menu-list">
        <h3>Con Sabor a Casita</h3>
        <StaticImage
          src="../../images/logo-sabor.jpg"
          alt="logo con sabor a casita"
          placeholder="tracedSVG"
          layout="constrained"
          width={300}
        />
      </AniLink>
      <AniLink
        paintDrip
        hex="#b2b2b2"
        to="/postres-bebidas"
        className="menu-list menu-list-center"
      >
        <h3>Postres y Bebidas</h3>
      </AniLink>
    </>
  )
}

export default MenuList
