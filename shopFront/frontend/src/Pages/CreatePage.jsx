import * as Chakra from '@chakra-ui/react';
import React, { useState } from 'react'
import { useProductStore } from '../store/product';
import { useColorMode } from '@chakra-ui/react';
import { useProActions } from '../hooks/useProActions';
import { json } from 'react-router-dom';

const CreatePage = () => {
 const {colorMode} = useColorMode();
 const toast = Chakra.useToast();
 const [newProduct,setNewProduct] = useState({
  name:"",
  price:"",
  image:"",
 })
 
 const handleClearAll=()=>{ 
  setNewProduct({name:"",price:"",image:""})
 }

const {createProduct} = useProActions();

 const handleAddPro= async() => { 
     const {success,message} = await createProduct(newProduct);
     if(!success){
      toast({
        title:"Error",
        description:message,
        status:"error",
        isClosable:false,
        duration:1800,
      })
     }
    
     else{
        toast({
          title: "Product added",
          description: "The product is now added",
          status: 'success',
          duration: 1500,
          isClosable: true,

        })
        setNewProduct({name:"",price:"",image:""})
     }
 };




 // frontend 
  return <div>
    
    <Chakra.Container maxW="container.sm" >

      <Chakra.VStack spacing={8}>
        <Chakra.Heading as={"h1"} textAlign={"center"} mb={8} mt={"4rem"}>
          Add a new Product                                                      
        </Chakra.Heading>                                                      

        <Chakra.Box
        w={"full"}
        bg={Chakra.useColorModeValue("white","gray.800")}        // defination of box
        p={6}
        rounded={"lg"}
        shadow={"md"}>
          <Chakra.VStack
          spacing={4}>
         
          <Chakra.Input placeholder='Product name' name="name" value={newProduct.name} onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})} bg={colorMode==="light" ? "#fdfbe1" : "#171824"}/> 
          <Chakra.Input placeholder='Price' name="price" value={newProduct.price} onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})}bg={colorMode==="light" ? "#fdfbe1" : "#171824"}/>
          <Chakra.Input placeholder="Image Url" name="image" value={newProduct.image} onChange={(e)=>setNewProduct({...newProduct,image:e.target.value})}bg={colorMode==="light" ? "#fdfbe1" : "#171824"}/>  
          
          <Chakra.HStack>
          <Chakra.Button color={colorMode==="light" ? "black" : "linear(to-r, green.200, pink.500)" } onClick={handleAddPro}>Submit</Chakra.Button>
          <Chakra.Button onClick={handleClearAll}>Clear all</Chakra.Button>
          </Chakra.HStack>
           
          
          </Chakra.VStack>
         </Chakra.Box>
        </Chakra.VStack>
      </Chakra.Container> 
    </div>
}

export default CreatePage;