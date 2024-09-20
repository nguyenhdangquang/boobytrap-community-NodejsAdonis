'use strict'

const Schema = use('Schema')

class AttachmentSchema extends Schema {
  up () {
    this.create('attachments', (table) => {
      table.increments()
      table.integer('event_id').unsigned().references('id').inTable('events')
      table.string('url').notNullable()
      table.string('urn').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('attachments')
  }
}

module.exports = AttachmentSchema
