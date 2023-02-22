FROM node:18.14-alpine

WORKDIR /

COPY setup.sh /
RUN chmod +x setup.sh

WORKDIR /app

EXPOSE 3000

CMD ["/bin/sh", "/setup.sh"]