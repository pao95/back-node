import express, {json} from 'express'
import morgan from 'morgan';


import productosRoutes from './routes/productos'
import clientesRoutes from './routes/clientes'
import pedidosRoutes from './routes/pedidos'



//cors permite que un cliente se conecte a otro servidor
import cors from 'cors'

//initialization
const app = express();

//middlewares

app.use(morgan('dev'));
app.use(json());

//habilitar cors
app.use(cors());


//routes

app.use('/', productosRoutes)
app.use('/', clientesRoutes)
app.use('/', pedidosRoutes)

export default app;