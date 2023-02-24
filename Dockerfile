FROM node:18.14-alpine

WORKDIR /

COPY setup.sh /
RUN chmod +x setup.sh

WORKDIR /app

RUN npm install -g npm@latest

EXPOSE 3000

CMD ["/bin/sh", "/setup.sh"]