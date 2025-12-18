import type { HttpContext } from '@adonisjs/core/http'
import jwt from 'jsonwebtoken'
import env from '#start/env'

export default class AuthMiddleware {
  async handle( {request, response}: HttpContext, next: ()=>Promise<void>) {
    const authHeader = request.header('authorization') || request.cookie('token')
    if (!authHeader){
      return response.unauthorized({
        message: 'Token missing',
      })
    }

    const token = authHeader.replace('Bearer ', '')
    try{
      const payload = jwt.verify(token, env.get('JWT_SECRET'))

      request.updateBody({
        user: payload,
      })

      await next()
    }
    catch{
      return response.unauthorized({
        message: 'Invalid token',
      })
    }
  }
}