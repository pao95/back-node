import {Router} from 'express';
const router = Router()
import { createPedido, readPedidos, readPedido, updatePedido, deletePedido } from '../controllers/pedidosController';
// router.post('/',createCliente)

router.post('/pedidos', createPedido)

//obtener todos los clientes
router.get('/pedidos', readPedidos)

//obtener cliente
router.get('/pedidos/:idPedido', readPedido)

//actualizar cliente
router.put('/pedidos/:idPedido', updatePedido)

//eliminar cliente
router.delete('/pedidos/:idPedido', deletePedido)


export default router