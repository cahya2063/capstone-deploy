import MapStory from '../../utils/map';

export default class LandingPage {
  constructor() {
    this._map = null;
    this._marker = [];
    this._mapStory = null;

    this._switchButtons = {};
    this._contentData = {
      desc: {
        text: 'HistoryLens adalah aplikasi cerdas yang memindai foto tempat wisata dan menampilkan informasi sejarah dan letak wilayahnya. Cocok untuk traveler, pelajar, dan pecinta budaya, HistoryLens mengubah pengalaman berkunjung menjadi perjalanan waktu yang interaktif, edukatif, dan menyenangkan, cukup dengan satu jepretan kamera.',
        image: 'images/switch-img/map.png',
      },
      scan: {
        text: 'Fitur scan memudahkan pengguna untuk memotret candi atau objek wisata, lalu secara otomatis menampilkan informasi lengkap tentang lokasi di peta. Selain itu, pengguna juga dapat mengetahui cerita sejarah, latar belakang budaya, serta fakta menarik dan tersembunyi yang ada di balik tempat tersebut hanya dengan satu klik.',
        image: 'images/switch-img/camera.png',
      },
      history: {
        text: 'Jelajahi kisah sejarah dari setiap lokasi wisata, termasuk latar belakang kerajaan yang pernah berjaya, keunikan arsitektur kuno, hingga beragam mitos lokal yang menyertainya. Setiap tempat menyimpan cerita menarik yang memperkaya pengalaman berkunjung dan memberikan perspektif budaya yang lebih dalam bagi para pengunjung.',
        image: 'images/switch-img/history.png',
      },
    };
  }

  async render() {
    return `
    <div class="first-content">
        <div class="left-first-content">
          <p class="main-title">Sebuah cara baru</p>
          <p class="sub-title">dalam berwisata</p>
          <div class="button-container">
              <a href="#/login" class="login-btn">Login</a>
              <a href="#/register" class="register-btn">Register</a>
          </div>
          <p style="font-size: 20px">Dipercaya lebih dari <b>10k+</b> wisatawan dan <b>20k+</b> pengguna</p>
        </div>
        <div class="right-first-content">
          <img src="images/slider/ilustrasi-candi.png" class="candi-img" alt="" />
          <img src="images/slider/ilustrasi-candi-2.png" class="candi-img-2" alt="" />
        </div>
    </div>

    <div class="desc">
        <div class="enpowering"><strong>HistoryLens,</strong> Temukan Cerita di Balik Tempat Wisata</div>
    </div>

    <div class="container-slider">
        <div class="switch-image-container">
          <img src="images/switch-img/map.png" alt="" class="img-description"/>
        </div>
        <div class="container-switch">
          <div class="btn-container">
            <button type="button" class="switch-btn" id="desc-btn">Deskripsi</button>
            <button type="button" class="switch-btn" id="scan-btn">Scan</button>
            <button type="button" class="switch-btn" id="history-btn">Sejarah</button>
          </div>
          <div class="switch-teks">
            ${this._contentData.desc.text}
          </div>
        </div>
    </div>

    <div class="what-is-historyLens">
        <div class="left-content">
            <img src="images/slider/scan.gif" class="camera-gif">
        </div>
        <div class="right-content">
            <div class="right-content-fill">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur mollitia veritatis autem.
            </div>
            <div class="right-content-fill">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur mollitia veritatis autem.
            </div>
            <div class="right-content-fill">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur mollitia veritatis autem.
            </div>
        </div>
    </div>

    <div class="peta">
        <h2>Lokasi candi</h2>
        <div id="map" style="height: 400px; margin-top: 60px;"></div>
    </div>

    <div class="profile-card">
        <div class="wrap">
            <div class="content-1">
                <h3>M. Rizki Dwi Ramadhan </h3>
                <p>FC-34</p>
                <img src="images/profile/rama.jpeg" alt="">
            </div>
        </div>
        <div class="wrap">
            <div class="content-1">
                <h3>Muhamad Rois</h3>
                <p>FC-30</p>
                <img src="images/profile/rois.jpg" alt="">
            </div>
        </div>
        <div class="wrap">
            <div class="content-1">
                <h3>Muh. Cahya Yunizar</h3>
                <p>FC-31</p>
                <img src="images/profile/cahya.jpg" alt="">
            </div>
        </div>
        <div class="wrap">
            <div class="content-1">
                <h3>Muh. Nur Rohman</h3>
                <p>MC-11</p>
                <img src="images/profile/rama.jpeg" alt="">
            </div>
        </div>
        <div class="wrap">
            <div class="content-1">
                <h3>Melina Kharisa</h3>
                <p>MC-19</p>
                <img src="images/profile/melin.jpeg" alt="">
            </div>
        </div>
        <div class="wrap">
            <div class="content-1">
                <h3>Laeli Salsa Anisa</h3>
                <p>MC-18</p>
                <img src="images/profile/salsa.jpeg" alt="">
            </div>
        </div>
    </div>
    `;
  }

  async afterRender() {
    this._descText = document.querySelector('.switch-teks');
    this._imgDescription = document.querySelector('.img-description');

    this._switchButtons = {
      desc: document.querySelector('#desc-btn'),
      scan: document.querySelector('#scan-btn'),
      history: document.querySelector('#history-btn'),
    };

    // actions setiap button
    Object.keys(this._switchButtons).forEach((key) => {
      this._switchButtons[key].addEventListener('click', () => this.updateContent(key));
    });

    this.updateContent('desc'); // Set default
    this.hover();
    this.initialitationMap();
  }

  // remove properti class active pada button
  resetActiveButtons() {
    Object.values(this._switchButtons).forEach((btn) => {
      btn.classList.remove('active');
    });
  }

  // update gambar dan desc text
  updateContent(key) {
    const data = this._contentData[key];
    if (!data) return;

    this._descText.classList.add('fade-out');
    this._imgDescription.classList.add('fade-out');

    setTimeout(() => {
      this._descText.textContent = data.text;
      this._imgDescription.src = data.image;
      this._descText.classList.remove('fade-out');
      this._imgDescription.classList.remove('fade-out');
    }, 300);

    this.resetActiveButtons();
    this._switchButtons[key].classList.add('active');
  }

  hover() {
    let items1 = document.querySelectorAll('.content-1');
    items1.forEach((item) => {
      item.addEventListener('mousemove', (e) => {
        // dapatkan posisi panjang pointer pixel
        let positionPx = e.x - item.getBoundingClientRect().left;
        // conversi ke %
        let PositionX = (positionPx / item.offsetWidth) * 100;
        // dapatkan posisi tinggi pointer
        let positionPy = e.y - item.getBoundingClientRect().top;
        // conversi ke %
        let PositionY = (positionPy / item.offsetHeight) * 100;
        item.style.setProperty('--rX', 0.5 * (50 - PositionY) + 'deg');
        item.style.setProperty('--rY', 0.5 * (50 - PositionX) + 'deg');
      });
      item.addEventListener('mouseout', () => {
        item.style.setProperty('--rX', '0deg');
        item.style.setProperty('--rY', '0deg');
      });
    });
  }

  initialitationMap() {
    this._mapStory = new MapStory('map');
    this._map = this._mapStory.getMap();
    this._marker = [];
    this._mapStory.createMultipleMarkers([
      { lat: -7.6079, lon: 110.2038, content: 'Candi Borobudur' },
      { lat: -7.752, lon: 110.491, content: 'Candi Prambanan' },
      { lat: -7.8516, lon: 110.3302, content: 'Candi Ratu Boko' },
      { lat: -7.6443, lon: 110.4394, content: 'Candi Pawon' },
      { lat: -7.6153, lon: 110.4213, content: 'Candi Mendut' },
      { lat: -7.1646, lon: 112.5766, content: 'Candi Jawi' },
      { lat: -7.6481, lon: 112.8854, content: 'Candi Singosari' },
      { lat: -7.5516, lon: 112.2317, content: 'Candi Tikus' },
      { lat: -7.5454, lon: 112.2389, content: 'Candi Bajang Ratu' },
      { lat: -7.6806, lon: 110.672, content: 'Candi Sambisari' },
    ]);
  }
}
