import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import MenuList from '../MenuList/MenuList'
import SocialMedia from '../SocialMedia'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <div className="home__image">
        <StaticImage
          className="home__image-img"
          src="../../images/central-food.png"
          alt="Logo central food"
          placeholder="tracedSVG"
          layout="constrained"
          width={300}
        />
      </div>
      <h2>EN LA VARIEDAD</h2>
      <h3 className="ligth">ESTA EL GUSTO</h3>
      <nav>
        <MenuList />
      </nav>
      <SocialMedia />
    </div>
  )
}

export default Home
