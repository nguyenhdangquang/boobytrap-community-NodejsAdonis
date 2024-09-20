'use strict'

const Model = use('Model')

class Event extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  reminders () {
    return this.hasMany('App/Models/Reminder')
  }

  attachments () {
    return this.hasMany('App/Models/Attachment')
  }
}

module.exports = Event
