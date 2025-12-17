import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class RoleMiddleware {
  async handle({request, response}: HttpContext, next:()=> Promise<void>, roles: string[]) {
    const userRole = request.header('x-role')

    if(!userRole){
      return response.forbidden({
        message: 'User role missing'
      })
    }

    if(!roles.includes(userRole)){
      return response.forbidden({
        message: 'You are not allowed',
        roleRequired: roles,
      })
    }
    await next()
  }
}