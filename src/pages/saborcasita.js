import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import AppLayout from '../components/AppLayout'
import GoBack from '../components/GoBack'

const SaborCasita = () => {
  return (
    <AppLayout>
      <div className="menu-page">
        <StaticImage
          className="menu-page__image"
          src="../images/sabor-casita21.jpg"
          alt="Página 2 del menu con sabor a casita"
          placeholder="tracedSVG"
          layout="constrained"
          width={1000}
        />
        <StaticImage
          className="menu-page__image"
          src="../images/sabor-casita22.jpg"
          alt="Página 2 del menu con sabor a casita"
          placeholder="tracedSVG"
          layout="constrained"
          width={1000}
        />
        <StaticImage
          className="menu-page__image"
          src="../images/sabor-casita23.jpg"
          alt="Página 3 del menu con sabor a casita"
          placeholder="tracedSVG"
          layout="constrained"
          width={1000}
        />
        <StaticImage
          className="menu-page__image"
          src="../images/sabor-casita24.jpg"
          alt="Página 4 del menu con sabor a casita"
          placeholder="tracedSVG"
          layout="constrained"
          width={1000}
        />
        <StaticImage
          className="menu-page__image"
          src="../images/sabor-casita25.jpg"
          alt="Página 5 del menu con sabor a casita"
          placeholder="tracedSVG"
          layout="constrained"
          width={1000}
        />
        <StaticImage
          className="menu-page__image"
          alt="Ley de Información Alimentaria"
          src="../images/menu-ley.png"
          placeholder="tracedSVG"
          layout="constrained"
          objectFit="cover"
          width={1000}
        />
        <div className="separator"></div>
      </div>
      <GoBack />
    </AppLayout>
  )
}

export default SaborCasita
