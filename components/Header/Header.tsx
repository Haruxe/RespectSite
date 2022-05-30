import Image from 'next/image'
import React from 'react'
import { HeaderContainer, HeaderTitle } from './HeaderStyles'
import RespectLogo from '../../assets/RTB.png'
import { motion } from 'framer-motion'

function Header() {
  return (
    <motion.div className='mx-auto'>
        <HeaderContainer>
            <Image src={RespectLogo} height='100px' width='100px'/>
            <p className='my-auto ml-10 text-7xl font-serif'>
              Respect The Bean.
            </p>
          </HeaderContainer>
    </motion.div>
  )
}

export default Header