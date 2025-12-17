import type { HttpContext } from '@adonisjs/core/http'
import UserService from '#services/user_service'
import { inject } from '@adonisjs/core'
import User from '#models/user'
import { storeUserValidator } from '#validators/store_user'
import Hash from '@adonisjs/core/services/hash'
import { updateUserValidator } from '#validators/update_user'

@inject()
export default class UsersController {
  constructor(private userService: UserService) {}

  async store({ request }: HttpContext) {
    //const data = request.only(['email', 'password']) // without validation

    // With validation
    const data = await request.validateUsing(storeUserValidator)

    // without hashing RISK of password leak
    // const user = await User.create(data)

    // With hashing
    data.password = await Hash.make(data.password)
    const user = await User.create(data)
    return user
  }

  async index() {
    return await User.all()
  }

  async login({ request, response }: HttpContext) {
    // Get data from request
    const { email, password } = request.only(['email', 'password'])

    // Find the user
    const user = await User.findBy('email', email)

    if (!user) {
      return response.unauthorized({ message: 'Invalid credentials' })
    }

    // Verify password
    const isValid = await Hash.verify(user.password, password)

    if (!isValid) {
      return response.unauthorized({ message: 'Invalid credentials' })
    }

    // Success
    return response.ok({ message: 'Login successful' })
  }

  // UPDATE THE DATA
  async update( {params, request, response }: HttpContext){
    const user = await User.find(params.id)

    if(!user){
      return response.notFound({ message: "User Not Found"})
    }

    console.log(user);
    const data = await request.validateUsing(updateUserValidator)
    user.merge(data)

    await user.save()

    return user
  }

  // DELETE THE DATA
  async destroy( {params, response}: HttpContext){
    const user = await User.find(params.id)

    if(!user){
      return response.notFound({ message: 'User not Found!'})
    }

    await user.delete()

    return {
      message: "User deleted successfully"
    }
  }
}
