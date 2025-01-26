# TicketSystem
# Basit Ticket Sistemi Projesi

## 1. Proje Tanımı

Bu projede, basit bir ticket sistemi geliştirilmiştir. Ticket sistemi, ticket oluşturma, listeleme ve kapama gibi temel fonksiyonları destekler. Proje, MongoDB veritabanı, Nginx sunucu yönlendirmesi ve Node.js backend uygulaması kullanılarak geliştirilmiştir. Docker ile konteynerize edilmiş bu sistem, uygulamanın tüm bileşenlerini kolayca çalıştırmayı sağlar.

## 2. Proje Amaçları

- Kullanıcıların **ticket** oluşturmasını, listelemesini ve kapatmasını sağlamak.
- **Docker Compose** kullanarak, uygulamanın geliştirilmesi ve çalıştırılması sürecini basitleştirmek.
- **Nginx** ile gelen HTTP isteklerini yönlendirerek backend ile MongoDB arasındaki bağlantıyı sağlamak.

## 3. Gerekli Araçlar ve Teknolojiler

- **Docker ve Docker Compose**: Projeyi konteynerize etmek ve bileşenleri yönetmek için.
- **Node.js (Express.js)**: Backend uygulaması için.
- **MongoDB**: Ticket verilerinin saklanacağı veritabanı.
- **Nginx**: HTTP isteklerini backend servisine yönlendiren proxy sunucu.

## 4. Kurulum ve Kullanım

### 4.1. Gereksinimler

Projenin çalışması için aşağıdaki yazılımların bilgisayarınızda yüklü olması gerekmektedir:

- **Docker** ve **Docker Compose**: Docker, konteyner teknolojisiyle uygulamanın farklı bileşenlerini çalıştırmamızı sağlar. [Docker'ı İndir](https://www.docker.com/get-started)
- **Git**: Projeyi GitHub'dan klonlamak için. [Git'i İndir](https://git-scm.com/)

### 4.2. Projeyi Çalıştırma

Proje GitHub'dan kolayca klonlanabilir ve Docker Compose ile çalıştırılabilir.

1. **Proje Reposunu Klonlayın**

   GitHub'dan projeyi klonlayın:

   ```bash
   git clone https://github.com/username/ticket-system.git
   cd ticket-system


Docker Compose ile Uygulamayı Başlatın

Tüm servisleri başlatmak için aşağıdaki komutu çalıştırın:
 ```bash
docker-compose up -d
Bu komut, backend, MongoDB ve Nginx servislerini başlatacaktır.

Uygulamayı Kontrol Edin

Uygulama, Docker ile başlatıldığında, Nginx proxy'si sayesinde, backend servisine HTTP istekleri yönlendirilir. Aşağıdaki URL'den API'yi kontrol edebilirsiniz:

http://localhost:8080
4.3. API Kullanımı
Aşağıdaki API uç noktalarını kullanarak ticket işlemleri gerçekleştirebilirsiniz.

POST /tickets: Yeni bir ticket oluşturur.

Girdi: { "title": "Başlık", "description": "Açıklama" }
Çıktı: { "message": "Ticket oluşturuldu", "ticket": {...} }
Ticket oluşturma örneği:
 ```bash
curl -X POST -H "Content-Type: application/json" \
-d '{"title": "Test Ticket", "description": "Bu bir test ticketidir."}' \
http://localhost:8080/tickets
GET /tickets: Tüm ticketleri listeleyen bir API uç noktasıdır.

Çıktı: [ { "title": "Test Ticket", "status": "open" }, ... ]
Ticket listeleme örneği:
 ```bash

curl http://localhost:8080/tickets
PUT /tickets/<title>: Belirtilen ticketi kapatır.

Çıktı: { "message": "Ticket '<title>' kapatıldı." }
Ticket kapatma örneği:
 ```bash
curl -X PUT http://localhost:8080/tickets/Test%20Ticket
