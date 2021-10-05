# docker-node-mongo

Docker with node and mongo

`npm install`

`docker run -d --name my-mongo -p 27017:27017 mongo`

using custom docker network

`docker run -d --name my-mongo --network my-network -p 27017:27017 mongo`

`../app-node-mongo/config/config.development.json`

for local

`"host": "localhost",`

for docker

`"host": "my-mongo",`

using docker image

`docker build -f Dockerfile -t emiscode/node-mongo .`

`docker run -d -p 8080:3000 --network my-network emiscode/node-mongo`

using node local

`npm start`
