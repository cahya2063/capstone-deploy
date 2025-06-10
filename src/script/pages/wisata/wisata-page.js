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
      { name: 'Kawah Ijen', location: 'Kab. Banyuwangi', img: 'images/wisata/kawah-ijen.jpg' },
      { name: 'Pulau Merah', location: 'Kab. Banyuwangi', img: 'images/wisata/pulau-merah.jpg' },
      {
        name: 'Dataran Tinggi Dieng',
        location: 'Kab. Wonosobo',
        img: 'images/wisata/dataran-tinggi-dieng.jpg',
      },
      { name: 'Candi Borobudur', location: 'Kab. Magelang', img: 'images/wisata/borobudur.jpg' },
      { name: 'Candi Prambanan', location: 'Kab. Sleman', img: 'images/wisata/prambanan.jpg' },
      {
        name: 'Candi Bajang Ratu',
        location: 'Kab. Mojokerto',
        img: 'images/wisata/bajang-ratu.jpg',
      },
      { name: 'Gunung Merbabu', location: 'Kab. Magelang', img: 'images/wisata/merbabu.jpg' },
      { name: 'Jalan Malioboro', location: 'Kab. Yogyakarta', img: 'images/wisata/malioboro.jpg' },
      {
        name: 'Air Terjun Kembang Soka',
        location: 'Kab. Yogyakarta',
        img: 'images/wisata/kembang-soka.jpg',
      },
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
