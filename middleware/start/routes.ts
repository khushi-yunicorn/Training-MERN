/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import UsersController from '#controllers/users_controller'

router.get('/public',[UsersController, 'public'])

router.get('/test', async()=>{
  return { message: "Middleware works"}
}).use([middleware.checkAppKey()])

// router.group(()=>{
//   router.get('/profile', [UsersController, 'profile'])
//   router.get('/settings', [UsersController, 'settings'])
// }).use([middleware.checkAppKey()])

router.group(()=>{
  router.get('/profile', [UsersController, 'profile'])

  router.get('/admin', async()=>{
    return { message: 'Admin dashboard'}
  }).use([middleware.role('admin')])

}).use([middleware.checkAppKey()])