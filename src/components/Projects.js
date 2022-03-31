import React from 'react'
import { Flex, Heading, Box, Text } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import { FaSun, FaUtensils, FaGlassWhiskey } from 'react-icons/fa'

function Profile() {
  
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)')
  return (
    <Flex>
        <Box alignSelf='center' wrap='wrap' px='32' py='16'>
          <Heading fontWeight='extrabold' color='pink.400' size ='2xl'>
              projects:
          </Heading>
        </Box>
        <Box alignSelf='center' px='32' py='16'>
          
          <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}>
            <Flex rounded='xl' direction='column' mt={4} bgGradient='linear(to-t, blue.200, teal.500)' h='30vh' w='30vh' justify='flex-end' _hover={{ bgGradient: 'linear(to-t, teal.500, blue.200 )'}} onClick={() => 
                  window.open('https://rjblake88.github.io/weather-to-camp/')}>
              <Text color='white' p='4' fontsize='xl' fontWeight='semibold'>Weather to Camp<FaSun></FaSun></Text>
            </Flex>

            <Flex rounded='xl' direction='column' mt={4} ml={4} bgGradient='linear(to-b, blue.200, teal.500)' h='30vh' w='30vh' justify='flex-end' _hover={{ bgGradient: 'linear(to-b, teal.500, blue.200 )'}} onClick={() => 
                  window.open('https://fathomless-earth-96785.herokuapp.com/')}>
              <Text color='white' p='4' fontsize='xl' fontWeight='semibold'>Now We're Cookin'<FaUtensils></FaUtensils></Text>
            </Flex>

            <Flex rounded='xl' direction='column' mt={4} ml={4} bgGradient='linear(to-t, blue.200, teal.500)' h='30vh' w='30vh' justify='flex-end' _hover={{ bgGradient: 'linear(to-t, teal.500, blue.200 )'}} onClick={() => 
                  window.open('https://arcane-shelf-84573.herokuapp.com/')}>
              <Text color='white' p='4' fontsize='xl' fontWeight='semibold'>Whiskey Business<FaGlassWhiskey></FaGlassWhiskey></Text>
            </Flex>
          </Flex>

              
        </Box>
    </Flex>
  )
}

export default Profile