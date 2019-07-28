import _ from 'lodash'
import Controller from '../controller/index'
import Validate from '../validate/index'

export default [{
    method: 'POST',
    path: '/auth/login',
    options: {
      handler: Controller.login,
      validate: Validate.login,
      description: 'Auth login',
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          responses: { '400': { 'description': 'Bad Request' } },
          payloadType: 'form'
        }
      }
    }
  }
]