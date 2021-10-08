FROM nginx:latest
LABEL author="emiscode@gmail.com"
COPY /public /var/www/public
COPY /docker/config/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
CMD nginx -g "daemon off;"