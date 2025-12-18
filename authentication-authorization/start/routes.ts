/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

// Login
router.post('/login', [AuthController, 'login'])

// Register
router.post('/register', [AuthController, 'register'])

// Protected route
router.get('/profile', [AuthController, 'profile']).use([middleware.auth()])