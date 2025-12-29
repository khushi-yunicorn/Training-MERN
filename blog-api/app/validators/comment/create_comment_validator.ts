import vine from '@vinejs/vine'

export const createCommentValidator = vine.compile(
  vine.object({
    post_id: vine.number(),
    comment: vine.string().minLength(1),
  })
)
