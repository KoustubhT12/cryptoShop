import express from 'express';
import { getProducts } from '../controllers/product.controller.js';
import { addProduct } from '../controllers/product.controller.js';
import { updatePro } from '../controllers/product.controller.js';
import { deletePro } from '../controllers/product.controller.js';


const router = express.Router();

router.get("/",getProducts);
router.post('/',addProduct);
router.delete("/:id",deletePro)
router.put("/:id",updatePro);


export default router;
