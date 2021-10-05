# DOCKER

`docker build -f Dockerfile -t emiscode/node .`

`docker run -d -p 8080:3000 emiscode/node`

<!-- docker run -d -p 8080:3000 -v "$(pwd):/var/www" -w "/var/www" node npm start -->