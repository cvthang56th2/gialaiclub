import Joi from 'joi'

export default {
  login: {
    payload: {
      userName: Joi.string().description('userName'),
      password: Joi.string().description('password')
    },
    options: {
      allowUnknown: true
    }
  }
}