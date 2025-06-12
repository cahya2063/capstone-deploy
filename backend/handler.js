const db = require('./database');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const checkDatabaseHandler = (request, h) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT 1', (err, result) => {
      if (err) {
        console.error('Koneksi Gagal:', err);
        return reject(
          h.response({ status: 'error', message: 'Database tidak terhubung' }).code(500),
        );
      }
      resolve({ status: 'success', message: 'Database terhubung' });
    });
  });
};

const registerUserHandler = async (request, h) => {
  const { username, email, password } = request.payload;

  try {
    const [users] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);

    if (users.length > 0) {
      return h.response({ error: 'Email sudah terdaftar' }).code(400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const token = crypto.randomBytes(32).toString('hex');

    const [result] = await db
      .promise()
      .query('INSERT INTO users (username, email, password, token) VALUES (?, ?, ?, ?)', [
        username,
        email,
        hashedPassword,
        token,
      ]);

    return h.response({ message: 'Berhasil register', userId: result.insertId }).code(201);
  } catch (err) {
    console.error('Register Error:', err);
    return h.response({ error: 'Gagal mendaftarkan user' }).code(500);
  }
};

const loginUserHandler = async (request, h) => {
  const { email, password } = request.payload;

  try {
    const [results] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);

    if (results.length === 0) {
      return h.response({ error: 'Email tidak ditemukan' }).code(401);
    }

    const user = results[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return h.response({ error: 'Password salah' }).code(401);
    }

    return h
      .response({
        message: 'Login berhasil',
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          token: user.token,
        },
      })
      .code(200);
  } catch (err) {
    console.error('Login Error:', err);
    return h.response({ error: 'Terjadi kesalahan server' }).code(500);
  }
};

module.exports = {
  checkDatabaseHandler,
  registerUserHandler,
  loginUserHandler,
};
