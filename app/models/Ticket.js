// Mongoose kütüphanesini yüklüyoruz.
const mongoose = require("mongoose");

// Ticket için bir şema tanımlıyoruz.
// Şema, MongoDB'deki koleksiyonumuzun yapısını belirler.
const TicketSchema = new mongoose.Schema({
  // Bu, string türünde bir veriyi temsil eder ve zorunludur (required: true). Boş kalamaz.
  title: { type: String, required: true },

  // Bu da string türünde bir veriyi temsil eder ve zorunludur (required: true). Boş kalamaz.
  description: { type: String, required: true },

  // Bu alan sadece "open" veya "closed" değerlerini alabilir (enum: ["open", "closed"]).
  // Varsayılan değer "open" olarak ayarlanmıştır (default: "open").
  status: { type: String, enum: ["open", "closed"], default: "open" },
});

// Ticket modeli, "TicketSchema" şemasını kullanarak MongoDB koleksiyonuna erişimi sağlar.
module.exports = mongoose.model("Ticket", TicketSchema);
