# Usa l'immagine base di Node.js
FROM node:18

# Crea una directory per l'applicazione
WORKDIR /usr/src/app

# Copia i file package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto dei file dell'applicazione
COPY . .

# Espone la porta su cui l'applicazione ascolterà
EXPOSE 3000

# Comando per avviare l'applicazione
CMD [ "node", "index.js" ]
