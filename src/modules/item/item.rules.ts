import Joi from 'joi';

export const StorePayloadSchema = Joi.object({
  name: Joi.string().required(),
  category_id: Joi.string().required(),
});

const sortBy = ['name'];
const sort = ['asc', 'desc'];

export const FindAllPayloadSchema = Joi.object({
  limit: Joi.number(),
  page: Joi.number(),
  sort_by: Joi.string().allow(...sortBy),
  sort: Joi.string().allow(...sort),
});
