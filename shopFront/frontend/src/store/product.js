import {create} from "zustand";

export const useProductStore = create((set,get)=> 
     ({
       products:[],
       setProducts:(products)=> set({products}),
       createProduct: async (newProduct)=>{

        const CurrentProducts = get().products;    // storing all the current products in another object to compare it later 

        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {success:false,message:"please pass in all fields"}
        }
        const res = await fetch("http://localhost:5000/api/products",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
        })
        const data =  await res.json();
      
        set((state)=>({products:[...state.products,data.data]}));
        console.log(data.data)
        return {success:data.success,message:data.message};
       },

       fetchProducts: async()=>{ 
        const res = await fetch("http://localhost:5000/api/products");
        const resdata = await res.json();
        set({products:resdata.data});

       },

       deletePros: async(pID) => {
         const res = await fetch(`http://localhost:5000/api/products/${pID}`,{
          method:'DELETE',
         });

         const resData = await res.json();
         if(!resData.success){
          return {success:false,message:resData.message}
         }
         set((state)=>(
          {products:state.products.filter((product)=>product._id !== pID)}));
         return {success:resData.success,message:resData.message}
       },
       
       updateProd: async (pID,prod) => {
       if(!prod.name || !prod.price || !prod.image){
        return {success:false,message:"Please Fill in all the details"}
       }
         try{
       const Res = await fetch(`http://localhost:5000/api/products/${pID}`,{
        method:'PUT',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(prod),
       });

       const DataRes =  await Res.json();
       if (!DataRes.success){
        return {success:false,message:DataRes.message}
       }
       set((state)=>({
        products: state.products.map((product)=> (product._id === pID ? DataRes.data : product)),
       }));

       return {success:DataRes.success,message:DataRes.message};


     }
     catch(e){
          return {success:"false", message:"an error occured during updating the product"}
     }
       },
    }));