import type { HttpContext } from '@adonisjs/core/http'
import jwt from 'jsonwebtoken'
import env from '#start/env'
import hash from '@adonisjs/core/services/hash'
import { registerValidator } from '#validators/register'
import User from '#models/user'

const users: any[] = []

export default class AuthController {
    // Login API
    async login({ request, response}: HttpContext){
        const {email, password} = request.only(['email', 'password'])
        console.log(email, password);
        
        const user = await User.findBy('email', email)
        console.log(user);

        if (!user){
            return response.unauthorized({message: 'EMAIL credentials'})
        }

        // console.log(password);
        // Compare password
        const isValid = await hash.verify(user.password, password)

        if(!isValid){
            return response.unauthorized({message: 'Invalid credentials'})
        }

        // Create JWT token
        const token =jwt.sign({email: user.email}, 
                               env.get('JWT_SECRET'),
                               {expiresIn: '1h'}
                    )

        response.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax'
        })

        return{
            message: 'Login successful',
            token,
        }
    }

    // Register API
    async register({ request, response}: HttpContext){

        const data = await request.validateUsing(registerValidator)
        // const {fullname, email, password} = request.only(['fullname','email', 'password'])

        // Hash password
        data.password = await hash.make(data.password)

        const user = await User.create(data)

        return response.created({
            message: 'User registered',
            user
        })
    }

    // Protected route
    async profile({request}: HttpContext){
        const user = request.body().user
        return{
            message: 'Protected profile',
            user
        }
    }

    // Logout
    async logout({response}: HttpContext){
        response.clearCookie('token')
        return response.ok({
            message:'Logged out successfully.'
        })
    }

}