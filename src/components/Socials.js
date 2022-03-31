import React from 'react'
import {  HStack, } from '@chakra-ui/layout'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Icon } from '@chakra-ui/react'


function Socials() {
  return (
    <HStack>
        <Icon as={FaGithub} boxSize='50' onClick={() => 
        window.open('https://github.com/lsguerre')}/>
        <Icon as={FaLinkedin} boxSize='50' onClick={() => 
        window.open('https://www.linkedin.com/in/lily-guerrero-b51033219/')}/>
    </HStack>
  )
}

export default Socials