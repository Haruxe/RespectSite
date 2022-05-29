import React from 'react'
import { Indent } from 'styled-icons/fa-solid'
import { SectionBreak, SectionHeader } from '../../styles/GlobalStyles'
import { HeaderText } from './AboutStyles'
import {motion} from 'framer-motion'
import {SECTIONS_INFORMATION} from '../../sections'

function About() {
  return (
    <>
    {SECTIONS_INFORMATION.map((e, i) =>
    <>
    <SectionBreak id={e.tag}/>
    <motion.div whileInView={{x: 0}} initial={{x:-700}} transition={{duration: 1, type: 'spring'}}>
    <SectionHeader>
        {e.title}
    </SectionHeader>
    </motion.div>
    <HeaderText>
          {e.body}
    </HeaderText>
    </>
    )}
        
    </>
  )
}

export default About