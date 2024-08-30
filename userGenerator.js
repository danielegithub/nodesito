const { faker } = require('@faker-js/faker');
const { pool } = require('./db');

async function generateUsers(numberOfUsers) {
  
  const client = await pool.connect();
  try {
    for (let i = 0; i < numberOfUsers; i++) {

      const nomeutente = faker.internet.email();
      console.log(nomeutente);
      await client.query(
        'INSERT INTO utenti (nomeutente) VALUES ($1)',
        [nomeutente]
      );
    }
    console.log(`${numberOfUsers} utenti generati con successo.`);
  } catch (error) {
    throw new Error(error.message)
  } finally {
    client.release();
  }
}

// Funzione per ottenere tutti gli utenti
async function getUsers() {
  const client = await pool.connect();

  try {
    const res = await client.query('SELECT * FROM utenti');
    return res.rows;
  } catch (error) {
    throw new Error(error.message)
  } finally {
    client.release();
  }
}

module.exports = { generateUsers, getUsers };
