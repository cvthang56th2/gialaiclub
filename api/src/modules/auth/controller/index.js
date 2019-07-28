import Boom from 'boom'
import mongoose from 'mongoose'

const User = mongoose.model('User')

const login = async request => {
  try {
    console.log(request)
    return true
  } catch (error) {
    return Boom.badRequest(error)
  }
}

export default {
  login
}