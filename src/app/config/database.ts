module.exports {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgress',
  password: 'docker',
  database: 'gocase',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}