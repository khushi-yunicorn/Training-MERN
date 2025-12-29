import Post from '#models/post'
import { Exception } from '@adonisjs/core/exceptions'
import { UserRole } from './auth_service.js'

export default class PostService {

  async create(user: any, data: any) {
    const post = await Post.create({
      title: data.title,
      content: data.content,
      userId: user.id, 
    })

    return post
  }

  async all() {
    return await Post.query().preload('user')
  }

  async find(postId: number) {
    return await Post.query()
      .where('id', postId)
      .preload('user')
      .firstOrFail()
  }

  async update(postId: number, user: any, data: any) {
    const post = await Post.findOrFail(postId)

    // AUTHORIZATION CHECK
    if (user.role !== 'admin' && post.userId !== user.id) {
      throw new Exception('You are not allowed to update this post', {
        status: 403,
      })
    }

    post.merge(data)
    await post.save()

    return post
  }

  async delete(postId: number, user: any) {
    const post = await Post.findOrFail(postId)

    // AUTHORIZATION CHECK
    if (user.role !== UserRole.ADMIN && post.userId !== user.id) {
      throw new Exception('You are not allowed to delete this post', {
        status: 403,
      })
    }

    await post.delete()
    return {
      message: "Post deleted successfully"
    }
  }
}
