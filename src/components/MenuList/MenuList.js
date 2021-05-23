import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './MenuList.scss'

const MenuList = () => {
  return (
    <>
      <Link to="/sushiguay" className="menu-list">
        <h3>Sushi Guay</h3>
        <StaticImage
          src="../../images/logo-sushi.jpg"
          alt="logo sushiguay"
          placeholder="tracedSVG"
          layout="constrained"
          width={300}
        />
      </Link>
      <Link to="/guaywok" className="menu-list">
        <h3>GuayWok</h3>
        <StaticImage
          src="../../images/logo-guaywok.jpg"
          alt="logo guaywok"
          placeholder="tracedSVG"
          layout="constrained"
          width={300}
        />
      </Link>
      <Link to="/saborcasita" className="menu-list">
        <h3>Con Sabor a Casita</h3>
        <StaticImage
          src="../../images/logo-sabor.jpg"
          alt="logo con sabor a casita"
          placeholder="tracedSVG"
          layout="constrained"
          width={300}
        />
      </Link>
      <Link to="/guaywok" className="menu-list">
        <h3>GuayWok</h3>
        <StaticImage
          src="../../images/logo-guaywok.jpg"
          alt="logo guaywok"
          placeholder="tracedSVG"
          layout="constrained"
          width={300}
        />
      </Link>
      <Link to="/saborcasita" className="menu-list">
        <h3>Con Sabor a Casita</h3>
        <StaticImage
          src="../../images/logo-sabor.jpg"
          alt="logo con sabor a casita"
          placeholder="tracedSVG"
          layout="constrained"
          width={300}
        />
      </Link>
    </>
  )
}

export default MenuList
