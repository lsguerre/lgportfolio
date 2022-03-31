import React from 'react'
import {  Stack, Flex, Box, Text  } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'

function Header() {

    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)')

  return (
    <Stack>
        <Flex direction={isNotSmallerScreen ? 'row' : 'column'}
        spacing='200px' p={isNotSmallerScreen ? '32' : '0'}
        alignSelf='flex/start'>
            <Box mt={isNotSmallerScreen ? '0' : 16 } align='flex-start'>
                <Text fontSize='5xl' fontWeight='semibold'>hey there, I'm</Text>
                <Text fontSize='7xl' fontWeight='semibold' bgGradient='linear(to-r, pink.100, pink.300, purple.200, purple.300) ' bgClip='text'>lily guerrero</Text>
                <Text fontSize='xl'>new to coding, but excited to learn. let's see what we can make together!</Text>
                <Text fontSize='xl'>hoping to make my mark in the tech world and kick start a new career!</Text>
            </Box>

        </Flex>
    </Stack>
  )
}

export default Header