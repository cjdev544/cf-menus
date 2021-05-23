import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FaArrowAltCircleLeft } from '@react-icons/all-files/fa/FaArrowAltCircleLeft.esm'
import './GoBack.scss'

const GoBack = () => {
  return (
    <AniLink cover bg="#b2b2b2" direction="left" to="/" className="goback">
      <FaArrowAltCircleLeft className="goback__arrow" />
      <h3>Volver a Inicio</h3>
    </AniLink>
  )
}

export default GoBack
