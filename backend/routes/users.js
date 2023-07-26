import express from 'express'
import { createUser, deleteUser, getAllUser, getUserByID, updateUser } from '../controllers/userController.js'
import { verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/', verifyUser, createUser)
router.put('/:id', verifyUser, updateUser)
router.delete('/:id', verifyUser, deleteUser)
router.get('/:id', verifyUser, getUserByID)
router.get('/', verifyUser, getAllUser)

export default router