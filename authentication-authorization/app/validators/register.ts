import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    fullname: vine.string().alpha(),
    email: vine.string().email(),
    password: vine.string().minLength(6),
  })
)
