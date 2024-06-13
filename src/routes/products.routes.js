import { Router } from "express";
import { createProduct, deleteProduct, getProductById, getProducts, getProductsFiltered, getProductsOrdered, updateProduct } from "../controllers/products.controllers.js";

const router = Router();

router.get('/productos', getProducts);
router.post('/productos', createProduct);
router.put('/productos/:id', updateProduct);
router.delete('/productos/:id', deleteProduct);

//Filtros

router.get('/productos/:id', getProductById);
router.get('/productos/ordenados', getProductsOrdered)
router.get('/productos/filtrados', getProductsFiltered)

export default router;