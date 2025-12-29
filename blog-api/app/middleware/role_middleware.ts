import { Exception } from '@adonisjs/core/exceptions'
import type { HttpContext } from '@adonisjs/core/http'

export default class RoleMiddleware {
  async handle({auth}: HttpContext, next: ()=> Promise<void>, roles: string[]) {

    await auth.authenticate()

    const user = auth.user

    if(!user || !roles.includes(user.role)){
      throw new Exception('Forbidden', { status: 403})
    }

    await next()
  }
}