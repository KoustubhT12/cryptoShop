import { useProductStore } from "../store/product";

export const useProActions=()=>{
const createProduct = useProductStore((state)=>state.createProduct);
return {createProduct};
}

