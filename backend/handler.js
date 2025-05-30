const db = require('./database');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const checkDatabaseHandler = (request, h) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT 1', (err, result) => {
      if (err) {
        console.error('Koneksi gagal : ', err);
        return reject(new Error('koneksi database gagal'));
      }
      return resolve({ status: 'success', message: 'koneksi database berhasil' });
    });
  });
};

const registerHandler = async (request, h) => {
  const { username, email, password } = request.payload;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = crypto.randomBytes(32).toString('hex');

    const sql = 'INSERT INTO users (username, email, password, token) VALUES (?, ?, ?, ?)';
    const result = await new Promise((resolve, reject) => {
      db.query(sql, [username, email, hashedPassword, token], (err, result) => {
        if (err) return reject({ message: 'terjadi kesalahan' });
        resolve(result);
      });
    });

    return h
      .response({ message: 'user registered successfully', userId: result.insertId })
      .code(201);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'failed to register user' }).code(500);
  }
};

const loginHandler = async (request, h) => {
  const { email, password } = request.payload;

  try {
    const userResult = await new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    if (userResult.length === 0) {
      return h.response({ status: 'fail', message: 'user tidak ditemukan' }).code(404);
    }

    const user = userResult[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return h.response({ status: 'fail', message: 'email atau password salah' }).code(401);
    }

    return h
      .response({
        status: 'success',
        message: 'login berhasil',
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          token: user.token,
        },
      })
      .code(200);
  } catch (err) {
    console.error(err);
    return h.response({ status: 'error', message: 'gagal melakukan login' }).code(500);
  }
};

module.exports = { checkDatabaseHandler, registerHandler, loginHandler };
