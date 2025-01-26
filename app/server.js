// .env dosyasındaki ortam değişkenlerini yükler
require("dotenv").config();

// Express framework'ü yükler
const express = require("express");

// MongoDB ile bağlantı için mongoose kütüphanesini yükler
const mongoose = require("mongoose");

// Gelen isteklerde JSON verilerini okumak için body-parser'ı yükler
const bodyParser = require("body-parser");

// Express uygulamasını oluşturur
const app = express();

// Tüm gelen istekler için body-parser JSON middleware'ini kullanır
app.use(bodyParser.json());

// MongoDB ile bağlantıyı kurar
mongoose
  .connect(process.env.MONGO_URI) // .env dosyasındaki MONGO_URI kullanılır
  .then(() =>
    console.log(
      "≿—————-　★　—————-≾\n MongoDB bağlantısı kuruldu\n≿—————-　★　—————-≾"
    )
  )
  .catch((err) => console.error(err));

// ≿—————-　★　—————-≾
//       Rotalar
// ≿—————-　★　—————-≾

// Ticket rotalarını yükler
const ticketRoutes = require("./routes/ticketRoutes");

// "/tickets" için rotaları kullanıma alır
app.use("/tickets", ticketRoutes);

// Sunucunun çalışacağı portu tanımlar (.env içindeki port ya da 3000)
const PORT = process.env.PORT || 3000;

// Sunucuyu başlatır
app.listen(PORT, () =>
  console.log(`\nSunucu ≿ port ${PORT} ≾ üzerinde çalışıyor\n`)
);
