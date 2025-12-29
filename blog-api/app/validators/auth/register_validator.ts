import vine from '@vinejs/vine'
import { UserRole } from '#models/user'

export const registerValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(6),
    role: vine.enum(Object.values(UserRole)).optional()
  })
)
