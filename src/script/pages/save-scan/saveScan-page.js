import SaveScanPresenter from './saveScan-presenter';

export default class SaveScanPage {
  constructor() {
    this._presenter = new SaveScanPresenter(this);
  }

  async render() {
    return `
            <div class="save-scan-container">
                <h3>Scan History</h3>
                <ul id="scanList" class="scan-list"></ul>
            </div>
        `;
  }

  async afterRender() {
    this._presenter.loadSaveScan();
  }

  showSavedScan(savedData) {
  const listContainer = document.querySelector('.save-scan-container');
  let expandedItemId = null; // Untuk melacak item yang sedang diperluas

  if (!savedData.length) {
    listContainer.innerHTML = '<p>Belum ada hasil scan tersimpan.</p>';
    return;
  }

  const renderItems = () => {
    listContainer.innerHTML = savedData
      .map(
        (item) => `
        <article class="postcard dark blue">
          <a class="postcard__img_link" href="#">
            <img class="postcard__img" src="https://capstoneml.pythonanywhere.com${item.image_url}" alt="Image Title" />
          </a>
          <div class="postcard__text">
            <h1 class="postcard__title blue">${item.label_output}</h1>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">
              <div id="scan-description-${item.id}" class="scan-description">
                ${expandedItemId === item.id || item.deskripsi.length <= 200
                  ? item.deskripsi
                  : `${item.deskripsi.slice(0, 200)}... <a href="#" class="read-more" data-id="${item.id}" style="color: blue">selengkapnya</a>`}
              </div>
            </div>
            <ul class="postcard__tagbox">
              <li class="tag__item"><i class="fas fa-tag mr-2"></i><a href="${item.lokasi}" target="_blank">Lokasi</a></li>
              <li class="tag__item" data-id="${item.id}"><i class="fas fa-trash mr-2"></i>Hapus</li>
            </ul>
          </div>
        </article>
        `
      )
      .join('');

    // Event listeners untuk tombol hapus
    document.querySelectorAll('.tag__item').forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        this._presenter.deleteScanData(id);
      });
    });

    // Event listeners untuk read-more
    document.querySelectorAll('.read-more').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;
        expandedItemId = expandedItemId === id ? null : id; // Toggle state
        renderItems(); // Render ulang semua items
      });
    });
  };

  renderItems(); // Render awal
}
}
