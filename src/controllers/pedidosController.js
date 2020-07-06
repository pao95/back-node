
import Pedido from '../models/Pedido'
import Cliente from '../models/Cliente'
import Producto from '../models/Producto'


export async function createPedido(req, res){
  
    const pedido = new Pedido(req.body)

    try{
        await pedido.save()
        res.json({mensaje: 'Se agrego un nuevo pedido'})
    }catch(error){
        res.send(error)
       
    }
}

export async function readPedido(req, res){
    
    try{
        const pedido = await Pedido.findOne({where: {id: req.params.idPedido}, include: [{model: Producto},{model: Cliente}]})
  
            res.json(pedido)
    }catch(error){
        res.send(error)
  
    }
}

export async function readPedidos(req, res){

    
    try{
        const pedidos = await Pedido.findAll({ include: [{model: Cliente}, {model:Producto}] })
        res.json(pedidos)
    }catch(error){
        console.log(error)
       
    }
}

export async function updatePedido(req, res){
    try{
       
        const pedido = await Pedido.update(req.body,
            {where: {id: req.params.idPedido}})
      
            res.json({mensaje: 'Pedido actualizado'})
    }catch(error){
        res.send(error)
  
    }
}

export async function deletePedido(req, res){
    try{
        await Pedido.destroy(  {where: {id: req.params.idPedido}});
        res.json({mensaje:'El pedido se ha eliminado'})
    }catch(error){
        res.send(error)
       
    }

}