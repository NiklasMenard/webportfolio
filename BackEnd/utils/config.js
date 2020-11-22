let db_client_path = "../pools/dev_db"

if (process.env.NODE_ENV === 'prod') { db_client_path = "../pools/prod_db"}

const client = require(db_client_path);


module.exports = client