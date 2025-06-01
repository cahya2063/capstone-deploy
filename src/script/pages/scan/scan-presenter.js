const ScanPresenter = {
  init() {
    this.videoElement = document.getElementById('camera-preview');
    this.canvas = document.getElementById('photo-canvas');
    this.photoResult = document.getElementById('photo-result');
    this.takePhotoBtn = document.getElementById('take-photo-btn');
    this.uploadInput = document.getElementById('upload-image');
    this.submitBtn = document.getElementById('submit-scan');
    this.openBtn = document.getElementById('open-camera-btn');
    this.closeBtn = document.getElementById('close-camera-btn');
    this.cameraStream = null;

    if (!this.videoElement || !this.canvas) {
      console.warn('ScanPresenter: elemen tidak lengkap.');
      return;
    }

    this._bindEvents();
  },

  _bindEvents() {
    this.openBtn.addEventListener('click', () => this._openCamera());
    this.closeBtn.addEventListener('click', () => this._closeCamera());
    this.takePhotoBtn.addEventListener('click', () => this._takePhoto());
    this.uploadInput.addEventListener('change', (e) => this._previewUpload(e));
    this.submitBtn.addEventListener('click', () => this._submit());
  },

  async _openCamera() {
    try {
      this.cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.videoElement.srcObject = this.cameraStream;
      this.videoElement.style.display = 'block';
      this.takePhotoBtn.style.display = 'inline-block';
      this.closeBtn.style.display = 'inline-block';
      this.openBtn.style.display = 'none';
      this.photoResult.style.display = 'none';
    } catch (error) {
      alert('Tidak dapat mengakses kamera: ' + error.message);
    }
  },

  _closeCamera() {
    if (this.cameraStream) {
      const tracks = this.cameraStream.getTracks();
      tracks.forEach((track) => track.stop());
      this.videoElement.srcObject = null;
    }

    this.videoElement.style.display = 'none';
    this.takePhotoBtn.style.display = 'none';
    this.closeBtn.style.display = 'none';
    this.openBtn.style.display = 'inline-block';
  },

  _takePhoto() {
    const context = this.canvas.getContext('2d');
    this.canvas.width = this.videoElement.videoWidth;
    this.canvas.height = this.videoElement.videoHeight;
    context.drawImage(this.videoElement, 0, 0, this.canvas.width, this.canvas.height);

    const imageData = this.canvas.toDataURL('image/png');
    this.photoResult.src = imageData;
    this.photoResult.style.display = 'block';
    this.canvas.style.display = 'none'; // Optional: sembunyikan canvas
  },

  _previewUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      this.photoResult.src = e.target.result;
      this.photoResult.style.display = 'block';
    };
    reader.readAsDataURL(file);
  },

  _submit() {
    const imageData = this.photoResult.src;
    if (!imageData || imageData === window.location.href) {
      alert('Harap ambil atau unggah gambar terlebih dahulu.');
      return;
    }

    // Simulasi pengiriman gambar ke server
    console.log('Gambar siap dikirim:', imageData);
    alert('Gambar berhasil dikirim (simulasi).');
  },
};

export default ScanPresenter;
