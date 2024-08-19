import React, { useState } from 'react';
import * as Chakra from '@chakra-ui/react';
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useProductStore } from '../store/product';

const ProductCard = ({product}) => {

const TextVCOlor = Chakra.useColorModeValue('gray.600','gray.200');
const bg  = Chakra.useColorModeValue('#fffbf2 ','gray.900')
const ModalButton = Chakra.useColorModeValue("black","#005b96");
const toast = Chakra.useToast();                                           // variable and methods declaration 
const {deletePros,updateProd} = useProductStore();
const { isOpen , onClose , onOpen }  = Chakra.useDisclosure();
const [updatedPro,setupdatedPro] = useState(product);


const Deleteicon = async (productID) => {
     const {success, message } = await deletePros(productID);
     if(!success){
     toast({
        title: "Error ",
        description: message,
        status: 'error',
        duration: 1500,
        isClosable: true,
      })
    }
    else{
        toast({
            title: "Product Deleted",
            description: message,
            status: 'success',
            duration: 1500,
            isClosable: true,
          })
    }
}
    
    
const UpdateIcon = async(pid,product) => { 
       const{success,message} = await updateProd(pid,product);
       if(success)
       toast({
        title: "Product Updated ",
        description: message,
        status: 'success',
        duration: 1500,
        isClosable: true,
      })
      else{
        toast({
            title: "OOPS! ",
            description: message,
            status: 'error',
            duration: 1500,
            isClosable: true,
        
      })
}
}

return (
    <Chakra.Box shadow={'lg'}
    rounded={'lg'}
    overflow={"hidden"}
    transition={"all 0.3s"}
    height={'350px'}
    _hover={{transform:'translateY(-5px)',shadow:'xl'}
    } bg={bg}>
     
    <Chakra.Image src={product.image} alt={product.name} h={48} w='full' objectFit={"cover"}></Chakra.Image>
    <Chakra.Box p={4}>
        <Chakra.Heading as={'h3'} size={'md'} mb={2}>
            {product.name}
        </Chakra.Heading>
        <Chakra.Text fontWeight={'bold'} fontSize={'xl'} color={TextVCOlor} mb={4}>
            ${product.price}
        </Chakra.Text>

        <Chakra.HStack>
            <Chakra.Button onClick={onOpen}><MdEdit /></Chakra.Button>
            <Chakra.Button _hover={{color:'red'}} onClick={()=>Deleteicon(product._id)}><MdDeleteForever /></Chakra.Button>
        </Chakra.HStack>
    </Chakra.Box>

    <Chakra.Modal isOpen={isOpen} onClose={onClose}>
        <Chakra.ModalOverlay/>

        <Chakra.ModalContent>
            <Chakra.ModalHeader>Update the Product</Chakra.ModalHeader>
            <Chakra.ModalCloseButton></Chakra.ModalCloseButton>
            <Chakra.ModalBody>
                <Chakra.VStack>
                    <Chakra.Input placeholder=' Product Name'
                    name='name'
                    value={updatedPro.name}
                    onChange={(e)=>setupdatedPro({...updatedPro,name:e.target.value})}></Chakra.Input>

<Chakra.Input placeholder='Price'
                    name='price'
                    value={updatedPro.price}
                    onChange={(e)=>setupdatedPro({...updatedPro,price:e.target.value})}></Chakra.Input>

<Chakra.Input placeholder='Image URL '
                    name='image'
                    value={updatedPro.image}
                    onChange={(e)=>setupdatedPro({...updatedPro,image:e.target.value})}></Chakra.Input>
                </Chakra.VStack>

            </Chakra.ModalBody>

            <Chakra.ModalFooter>
                <Chakra.Button bg={ModalButton} color={'white'} _hover={{ bg: {ModalButton} , transform:'scale(1.02)'}} onClick={()=>UpdateIcon(product._id,updatedPro)}>Submit Changes</Chakra.Button>
            </Chakra.ModalFooter>
        </Chakra.ModalContent>


        


    </Chakra.Modal>
    </Chakra.Box>
        
    
  )
}

export default ProductCard;
