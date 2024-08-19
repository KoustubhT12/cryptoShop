import {Box,Button,Container,Flex,Spacer,Text, HStack,useColorMode} from '@chakra-ui/react'
import { CgAdd } from "react-icons/cg";
import React from 'react'
import {Link, useNavigate } from 'react-router-dom';
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const {colorMode, toggleColorMode } = useColorMode();
  
  const navigate = useNavigate();
  return <Container maxW='1440px' px='4' bg={colorMode==="light"?"black":"#0c314a"}>
    <Flex h='16' alignItems='center' justifyContent='space-between'
      flexDirection={{
        base:'column',
        sm:'row'
      }}>
      
       <Text  bgGradient='linear(to-l, #1ec4dc, #7bd389)'
  bgClip='text'
  fontSize='2xl'
  fontWeight='extrabold'><Link to={"/"}>SereneShop.com</Link>     
  </Text>  
  <HStack spacing={2} alignItems="center">
    
    <Button onClick={() => navigate('/Create')}> 
    <CgAdd />                                             
    </Button>
<Button onClick={toggleColorMode}> 
 {colorMode==="light" ? <FaMoon />  : <IoIosSunny/> }
  </Button>
  </HStack>

   
    </Flex>
  </Container>
    
};

export default Navbar;

