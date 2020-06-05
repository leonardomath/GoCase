import { Router } from 'express'
import UserController from './app/controllers/UserController'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json('ok')
})

routes.post('/user', UserController.store)

export default routes