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
```
