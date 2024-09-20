'use strict'

const Schema = use('Schema')

class DiagnosisSchema extends Schema {
  up () {
    this.create('diagnoses', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('meta_key').notNullable()
      table.integer('meta_value').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('diagnoses')
  }
}

module.exports = DiagnosisSchema
