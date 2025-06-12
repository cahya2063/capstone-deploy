import ScanPresenter from './scan-presenter';

class ScanPage {
  async render() {
    return `
      <section class="scan-section">
        <h2 class="scan-title">Scan Wisata</h2>
        <div class="scan-card">
          <div class="camera-control">
            <button id="open-camera-btn" class="camera-btn">Buka Kamera</button>
            <button id="close-camera-btn" class="camera-btn" style="display: none;">Tutup Kamera</button>
          </div>

          <video id="camera-preview" autoplay playsinline class="camera-preview"></video>
          <canvas id="photo-canvas" style="display: none;"></canvas>
          <img id="photo-result" alt="Hasil Gambar" class="photo-result" style="display: none;" />

          <button id="take-photo-btn" class="camera-btn" style="display: none;">Ambil Gambar</button>

          <label for="upload-image" class="upload-label">Pilih Gambar Dari Perangkat</label>
          <input type="file" id="upload-image" accept="image/*" class="upload-input" />

          <button id="submit-scan" class="submit-btn">Kirim</button>
          <div id="scan-result" class="scan-result" style="margin-top: 1rem;"></div>
          <div id="scan-description" class="scan-description" style="display: none;"></div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    ScanPresenter.init();
  }
}

export default ScanPage;
