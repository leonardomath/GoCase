import { Sequelize } from 'sequelize'

const models = []

class Database {
  connection: any
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize('gocase', 'postgres', '', { host: 'localhost', dialect: 'postgres',})
  }
}