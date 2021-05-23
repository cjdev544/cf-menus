import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import AppLayout from '../components/AppLayout/AppLayout'

const Sushiguay = () => {
  return (
    <AppLayout>
      <div className="menu-page">
        <StaticImage
          className="menu-page__image"
          src="../images/sushiguay1.jpg"
          alt="página 1 del menu sushiguay"
          placeholder="tracedSVG"
          layout="constrained"
          objectFit="cover"
          width={1000}
        />
        <StaticImage
          className="menu-page__image"
          alt="página 2 del menu sushiguay"
          src="../images/sushiguay2.jpg"
          placeholder="tracedSVG"
          layout="constrained"
          objectFit="cover"
          width={1000}
        />
      </div>
    </AppLayout>
  )
}

export default Sushiguay
