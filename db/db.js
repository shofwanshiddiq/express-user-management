const knexConfig = require('./knexfile'); // Import configuration
const knex = require('knex')(knexConfig); // Initialize Knex instance

// Open Connection
knex.raw("SELECT 1")
    .then(() => {
        console.log("Database terkoneksi dengan sukses");
    })
    .catch((err) => {
        console.error("Gagal terkoneksi ke database", err);
    });

module.exports = knex;
