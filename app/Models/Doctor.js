'use strict'

const Model = use('Model')

class Doctor extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Doctor
