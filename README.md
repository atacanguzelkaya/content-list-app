# İçerik Listeleme ve Filtreleme Uygulaması

Bu proje, kullanıcıların sabit bir içerik listesini kategoriye göre filtreleyebileceği ve başlıklarına göre arama yapabileceği bir içerik listeleme ve filtreleme uygulamasıdır. Uygulama, farklı cihazlarla uyumlu bir şekilde tasarlanmıştır ve Next.js, Typescript, ve TailwindCSS kullanılarak geliştirilmiştir.

## Proje Özellikleri

- **İçerik Listesi:** Başlık, açıklama ve kategori bilgilerine sahip içeriklerin listelendiği bir sayfa.
- **Kategoriye Göre Filtreleme:** Kullanıcılar, içerikleri belirli bir kategoriye göre filtreleyebilir.
- **Başlıkta Arama:** Kullanıcılar, içeriklerin başlıklarında anlık olarak arama yapabilir.
- **Detay Sayfası:** Her içerik öğesine tıklanarak detay sayfasına yönlendirilir ve içerik bilgileri gösterilir.
- **Responsive Tasarım:** Uygulama, farklı cihazlar (mobil, tablet, masaüstü) için uyumludur.

## Teknolojiler

- **Next.js** (Version 14.2.23)
- **Typescript**
- **TailwindCSS**

## Kurulum

Bu projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

### Gereksinimler

- [Node.js](https://nodejs.org/) (LTS sürümü)
- [Yarn](https://yarnpkg.com/) veya [npm](https://www.npmjs.com/)

### Adımlar

1. Projeyi klonlayın:
   git clone https://github.com/atacanguzelkaya/content-list-app.git

2. Proje klasörüne gidin: **cd content-list-app**

3. Bağımlılıkları yükleyin: **yarn install** veya **npm install**

4. Geliştirme sunucusunu başlatın: **yarn dev** veya **npm run dev**

Tarayıcıda uygulamayı görmek için http://localhost:3000 adresini ziyaret edin.

## Kullanım
- **Kategori Filtreleme:** Ana sayfada, içeriklerin kategoriye göre filtrelenebilmesi için bir dropdown veya checkbox kullanılmaktadır. Kullanıcılar, bir kategori seçtiğinde sadece o kategoriye ait içerikler gösterilecektir.
- **Başlık Arama:** Başlık arama fonksiyonu, kullanıcı yazarken anlık olarak başlıklarda arama yapmanıza imkan verir. Örneğin, "React" yazarsanız yalnızca başlığında "React" geçen içerikler görüntülenir.
- **Detay Sayfası:** Liste üzerindeki herhangi bir öğeye tıklayarak, o öğeye ait detay sayfasına yönlendirilirsiniz. Detay sayfasında içerik başlığı, açıklaması ve kategorisi gibi bilgiler görüntülenir.

## Canlı Link

Projenin canlı sürümünü Vercel üzerinden erişebilirsiniz:

https://content-list-app.vercel.app/
