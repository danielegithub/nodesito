// Importa il modulo Express
const express = require('express');
const path = require('path');
const { query } = require('./db');
const { generateUsers, getUsers } = require('./userGenerator');
// Crea un'app Express
const app = express();

// Definisci una porta su cui l'app ascolterà
const port = 3000;

// Configura il parsing del body delle richieste
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configura la cartella per i file statici
app.use('/public', express.static(path.join(__dirname, 'public')));

// Route per la view HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

// Route per la generazione degli utenti
app.post('/generate-users', async (req, res) => {
    const { numberOfUsers } = req.body;
    if (!numberOfUsers || isNaN(numberOfUsers)) {
        return res.status(400).send('Il numero di utenti non è valido.');
    }

    try {
        await generateUsers(parseInt(numberOfUsers, 10));
        utenti = {
            'utenti_generati' : numberOfUsers
        }
        return res.json(utenti);
    } catch (error) {
        return res.json(error.message);
    }
});

// Route per ottenere tutti gli utenti
app.get('/users', async (req, res) => {
    try {
        const result = await query('SELECT * FROM utenti;');
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
