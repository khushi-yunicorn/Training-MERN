/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'
import PostsController from '#controllers/posts_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'


router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/auth/register', [AuthController, 'register'])
router.post('/auth/login', [AuthController, 'login'])

router.post('/auth/logout', [AuthController, 'logout']).use(middleware.auth())
router.get('/auth/me', [AuthController, 'me']).use(middleware.auth())

router.get('/posts',[PostsController, 'index'])
router.get('/posts/:id', [PostsController, 'show'])

router.post('/posts', [PostsController, 'store']).use(middleware.auth())

router.put('/posts/:id', [PostsController, 'update'])
  .use(middleware.auth())

router.delete('/posts/:id', [PostsController, 'destroy'])
  .use([
  middleware.auth(),
  middleware.role("admin"),
])