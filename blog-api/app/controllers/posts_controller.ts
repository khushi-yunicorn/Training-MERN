import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { createPostValidator } from '#validators/post/create_post_validator'
import { updatePostValidator } from '#validators/post/update_post_validator'
import PostService from '#services/post_service'

@inject()
export default class PostsController {
    constructor(private postService: PostService) { }

    async index() {
        return this.postService.all()
    }

    async show({ params }: HttpContext) {
        return this.postService.find(params.id)
    }

    async store({ request, auth }: HttpContext) {
        const payload = await request.validateUsing(createPostValidator)
        return this.postService.create(auth.user!, payload)
    }

    async update({ params, request, auth }: HttpContext) {
        const payload = await request.validateUsing(updatePostValidator)
        return this.postService.update(params.id, auth.user!, payload)
    }

    async destroy({ params, auth, response }: HttpContext) {
        const result = await this.postService.delete(params.id, auth.user!)
        return response.ok(result)
    }
}