import Usuario from '../models/Usuario.js'
import bcrypt from 'bcrypt'
import { Types } from 'mongoose'

export const index = async (req, res) => {
  const usuarios = await Usuario.find()
  res.json(usuarios)
}

export const store = async (req, res) => {
  try {
    const { nombre, apellidos, username, password, rol } = req.body
    if (!nombre || !apellidos || !username || !password || !rol) return res.status(400).json({ message: 'Datos incompletos' })

    const hash = await bcrypt.hash(password, 10)
    const usuario = await Usuario.create({
      nombre,
      apellidos,
      username,
      password: hash,
      rol
    })

    res.status(201).json({ message: 'Usuario creado', data: usuario })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const update = async (req, res) => {
  try {
    const { id } = req.params
    if (!Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'ID inválido' })

    const { nombre, apellidos, username, password, rol } = req.body
    if (!nombre || !apellidos || !username || !password || !rol) return res.status(400).json({ message: 'Datos incompletos' })

    const usuario = await Usuario.findById(id)
    usuario.nombre = nombre
    usuario.apellidos = apellidos
    usuario.username = username
    usuario.password = await bcrypt.hash(password, 10)
    usuario.rol = rol
    usuario.save()

    res.json({ message: 'Usuario actualizado', data: usuario })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
