import Joi from 'joi';

export const schema = Joi.object({
  APP_ENV: Joi.string()
    .valid('development', 'production')
    .default('development'),
  APP_NAME: Joi.string().required(),
  APP_PORT: Joi.number().default(3000),
  APP_URL: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
});
