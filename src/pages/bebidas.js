import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import AppLayout from '../components/AppLayout'
import GoBack from '../components/GoBack/GoBack'

const Bebidas = () => {
  return (
    <AppLayout>
      <div className="menu-page">
        <StaticImage
          className="menu-page__image"
          src="../images/tapas-bebidas.jpg"
          alt="página 1 del menu de bebidas"
          placeholder="tracedSVG"
          layout="constrained"
          objectFit="cover"
          width={1000}
        />
        <StaticImage
          className="menu-page__image"
          alt="página 2 del menu de bebidas"
          src="../images/bebidas.jpg"
          placeholder="tracedSVG"
          layout="constrained"
          objectFit="cover"
          width={1000}
        />
      </div>
      <GoBack />
    </AppLayout>
  )
}

export default Bebidas
