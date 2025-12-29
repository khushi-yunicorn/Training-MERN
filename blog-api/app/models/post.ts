import {
  BaseModel,
  column,
  belongsTo,
  hasMany,
} from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import Comment from '#models/comment'
import { DateTime } from 'luxon'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare title: string

  @column()
  declare content: string

  @column()
  declare published: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany(()=>Comment)
  declare comments: HasMany<typeof Comment>
}
