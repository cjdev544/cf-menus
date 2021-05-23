import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import AppLayout from '../components/AppLayout'
import GoBack from '../components/GoBack'

const Guaywok = () => {
  return (
    <AppLayout>
      <div className="menu-page">
        <StaticImage
          className="menu-page__image"
          src="../images/guaywok1.jpg"
          alt="Página 1 del menu guaywok"
          placeholder="tracedSVG"
          layout="constrained"
          width={1000}
        />
        <StaticImage
          className="menu-page__image"
          src="../images/guaywok2.jpg"
          alt="Página 2 del menu guaywok"
          placeholder="tracedSVG"
          layout="constrained"
          width={1000}
        />
        <StaticImage
          className="menu-page__image"
          src="../images/guaywok3.jpg"
          alt="Página 3 del menu guaywok"
          placeholder="tracedSVG"
          layout="constrained"
          width={1000}
        />
        <StaticImage
          className="menu-page__image"
          src="../images/guaywok4.jpg"
          alt="Página 4 del menu guaywok"
          placeholder="tracedSVG"
          layout="constrained"
          width={1000}
        />
      </div>
      <GoBack />
    </AppLayout>
  )
}

export default Guaywok
