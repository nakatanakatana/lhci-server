const sqlDialect = process.env.LHCI_DATABASE_DIALECT
const databaseURL = process.env.LHCI_DATABASE_URL
const databaseSocketPath = process.env.LHCI_DATABASE_SOCKET_PATH
const database = process.env.LHCI_DATABASE
const username = process.env.LHCI_USERNAME
const password = process.env.LHCI_PASSWORD

const options = {}

if (databaseURL) {
  options.sqlConnectionUrl = databaseURL
} else if (databaseSocketPath) {
  options.sqlDialectOptions = {
    socketPath: databaseSocketPath
  }
}
if (database || username || password) {
  options.sequelizeOptions = {}
}
if (database) {
  options.sequelizeOptions.database = database
}
if (username) {
  options.sequelizeOptions.username = username
}
if (password) {
  options.sequelizeOptions.password = password
}

const config = {
  ci: {
    server: {
      port: 9001,
      storage: {
        storageMethod: 'sql',
        sqlDialect,
        ...options,
        },
      },
    },
};

console.log(JSON.stringify(config))
module.exports = config
