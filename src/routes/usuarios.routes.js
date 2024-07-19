import { Router } from 'express'
import { index, store, update } from '../controllers/usuarios.controller.js'

const router = Router()

router.get('/', index)
router.post('/', store)
router.put('/:id', update)

export default router
