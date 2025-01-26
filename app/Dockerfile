FROM node:16

WORKDIR /usr/src/app

# package.json dosyasını kopyala
COPY app/package*.json ./

# npm install komutunu çalıştır
RUN npm install

# Kalan dosyaları kopyala
COPY app/ .

EXPOSE 3000
CMD ["node", "server.js"]
