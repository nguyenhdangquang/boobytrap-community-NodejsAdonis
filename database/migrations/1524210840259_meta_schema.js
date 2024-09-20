'use strict'

const Schema = use('Schema')

class MetaSchema extends Schema {
  up () {
    this.create('metas', (table) => {
      table.increments()
      table.string('value').notNullable().index()
      table.integer('parent').notNullable()
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('metas')
  }
}

module.exports = MetaSchema
