import { Router } from "https://deno.land/x/oak/mod.ts";
import {addProduct, deleteProduct, getProduct, getProducts, updateProduct} from "./controllers/products.ts";

const router = new Router();


router.get('/api/v1/products', getProducts);
router.post('/api/v1/products', addProduct);
router.get('/api/v1/products/:id', getProduct);
router.put('/api/v1/products/:id', updateProduct);
router.delete('/api/v1/products/:id', deleteProduct);

export default router;
