/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
/* eslint-disable prettier/prettier */

import router from '@adonisjs/core/services/router'
const UsersController = ()=> import('#controllers/users_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})


router.post('/users', [UsersController, 'store'])


router.get('/users', [UsersController, 'index'])

router.post('/login', [UsersController, 'login'])

router.put('/users/:id', [UsersController, 'update'])

router.delete('/users/:id', [UsersController, 'destroy'])
