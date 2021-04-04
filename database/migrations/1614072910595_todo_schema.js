'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TodoSchema extends Schema {
  up () {
    this.create('todos', (table) => {
      table.increments()
      table.string('title', 190).notNullable().unique()
      table.text('description')
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('Users.id').onDelete('cascade');
      table.timestamps()
    })
  }

  down () {
    this.drop('todos')
  }
}

module.exports = TodoSchema
