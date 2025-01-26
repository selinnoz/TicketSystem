// Express framework'ünü yükler
const express = require("express");

// Ticket modelini yükler
const Ticket = require("../models/Ticket");

// Express için bir router oluşturur
const router = express.Router();

// ≿ Tüm ticket'ları GET ile alma rotası
router.get("/", async (req, res) => {
  // Tüm ticket'ları MongoDB'den alır
  const tickets = await Ticket.find(); // query listesi https://mongoosejs.com/docs/queries.html
  res.json(tickets); // JSON formatında döner
});

// ≿ Yeni bir ticket oluşturma rotası
router.post("/", async (req, res) => {
  // İstekten başlık ve açıklama bilgilerini alır
  const { title, description } = req.body;

  // Yeni bir ticket oluşturur ve durumunu "open" olarak ayarlar
  const ticket = new Ticket({ title, description, status: "open" });

  // Ticket'ı MongoDB'ye kaydeder
  await ticket.save();

  // Başarı mesajını ve oluşturulan ticket'ı JSON formatında döner
  res.json({ message: " ≿ Ticket oluşturuldu", ticket });
});

// ≿ Başlığa göre ticket bulma rotası
router.get("/:title", async (req, res) => {
  const { title } = req.params; // Parametrelerden başlığı alır

  // Başlığa göre bir ticket arar
  const ticket = await Ticket.findOne({ title }); // query listesi https://mongoosejs.com/docs/queries.html

  // Ticket bulunamazsa hata döner
  if (!ticket) return res.status(404).json({ message: "Ticket bulunamadı" });

  // Bulunursa ticket'ı döner
  res.json(ticket);
});

// ≿ Bir ticket'ı kapatma rotası
router.put("/:title/close", async (req, res) => {
  const { title } = req.params; // Başlığı alır

  // Başlığa göre ticket arar
  const ticket = await Ticket.findOne({ title }); // query listesi https://mongoosejs.com/docs/queries.html

  // Ticket bulunamazsa hata döner
  if (!ticket) return res.status(404).json({ message: "Ticket bulunamadı" });

  // Ticket zaten kapalıysa bir mesaj döner
  if (ticket.status === "closed") {
    return res.json({
      message: `Ticket '${title}' zaten kapalı.`,
      ticket,
    });
  }

  // Aksi takdirde ticket durumunu "closed" olarak günceller
  const updatedTicket = await Ticket.findOneAndUpdate(
    { title },
    { status: "closed" },
    { new: true }
  ); // query listesi https://mongoosejs.com/docs/queries.html

  // Güncellenen ticket'ı ve mesajı döner
  res.json({ message: `Ticket '${title}' kapatıldı.`, ticket: updatedTicket });
});

// ≿ Ticket'ı tekrar açma rotası
router.put("/:title/reopen", async (req, res) => {
  const { title } = req.params; // Başlığı alır

  // Başlığa göre ticket arar
  const ticket = await Ticket.findOne({ title }); // query listesi https://mongoosejs.com/docs/queries.html

  // Ticket bulunamazsa hata döner
  if (!ticket) return res.status(404).json({ message: "Ticket bulunamadı" });

  // Ticket zaten açıksa bir mesaj döner
  if (ticket.status === "open") {
    return res.json({ message: `Ticket '${title}' zaten açık.`, ticket });
  }

  // Aksi takdirde ticket durumunu "open" olarak günceller
  const updatedTicket = await Ticket.findOneAndUpdate(
    { title },
    { status: "open" },
    { new: true }
  );

  // Güncellenen ticket'ı ve mesajı döner
  res.json({
    message: `Ticket '${title}' tekrar açıldı.`,
    ticket: updatedTicket,
  });
});

// Router'ı dışa aktarır
module.exports = router;
