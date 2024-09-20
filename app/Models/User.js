'use strict'

const Hash = use('Hash')
const Model = use('Model')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeCreate', async (userInstance) => {
      if (userInstance.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get hidden () {
    return ['password']
  }

  static get dates () {
    return super.dates.concat(['dob'])
  }

  static formatDates (field, value) {
    if (field === 'dob') {
      return value.format('YYYY-MM-DD')
    }
    return super.formatDates(field, value)
  }

  static get computed () {
    return ['fullname']
  }

  getFullname ({ first_name, last_name }) {
    return `${first_name} ${last_name}`
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  diagnosis () {
    return this.hasOne('App/Models/Diagnosis')
  }

  treatments () {
    return this.hasMany('App/Models/Treatment')
  }

  events () {
    return this.hasMany('App/Models/Event')
  }

  doctors () {
    return this.hasMany('App/Models/Doctor')
  }

  categories () {
    return this.hasMany('App/Models/Category')
  }
}

module.exports = User
