// Importa il modulo Express
const express = require('express');
const { query } = require('./db');
// Crea un'app Express
const app = express();

// Definisci una porta su cui l'app ascolterà
const port = 3000;

// Crea una route per gestire le richieste GET all'endpoint root
app.get('/', (req, res) => {
    res.send('Hello Daniele Sisto from Express!');

});

// Route per ottenere tutti gli utenti
app.get('/users', async (req, res) => {
    try {
        const result = await query('SELECT * FROM public."user";');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// Avvia il server e ascolta sulla porta specificata
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
