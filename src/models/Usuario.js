import { model, Schema } from 'mongoose'

const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  imagen: {
    type: String
  },
  rol: {
    type: String,
    required: true
  }
})

const Usuario = model('Usuario', usuarioSchema)

export default Usuario
