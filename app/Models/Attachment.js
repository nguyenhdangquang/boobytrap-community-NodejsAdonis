'use strict'

const Model = use('Model')

class Attachment extends Model {
  event () {
    return this.belongsTo('App/Models/Event')
  }
}

module.exports = Attachment
