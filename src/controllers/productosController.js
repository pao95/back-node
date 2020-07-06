
import Producto from '../models/Producto'
import Pedido from '../models/Pedido'


export async function createProducto(req, res){
  
    const producto = new Producto(req.body)

    try{
        await producto.save()
        res.json({mensaje: 'Se agrego un nuevo producto'})
    }catch(error){
        res.send(error)
       
    }
}

export async function readProducto(req, res){
    
    try{
        // const cliente = await Cliente.findOne(req.params.idCliente)
        const producto = await Producto.findOne({where: {id: req.params.idProducto}, include: Pedido})

  
            res.json(producto)
    }catch(error){
        res.send(error)
  
    }
}

export async function readProductos(req, res){

    
    try{
        const productos = await Producto.findAll({include: Pedido})
        res.json(productos)
    }catch(error){
        console.log(error)
       
    }
}

export async function updateProducto(req, res){
    try{
       
        const producto = await Producto.update(req.body,
            {where: {id: req.params.idProducto}})
      
            res.json({mensaje: 'Producto actualizado'})
    }catch(error){
        res.send(error)
  
    }
}

export async function deleteProducto(req, res){
    try{
        await Producto.destroy(  {where: {id: req.params.idProducto}});
        res.json({mensaje:'El producto se ha eliminado'})
    }catch(error){
        res.send(error)
       
    }

}