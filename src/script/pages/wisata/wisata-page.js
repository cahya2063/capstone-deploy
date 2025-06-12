class WisataPage {
  async render() {
    return `
      <section class="wisata-section">
        <h2 class="wisata-title">List Candi & Tempat Wisata</h2>
        <div class="wisata-card-container">
          ${this._generateCards()}
        </div>
      </section>
    `;
  }

  async afterRender() {
    // Jika kamu ingin mengambil data dari API nanti, lakukan di sini
  }

  _generateCards() {
    const data = [
      { name: 'Masjid Gedhe Kauman', location: 'Kab. Yogyakarta', img: 'images/wisata/masjid-kauman.jpg' },
      { name: 'Benteng Vredeburg', location: 'Kab. Yogyakarta', img: 'images/wisata/vredeburg.jpg' },
      { name: 'Museum Gunungapi Merapi', location: 'Kab. Yogyakarta', img: 'images/wisata/museum-merapi.jpg' },
      { name: 'Candi Borobudur', location: 'Kab. Magelang', img: 'images/wisata/borobudur.jpg' },
      { name: 'Candi Prambanan', location: 'Kab. Yogyakarta', img: 'images/wisata/prambanan.jpg' },
      { name: 'Monumen Serangan 1 Maret', location: 'Kab. Yogyakarta', img: 'images/wisata/monumen-serangan-1-maret.jpg' },
      { name: 'Gedung Agung Istana Kepresidenan', location: 'Kab. Yogyakarta', img: 'images/wisata/gedung-agung.jpg' },
      { name: 'Taman Sari', location: 'Kab. Yogyakarta', img: 'images/wisata/taman-sari.jpg' },
      { name: 'Situs Ratu Boko', location: 'Kab. Yogyakarta', img: 'images/wisata/ratu-boko.jpg' },
    ];

    return data
      .map(
        (item) => `
      <div class="wisata-card">
        <img src="${item.img}" alt="${item.name}" class="wisata-img"/>
        <h3 class="wisata-name">${item.name}</h3>
        <p class="wisata-location">${item.location}</p>
      </div>
    `,
      )
      .join('');
  }
}

export default WisataPage;
