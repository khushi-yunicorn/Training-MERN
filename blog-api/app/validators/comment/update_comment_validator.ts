import vine from '@vinejs/vine'

export const updateCommentValidator = vine.compile(
  vine.object({
    comment: vine.string().minLength(1),
  })
)
