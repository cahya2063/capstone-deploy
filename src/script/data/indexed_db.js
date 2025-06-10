import { openDB } from 'idb';

const DATABASE_NAME = 'history-lens';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'save-scan';

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade: (database) => {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
    });
  },
});

export const saveScan = async (scan) => {
    
  try {
    
    const db = await dbPromise;
    await db.put(OBJECT_STORE_NAME, scan);
    alert('hasil scan berhasil di simpan');
    return true;
  } catch (error) {
    alert('gagal menyimpan hasil scan');
    return false;
  }
};

export const getSaveScan = async (scan) => {
  try {
    const db = await dbPromise;
    return await db.getAll(OBJECT_STORE_NAME);
  } catch (error) {
    console.log('gagal mendapatkan hasil scan tersimpan', error);
    return [];
  }
};

export const deleteSaveScan = async (id) => {
  try {
    const db = await dbPromise;
    await db.delete(OBJECT_STORE_NAME, id);
    console.log('story berhasil dihapus');
  } catch (error) {
    console.error('gagal menghapus hasil scan tersimpan');
    return false;
  }
};

export const checkIfScanSave = async (id) => {
  try {
    const db = await dbPromise;
    return (await db.get(OBJECT_STORE_NAME, id)) !== undefined;
  } catch (error) {
    console.error('gagal memeriksa story : ', error);
    return false;
  }
};
