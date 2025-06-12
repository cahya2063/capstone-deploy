const { getSaveScan, deleteSaveScan } = require('../../data/indexed_db');

class SaveScanPresenter {
  constructor(view) {
    this._view = view;
  }

  async loadSaveScan() {
    const data = await getSaveScan();
    const savedData = data.filter((item) => item.isSave === true);
    this._view.showSavedScan(savedData);
  }

  async deleteScanData(id) {
    console.log(id);

    if (id) {
      await deleteSaveScan(id);
      alert('berhasil menghapus scan tersimpan')
      this.loadSaveScan(); // refresh view
    }
  }
}

export default SaveScanPresenter;
