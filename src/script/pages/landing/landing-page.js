import MapStory from "../../utils/map";
export default class LandingPage {
  constructor() {
    this._map = null;
    this._marker = [];
    this.mapStory = null;
  }

  async render() {
    return `
            <div class="container-img">
                <div class="image-slider">
                <img src="images/slider/image-slider1.png" alt="" />
                <img src="images/slider/image-slider2.png" alt="" />
                <img src="images/slider/image-slider5.png" alt="" />
                <img src="images/slider/image-slider3.png" alt="" />
                <img src="images/slider/image-slider4.png" alt="" />
                </div>
            </div>

            <div class="Card-search">
                <div class="CardInner">
                <label>Cari tempat wisata</label>
                <div class="container-search">
                    <div class="Icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#657789"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-search"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    </div>
                    <div class="InputContainer">
                    <input placeholder="Ketik disini..." />
                    </div>
                </div>
                </div>
            </div>

            <div class="card-wisata-container">
                <h2 class="list-candi-text">List Candi</h2>
                <div class="card-wisata">
                <div class="card-text">
                    <div class="portada"></div>
                    <div class="title-total">
                    <div class="title">Kabupaten mojokerto, Jawa timur</div>
                    <h2>Candi Borobudur</h2>
                    <div class="desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                        consectetur corrupti similique itaque, perspiciatis officia?
                    </div>
                    </div>
                </div>
                </div>
                <div class="card-wisata">
                <div class="card-text">
                    <div class="portada1"></div>
                    <div class="title-total">
                    <div class="title">Kabupaten Sleman, Yogyakarta</div>
                    <h2>Candi prambanan</h2>
                    <div class="desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                        consectetur corrupti similique itaque, perspiciatis officia?
                    </div>
                    </div>
                </div>
                </div>
                <div class="card-wisata">
                <div class="card-text">
                    <div class="portada2"></div>
                    <div class="title-total">
                    <div class="title">Probolinggo, Jawa timur</div>
                    <h2>Seruni point bromo</h2>
                    <div class="desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                        consectetur corrupti similique itaque, perspiciatis officia?
                    </div>
                    </div>
                </div>
                </div>
                <div class="card-wisata">
                <div class="card-text">
                    <div class="portada3"></div>
                    <div class="title-total">
                    <div class="title">Kabupaten banyuwangi, Jawa timur</div>
                    <h2>Gunung ijen</h2>
                    <div class="desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                        consectetur corrupti similique itaque, perspiciatis officia?
                    </div>
                    </div>
                </div>
                </div>
            </div>


            <h2 class="list-wisata-text">list wisata</h2>
            <div class="card-wisata-2">
                <div class="card">

                <img src="images/slider/image-slider4.png" alt="Kawah Ijen" class="card-img" />
                <div class="card-content">
                    <h3 class="card-title">Kawah Ijen</h3>
                    <p class="card-location">Kab. Banyuwangi</p>
                </div>
                </div>
                <div class="card">

                <img src="images/slider/image-slider4.png" alt="Kawah Ijen" class="card-img" />
                <div class="card-content">
                    <h3 class="card-title">Kawah Ijen</h3>
                    <p class="card-location">Kab. Banyuwangi</p>
                </div>
                </div>
                <div class="card">

                <img src="images/slider/image-slider4.png" alt="Kawah Ijen" class="card-img" />
                <div class="card-content">
                    <h3 class="card-title">Kawah Ijen</h3>
                    <p class="card-location">Kab. Banyuwangi</p>
                </div>
                </div>
            </div>
            <div class="peta">
                <h2>Lokasi candi</h2>
                <div id="map" style="height: 400px; margin-top: 60px;"></div>
            </div>

            <div class="profile-container">

                <div class="profile-card">
                    <div class="profile-image">
                        <img src="images/profile/rois.jpg" alt="Profile Photo" />
                    </div>
                    <div class="profile-info">
                        <h2 class="name">Muhamad Rois</h2>
                        <p class="title">FC-30</p>
                        <p class="bio">Enthusiastic developer with a passion for building web applications and learning new technologies.</p>
                        
                    </div>
                </div>
                <div class="profile-card">
                    <div class="profile-image">
                        <img src="images/profile/rama.jpeg" alt="Profile Photo" />
                    </div>
                    <div class="profile-info">
                        <h2 class="name">M. Rizki Dwi Ramadhan</h2>
                        <p class="title">FC-34</p>
                        <p class="bio">Enthusiastic developer with a passion for building web applications and learning new technologies.</p>
                        
                    </div>
                </div>
                <div class="profile-card">
                    <div class="profile-image">
                        <img src="images/profile/cahya.jpg" alt="Profile Photo" />
                    </div>
                    <div class="profile-info">
                        <h2 class="name">Muhamad Cahya Yunizar</h2>
                        <p class="title">FC-31</p>
                        <p class="bio">Enthusiastic developer with a passion for building web applications and learning new technologies.</p>
                        
                    </div>
                </div>
                <div class="profile-card">
                    <div class="profile-image">
                        <img src="images/profile/melin.jpeg" alt="Profile Photo" />
                    </div>
                    <div class="profile-info">
                        <h2 class="name">Melina kharisa</h2>
                        <p class="title">MC-19</p>
                        <p class="bio">Enthusiastic developer with a passion for building web applications and learning new technologies.</p>
                        
                    </div>
                </div>
                <div class="profile-card">
                    <div class="profile-image">
                        <img src="images/profile/cahya.jpg" alt="Profile Photo" />
                    </div>
                    <div class="profile-info">
                        <h2 class="name">Muhamad Nur Rohman</h2>
                        <p class="title">MC-11</p>
                        <p class="bio">Enthusiastic developer with a passion for building web applications and learning new technologies.</p>
                        
                    </div>
                </div>
                <div class="profile-card">
                    <div class="profile-image">
                        <img src="images/profile/salsa.jpeg" alt="Profile Photo" />
                    </div>
                    <div class="profile-info">
                        <h2 class="name">Laeli Salsa Anisa</h2>
                        <p class="title">MC-18</p>
                        <p class="bio">Enthusiastic developer with a passion for building web applications and learning new technologies.</p>
                        
                    </div>
                </div>
            </div>
            

        `;
  }

  async afterRender() {
    this.initialitationMap();
  }

  initialitationMap() {
    this._mapStory = new MapStory("map");
    this._map = this._mapStory.getMap();
    this._marker = [];
    this._mapStory.createMultipleMarkers([
      { lat: -7.6079, lon: 110.2038, content: "Candi Borobudur" },
      { lat: -7.752, lon: 110.491, content: "Candi Prambanan" },
      { lat: -7.8516, lon: 110.3302, content: "Candi Ratu Boko" },
      { lat: -7.6443, lon: 110.4394, content: "Candi Pawon" },
      { lat: -7.6153, lon: 110.4213, content: "Candi Mendut" },
      { lat: -7.1646, lon: 112.5766, content: "Candi Jawi" },
      { lat: -7.6481, lon: 112.8854, content: "Candi Singosari" },
      { lat: -7.5516, lon: 112.2317, content: "Candi Tikus" },
      { lat: -7.5454, lon: 112.2389, content: "Candi Bajang Ratu" },
      { lat: -7.6806, lon: 110.672, content: "Candi Sambisari" },
    ]);
  }
}
