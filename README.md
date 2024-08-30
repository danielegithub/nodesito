# DOCKER #
``` shell
docker pull postgres
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres



docker pull dpage/pgadmin4:latest

docker run --name my-pgadmin -p 82:80 -e 'PGADMIN_DEFAULT_EMAIL=user@domain.local' -e 'PGADMIN_DEFAULT_PASSWORD=postgresmaster'-d dpage/pgadmin4
```

Creare il volume data è importante 
```
docker volume create postgres_data
```
e poi lanciare docker, in modo da garantire la persistenza e non il volume temporaneo che crea nell'immagine
```
docker run --name postgresql -e POSTGRES_USER=myusername -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -v postgres_data:/var/lib/postgresql/data -d postgres
```
Posso anche creare la mia network e far ascoltare postgres su un'altro ip che non sia localhost
```
docker network create my_custom_network
docker run --name my_postgres --network my_custom_network -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```
Oppure su un mio "IP" (attenzione, l'ip deve essere quello della macchina fisica che ospita docker)
```
docker run --name my_postgres -e POSTGRES_PASSWORD=mysecretpassword -p 192.168.1.XXX:5432:5432 -d postgres
```
json risultante
```json
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' my_postgres
```

PER AVVIARE NODE
```
docker run -p 3000:3000 -v C:/Users/Daniele/Desktop/nodesito:/usr/src/app my-node-app npm run start:dev

docker run -p 3000:3000 -v C:/Users/Daniele/Desktop/nodesito:/usr/src/app --name my-express-app my-node-app npm run start:dev
```
# CONDA #
```
conda create --prefix ./env pandas numpy matplotlib scikit-learn 

#
# To activate this environment, use
#
#     $ conda activate "C:\Users\Daniele\Desktop\Machine Learning\env"
#
# To deactivate an active environment, use
#
#     $ conda deactivate
```

# POSTGRES #
``` sql
CREATE TABLE utenti (
    id SERIAL PRIMARY KEY,
    nomeutente VARCHAR(255) NOT NULL,
    datacancellazione TIMESTAMP NULL,
    datacreazione TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO utenti (nomeutente) VALUES
    ('MarioRossi'),
    ('AnnaBianchi'),
    ('LucaVerdi'),
    ('GiuliaNeri');
-- Per avere 1000 utenti casuali
INSERT INTO utenti (nomeutente)
SELECT 
    concat('user_', floor(random() * 100000)::text || substr(md5(random()::text), 1, 6))
FROM 
    generate_series(1, 1000);
-- Per avere 1000 utenti con email casuale
INSERT INTO utenti (nomeutente)
SELECT 
    lower(concat(
        substr(md5(random()::text), 1, 8), 
        '@',
        substr(md5(random()::text), 1, 5),
        '.com'
    ))
FROM 
    generate_series(1, 1000);

```
