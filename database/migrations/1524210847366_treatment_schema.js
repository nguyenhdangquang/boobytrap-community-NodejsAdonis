'use strict'

const Schema = use('Schema')

class TreatmentSchema extends Schema {
  up () {
    this.create('treatments', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('meta_key').notNullable()
      table.integer('meta_value').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('treatments')
  }
}

module.exports = TreatmentSchema
