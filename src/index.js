import express from 'express'
import { connectDB } from './config/db.js'
import { PORT } from './config/config.js'
import productosRoutes from './routes/productos.routes.js'

const app = express()

connectDB()

app.use('/api/productos', productosRoutes)

app.listen(PORT, () => console.log('Servidor en http://localhost:3000'))
