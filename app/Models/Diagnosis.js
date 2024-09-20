'use strict'

const Model = use('Model')

class Diagnosis extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Diagnosis
