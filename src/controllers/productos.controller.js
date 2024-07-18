import Producto from '../models/Producto.js'

export const index = async (req, res) => {
  const productos = await Producto.find()
  res.json(productos)
}
