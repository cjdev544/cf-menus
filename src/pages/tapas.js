import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import AppLayout from '../components/AppLayout'
import GoBack from '../components/GoBack/GoBack'

const Tapas = () => {
  return (
    <AppLayout>
      <div className="menu-page">
        <StaticImage
          className="menu-page__image"
          src="../images/tapas-bebidas.jpg"
          alt="página 1 del menu de tapas"
          placeholder="tracedSVG"
          layout="constrained"
          objectFit="cover"
          width={1000}
        />
        <StaticImage
          className="menu-page__image"
          alt="página 2 del menu de tapas"
          src="../images/tapas.jpg"
          placeholder="tracedSVG"
          layout="constrained"
          objectFit="cover"
          width={1000}
        />
        <StaticImage
          className="reglament"
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

export default Tapas
