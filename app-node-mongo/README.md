# docker-node-mongo

Docker with node and mongo

`npm install`

`docker run -d --name my-mongo -p 27017:27017 mongo`

`../app-node-mongo/config/config.development.json`

for local

`"host": "localhost",`

for docker

`"host": "my-mongo",`

`npm start`
