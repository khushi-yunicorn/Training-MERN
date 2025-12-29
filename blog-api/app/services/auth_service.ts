import User from '#models/user'
import { Exception } from '@adonisjs/core/exceptions'
import Hash from '@adonisjs/core/services/hash'

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

type RegisterData = {
  email: string
  password: string
  role?: UserRole
}

export default class AuthService {

    async register(data: RegisterData){
        const exists = await User.query().where('email', data.email).first()

        if(exists){
            throw new Exception('Email already exists', {status: 400})
        }

        const user = await User.create({
            email: data.email,
            password: data.password,
            role: data.role ?? UserRole.USER,
        })

        console.log(user.role);

        return user
    }

    async login( email:string, password: string){

        const user = await User.findBy('email', email)
        if(!user) throw new Exception('Invalid Credientials', {status: 401})

        const verified = await Hash.verify(user.password, password)
        console.log(verified);
        if(!verified) throw new Exception('Password Incorrect', {status: 401})
        
        
        const token =await User.accessTokens.create(user)
        console.log(token);
        return{
            user,
            token: token.value!.release()
        }
    }
 
    async logout(auth: any){

        await auth.authenticate()

        const user = auth.user
        const token = user?.currentAccessToken

        if(!token){
            throw new Exception('No active token found', {status: 401})
        }

        await User.accessTokens.delete(user, token.identifier)
        return {
            message: "Logout successfully"
        }
    }

    async me(auth: any){
        return await auth.authenticate()
    }
}