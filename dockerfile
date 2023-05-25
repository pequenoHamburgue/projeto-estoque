FROM httpd:2.4-alpine3.18

COPY ./index.html /usr/local/apache2/htdocs/
