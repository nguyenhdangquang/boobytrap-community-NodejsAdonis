'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('first_name', 20).notNullable()
      table.string('last_name', 20).notNullable()
      table.date('dob')
      table.text('bio')
      table.string('confirmation_code', 5)
      table.boolean('upgraded').defaultTo(false) // Is user allowed to use trappmatch
      table.boolean('email_verified').defaultTo(false) // Did user verified email
      table.boolean('is_active').defaultTo(true) // Is user active
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
