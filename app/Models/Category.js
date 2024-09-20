'use strict'

const Model = use('Model')

class Category extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Category
