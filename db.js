const { Pool } = require('pg');

// Configura la connessione al database
const pool = new Pool({
  user: 'myusername',       // Sostituisci con il tuo username
  //host: 'localhost',    // Sostituisci con l'host del tuo database, ad esempio 'db' se usi Docker
  host: 'host.docker.internal',    // Sostituisci con l'host del tuo database, ad esempio 'db' se usi Docker
  database: 'postgres', // Sostituisci con il nome del tuo database
  password: 'mypassword', // Sostituisci con la tua password
  port: 5432,           // Porta predefinita di PostgreSQL
});

// Funzione per eseguire una query
const query = async (text, params) => {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res;
  }
  catch(err){
    console.log(JSON.stringify(err))
  } finally {
    client.release();
  }
};

module.exports = { query, pool };
