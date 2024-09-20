'use strict'

const Schema = use('Schema')

class ReminderSchema extends Schema {
  up () {
    this.create('reminders', (table) => {
      table.increments()
      table.integer('event_id').unsigned().references('id').inTable('events')
      table.string('title').notNullable().index()
      table.timestamps()
    })
  }

  down () {
    this.drop('reminders')
  }
}

module.exports = ReminderSchema
