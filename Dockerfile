FROM node:latest
LABEL author="emiscode@gmail.com"
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT ["npm", "start"]
EXPOSE 3000

# docker run -d -p 8080:3000 -v "$(pwd):/var/www" -w "/var/www" node npm start
# docker build -f Dockerfile -t emiscode/node .