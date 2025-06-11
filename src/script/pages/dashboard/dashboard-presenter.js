import { getSaveScan, saveScan } from '../../data/indexed_db';

class DashboardPresenter {
  constructor(view) {
    this._view = view;
  }

  async loadScanHistory() {
    const data = await getSaveScan();
    const unSavedData = data.filter((item) => item.isSave === false);
    this._view.showScanList(unSavedData, data);
  }

  async saveScanData(id, dataList) {
    const targetItem = dataList.find((item) => item.id === id);
    if (targetItem) {
      targetItem.isSave = true;
      await saveScan(targetItem);
      this.loadScanHistory(); // refresh view
    }
  }
}

export default DashboardPresenter;
