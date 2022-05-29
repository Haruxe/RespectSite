import React from 'react'
import { NavElement, NavbarLinks, NavContainer, ImageContainer } from './NavbarStyles'
import RespectLogo from '../../assets/RTB.png'
import Image from 'next/image'

function Navbar() {
  return (
    <NavContainer>
      <ImageContainer>
      <Image src={RespectLogo} width='40px' height='40px' style={{cursor: 'pointer'}}/>
      </ImageContainer>
      <NavbarLinks>
        <NavElement href='#what'>What it Means</NavElement>
      </NavbarLinks>
    </NavContainer>
  )
}

export default Navbar