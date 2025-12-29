import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import AuthService from '#services/auth_service'
import { registerValidator } from '#validators/auth/register_validator'
import { loginValidator } from '#validators/auth/login_validator'

@inject()
export default class AuthController {
    constructor(private authService: AuthService){}

    async register( {request, response}: HttpContext ){
        const payload = await request.validateUsing(registerValidator)
        const user = await this.authService.register(payload)

        return response.created({
            id: user.id,
            email: user.email,
            role: user.role
        })
    }

    async login({request, response}: HttpContext){
        const payload = await request.validateUsing(loginValidator)
        console.log(payload);
        const token = await this.authService.login(payload.email, payload.password)
        console.log(token);

        return response.ok(token)
    }

    async logout({auth, response}: HttpContext){
        return response.ok(await this.authService.logout(auth))
    }

    async me({auth, response}: HttpContext){
        const user = await this.authService.me(auth)
        return response.ok(user)
    }
}