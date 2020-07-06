
import Cliente from '../models/Cliente'
import Pedido from '../models/Pedido'


export async function createCliente(req, res){
  
    const cliente = new Cliente(req.body)

    try{
        await cliente.save()
        res.json({mensaje: 'Se agrego un nuevo cliente'})
    }catch(error){
        res.send(error)
       
    }
}

export async function readCliente(req, res){
    
    try{
        // const cliente = await Cliente.findOne(req.params.idCliente)
        const cliente = await Cliente.findOne({where: {id: req.params.idCliente},  include: Pedido})

      console.log("das"+cliente)
            res.json(cliente)
    }catch(error){
        res.send(error)
  
    }
}

export async function readClientes(req, res){

    
    try{
        const clientes = await Cliente.findAll({ include: Pedido })
        res.json(clientes)
    }catch(error){
        console.log(error)
       
    }
}

export async function updateCliente(req, res){
    try{
       
        const cliente = await Cliente.update(req.body,
            {where: {id: req.params.idCliente}})
      
            res.json({mensaje: 'Cliente actualizado'})
    }catch(error){
        res.send(error)
  
    }
}

export async function deleteCliente(req, res){
    try{
        await Cliente.destroy(  {where: {id: req.params.idCliente}});
        res.json({mensaje:'El cliente se ha eliminado'})
    }catch(error){
        res.send(error)
       
    }

}