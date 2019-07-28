import mongoose from 'mongoose'
import Bcrypt from 'bcrypt'
const SALT_LENGTH = 9

module.exports = function (schema, options) {
  schema.statics.getUserByUsername = function (userName, fields) {
    return this.findOne({ userName: userName }, fields && typeof fields === 'string' ? fields : 'userName firstName lastName email password status roles createdAt updatedAt idInc avatar').populate('people')
  }

  /**
   * Create instance method for hashing a password
   */
  schema.methods.hashPassword = function (password) {
    return Bcrypt.hash(password, SALT_LENGTH)
  }

  schema.methods.authenticate = function (password) {
    return Bcrypt.compare(password, this.password)
  }

  schema.statics.getPaginate = async function (query, dataInit) {
    const Model = this

    /* Filter */
    let queryArr = [
      { status: { $ne: 'archive' } }
    ]

    if (query.keyword && query.keyword.length > 0) {
      let re = new RegExp(query.keyword, 'i')
      queryArr.push({
        $or: [
          { name: re }
        ]
      })
    }


    let options = {
      select: query.select || '',
      sort: { createdAt: -1 },
      // lean: true,
      page: dataInit.page || 1,
      limit: dataInit.perPage || 20,
      populate: query.populate || []
    }
    console.log(queryArr)

    let pagination = await Model.paginate({ $and: queryArr }, options)
    if (pagination) {
      return {
        total: pagination.total,
        currentPage: pagination.page,
        perPage: dataInit.limit,
        lastPage: pagination.pages,
        data: pagination.docs
      }
    }
  }
  schema.statics.getCountByStatus = async function (query = {}) {
    const Model = this

    return {
      countAll: await Model.find({ status: { $ne: 'archive' } }).countDocuments(),
      countArchive: await Model.find({ status: 'archive' }).countDocuments()
    }
  }
}