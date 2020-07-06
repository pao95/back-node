import {Router} from 'express';
const router = Router()
import{createCliente, readClientes, readCliente, updateCliente, deleteCliente} from '../controllers/clientesController'
// router.post('/',createCliente)

router.post('/clientes', createCliente)

//obtener todos los clientes
router.get('/clientes', readClientes)

//obtener cliente
router.get('/clientes/:idCliente', readCliente)

//actualizar cliente
router.put('/clientes/:idCliente', updateCliente)

//eliminar cliente
router.delete('/clientes/:idCliente', deleteCliente)


export default router