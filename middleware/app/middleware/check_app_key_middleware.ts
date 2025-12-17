import type { HttpContext } from '@adonisjs/core/http'

export default class CheckAppKeyMiddleware {
  async handle(
    { request, response }: HttpContext,
    next: () => Promise<void>
  ) {
    const appKey = request.header('x-app-key')

    if (!appKey) {
      return response.unauthorized({
        message: 'App key missing',
      })
    }
    await next()
  }
}