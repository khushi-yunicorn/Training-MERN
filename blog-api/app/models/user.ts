import {
  BaseModel,
  column,
  beforeSave,
  hasMany,
} from '@adonisjs/lucid/orm'
import Hash from '@adonisjs/core/services/hash'
import { DateTime } from 'luxon'
import Post from '#models/post'
import Comment from '#models/comment'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

export default class User extends BaseModel {
  
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare role: UserRole

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Post)
  declare posts: HasMany<typeof Post>

  @hasMany(() => Comment)
  declare comments: HasMany<typeof Comment>
    static accessToken: any
    static accessTokens: any
    static auth_access_tokens: any

  //Auto hash password
  @beforeSave()
  static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  static accessTokens = DbAccessTokensProvider.forModel(User)
}
