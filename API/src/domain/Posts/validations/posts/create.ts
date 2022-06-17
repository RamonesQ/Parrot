import { validate, Joi } from "express-validation";

export const create = validate({
  body: Joi.object({
    user_idUser: Joi.number(),
    content: Joi.string().max(300).required()
  }),
});