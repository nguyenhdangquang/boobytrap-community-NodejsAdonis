'use strict'

const Model = use('Model')

class Reminder extends Model {
  event () {
    return this.belongsTo('App/Models/Event')
  }
}

module.exports = Reminder
