import {Router} from 'express';
const router = Router()
import{createProducto, readProductos, readProducto, deleteProducto, updateProducto} from '../controllers/productosController'
// router.post('/',createCliente)

router.post('/productos', createProducto)

//obtener todos los clientes
router.get('/productos', readProductos)

//obtener cliente
router.get('/productos/:idProducto', readProducto)

//actualizar cliente
router.put('/productos/:idProducto', updateProducto)

//eliminar cliente
router.delete('/productos/:idProducto', deleteProducto)


export default router