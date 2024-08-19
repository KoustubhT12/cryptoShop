import * as Chakra from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useColorMode } from '@chakra-ui/react';
import { color } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useProActions } from '../hooks/useProActions';
import { useProductStore } from '../store/product';
import ProductCard from '../Components/ProductCard';



const HomePage = () => {
 // javascript code 
 
 const {colorMode} = useColorMode(); // to get the color mode
 const {fetchProducts,products} = useProductStore();


 useEffect(()=>{ 
  fetchProducts();         // this will be recalled at every re - render

 },[fetchProducts]);   // dependency 
 console.log(products)


  return (
    
    <div>
     
        <Chakra.Container maxW={'container.xl'} py={10}>
          <Chakra.VStack>
           <Chakra.Text fontWeight={'bold'}
           fontSize={"28"}
           bgGradient={colorMode==='light' ? "linear(to-t, #17202A, #000000)" : " linear(to-t,#2980B9,#F7F9F9)"} 
           bgClip={colorMode==='light' ? 'text' : 'text'} py={0} padding={3}> 
            Products Available
            </Chakra.Text>

            <Chakra.SimpleGrid
            columns={{base:1,md:2,lg:3}}
            spacing={'40px'}
            width={"full"}

            >
             {products.map((product)=>(
              <ProductCard key={product._id} product={product} />
             ))}

            </Chakra.SimpleGrid>






           {products.length === 0 && (
           <Chakra.Text py={20} fontSize={"xl"} fontWeight={"bold"} align={"center"}>No products in store
           <br />
            <Link to='/Create'>
            <Chakra.Text as='span' fontSize={'15'} color={"#2980b9"}> Click here to Add Products</Chakra.Text>
            </Link>
           </Chakra.Text>
         )}
          
      


          </Chakra.VStack>
          
          
          
          
          
           </Chakra.Container>
    </div>
  )
}

export default HomePage;
