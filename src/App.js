import './App.css';
import { VStack, Flex, Heading, Spacer} from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from './components/Header'
import Socials from './components/Socials'
import Projects from './components/Projects'

function App() {
  return (
  <VStack p='5'> 
      <Flex w='100%' >   
          <Heading ml='8' fontSize='md' fontWeight='semibold' color='pink.200'>
            lilyguerrero
          </Heading>
      <Spacer/>
        <IconButton ml='3' icon={<FaGithub/>} isRound='true' onClick={() => 
          window.open('https://github.com/lsguerre')}></IconButton>
        <IconButton ml='3' icon={<FaLinkedin/>} isRound='true' onClick={() => 
          window.open('https://www.linkedin.com/in/lily-guerrero-b51033219/')}></IconButton>
      </Flex>
      <Header></Header>
      <Projects></Projects>
      <Socials></Socials>
  </VStack>

  )
}

export default App;
