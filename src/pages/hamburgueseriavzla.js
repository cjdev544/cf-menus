import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import AppLayout from '../components/AppLayout'
import GoBack from '../components/GoBack'

const Hamburgueseria = () => {
  return (
    <AppLayout>
      <div className="menu-page">
        <StaticImage
          className="menu-page__image"
          src="../images/hamburgueseria01.jpg"
          alt="Página 1 del menu Hamburguesería VZLA"
          placeholder="tracedSVG"
          layout="constrained"
          width={1000}
        />
        <StaticImage
          className="menu-page__image"
          src="../images/hamburgueseria02.jpg"
          alt="Página 2 del menu Hamburguesería VZLA"
          placeholder="tracedSVG"
          layout="constrained"
          width={1000}
        />
        <StaticImage
          className="menu-page__image"
          src="../images/hamburgueseria03.jpg"
          alt="Página 3 del menu Hamburguesería VZLA"
          placeholder="tracedSVG"
          layout="constrained"
          width={1000}
        />
        <StaticImage
          className="menu-page__image"
          src="../images/hamburgueseria04.jpg"
          alt="Página 4 del menu Hamburguesería VZLA"
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

export default Hamburgueseria
