# TicketSystem

1. Proje Tanımı
Bu projede, basit bir ticket sistemi geliştirilmiştir. Ticket sistemi, ticket oluşturma, listeleme ve kapama gibi temel fonksiyonları destekler. Proje, MongoDB veritabanı, Nginx sunucu yönlendirmesi ve Node.js backend uygulaması kullanılarak geliştirilmiştir. Docker ile konteynerize edilmiş bu sistem, uygulamanın tüm bileşenlerini kolayca çalıştırmayı sağlar.

2. Proje Amaçları
Kullanıcıların ticket oluşturmasını, listelemesini ve kapatmasını sağlamak.
Docker Compose kullanarak, uygulamanın geliştirilmesi ve çalıştırılması sürecini basitleştirmek.
Nginx ile gelen HTTP isteklerini yönlendirerek backend ile MongoDB arasındaki bağlantıyı sağlamak.
3. Gerekli Araçlar ve Teknolojiler
Docker ve Docker Compose: Projeyi konteynerize etmek ve bileşenleri yönetmek için.
Node.js (Express.js): Backend uygulaması için.
MongoDB: Ticket verilerinin saklanacağı veritabanı.
Nginx: HTTP isteklerini backend servisine yönlendiren proxy sunucu.

4. Kurulum ve Kullanım
4.1. Gereksinimler
Projenin çalışması için aşağıdaki yazılımların bilgisayarınızda yüklü olması gerekmektedir:

Docker ve Docker Compose: Docker, konteyner teknolojisiyle uygulamanın farklı bileşenlerini çalıştırmamızı sağlar. Docker'ı İndir
Git: Projeyi GitHub'dan klonlamak için. Git'i İndir
4.2. Projeyi Çalıştırma
Proje GitHub'dan kolayca klonlanabilir ve Docker Compose ile çalıştırılabilir.

Proje Reposunu Klonlayın

GitHub'dan projeyi klonlayın:

bash
Kopyala
Düzenle
git clone https://github.com/username/ticket-system.git
cd ticket-system
.env Dosyasını Yapılandırın

Projeyi çalıştırmadan önce, .env dosyasındaki ortam değişkenlerini yapılandırmanız gerekir. Aşağıdaki gibi bir .env dosyası oluşturun:

bash
Kopyala
Düzenle
MONGO_URI=mongodb://mongo:27017/ticketDB
Docker Compose ile Uygulamayı Başlatın

Tüm servisleri başlatmak için aşağıdaki komutu çalıştırın:

bash
Kopyala
Düzenle
docker-compose up -d
Bu komut, backend, MongoDB ve Nginx servislerini başlatacaktır.

Uygulamayı Kontrol Edin

Uygulama, Docker ile başlatıldığında, Nginx proxy'si sayesinde, backend servisine HTTP istekleri yönlendirilir. Aşağıdaki URL'den API'yi kontrol edebilirsiniz:

bash
Kopyala
Düzenle
http://localhost:8080
4.3. API Kullanımı
Aşağıdaki API uç noktalarını kullanarak ticket işlemleri gerçekleştirebilirsiniz.

POST /tickets: Yeni bir ticket oluşturur.

Girdi: { "title": "Başlık", "description": "Açıklama" }
Çıktı: { "message": "Ticket oluşturuldu", "ticket": {...} }
Ticket oluşturma örneği:

bash
Kopyala
Düzenle
curl -X POST -H "Content-Type: application/json" \
-d '{"title": "Test Ticket", "description": "Bu bir test ticketidir."}' \
http://localhost:8080/tickets
GET /tickets: Tüm ticketleri listeleyen bir API uç noktasıdır.

Çıktı: [ { "title": "Test Ticket", "status": "open" }, ... ]
Ticket listeleme örneği:

bash
Kopyala
Düzenle
curl http://localhost:8080/tickets
PUT /tickets/<title>: Belirtilen ticketi kapatır.

Çıktı: { "message": "Ticket '<title>' kapatıldı." }
Ticket kapatma örneği:

bash
Kopyala
Düzenle
curl -X PUT http://localhost:8080/tickets/Test%20Ticket
4.4. Çalıştırma ve Geliştirme
Projeyi geliştirmek için aşağıdaki adımları izleyebilirsiniz:

Docker Logs: Uygulama günlüklerini görmek için Docker logs komutunu kullanabilirsiniz:

bash
Kopyala
Düzenle
docker-compose logs -f
Backend Servisi: Backend (Node.js) uygulamasını doğrudan çalıştırarak geliştirmeye devam edebilirsiniz. Bunun için docker-compose.yml dosyasındaki app servisini düzenleyin.

5. Test ve Kontrol
Projenin düzgün çalışıp çalışmadığını test etmek için:

Docker Compose Çalıştırma:

bash
Kopyala
Düzenle
docker-compose up -d
Ticket Oluşturma:

bash
Kopyala
Düzenle
curl -X POST -H "Content-Type: application/json" \
-d '{"title": "Example", "description": "Test ticket"}' \
http://localhost:8080/tickets
Ticket Listeleme:

bash
Kopyala
Düzenle
curl http://localhost:8080/tickets
Ticket Kapatma:

bash
Kopyala
Düzenle
curl -X PUT http://localhost:8080/tickets/Example
