import React from 'react'
import Button from '../Button'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp'
import './SocialMedia.scss'

const SocialMedia = () => {
  return (
    <div className="social">
      <h4>Siguenos en nuestras redes</h4>
      <div className="social__group">
        <Button
          name="instagram"
          href="https://www.instagram.com/centrafoodmalaga/"
        >
          <FaInstagram className="social__group-icon" />
        </Button>
        <Button
          name="facebook"
          href="https://www.facebook.com/Centralfoodmalaga"
        >
          <FaFacebook className="social__group-icon" />
        </Button>
        <Button
          name="whatsapp"
          href="https://api.whatsapp.com/send?phone=+34649718831"
        >
          <FaWhatsapp className="social__group-icon" />
        </Button>
      </div>
    </div>
  )
}

export default SocialMedia
