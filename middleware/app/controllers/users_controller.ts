import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
    async public({}: HttpContext){
        return{
            message: 'Public route - no middleware'
        }
    }

    async profile({}: HttpContext){
        return{
            message: 'User profile'
        }
    }

    async settings({}: HttpContext){
        return{
            message: 'User settings'
        }
    }
}
