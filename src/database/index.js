import { Sequelize } from 'sequelize'
import configDatabase from '../config/database'

const models = []

class Database {

  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(configDatabase)
  }
}

export default new Database()