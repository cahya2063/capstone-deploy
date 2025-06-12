// const db = require('./database');
// const bcrypt = require('bcrypt');
// const crypto = require('crypto');

// const checkDatabaseHandler = async (request, h) => {
//   try {
//     // Cek koneksi dengan melakukan query sederhana ke Supabase
//     const { data, error } = await db.from('users').select('*').limit(1);

//     if (error) {
//       console.error('Koneksi gagal:', error);
//       throw new Error('Koneksi database gagal');
//     }

//     return { status: 'success', message: 'Koneksi database berhasil' };
//   } catch (err) {
//     console.error(err);
//     throw new Error('Koneksi database gagal');
//   }
// };

// const registerHandler = async (request, h) => {
//   const { username, email, password } = request.payload;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const token = crypto.randomBytes(32).toString('hex');

//     // Menggunakan Supabase untuk insert data
//     const { data, error } = await db
//       .from('users')
//       .insert([
//         {
//           username: username,
//           email: email,
//           password: hashedPassword,
//           token: token,
//         },
//       ])
//       .select();

//     if (error) {
//       console.error('Error registrasi:', error);
//       // Handle error unik (duplicate email)
//       if (error.code === '23505') {
//         return h
//           .response({
//             status: 'fail',
//             message: 'Email sudah terdaftar',
//           })
//           .code(409);
//       }
//       return h
//         .response({
//           status: 'error',
//           message: 'Gagal mendaftarkan user',
//           details: error.message,
//         })
//         .code(400);
//     }

//     return h
//       .response({
//         status: 'success',
//         message: 'User berhasil terdaftar',
//         data: data[0],
//       })
//       .code(201);
//   } catch (err) {
//     console.error('Error registrasi:', err);
//     return h
//       .response({
//         status: 'error',
//         message: 'Terjadi kesalahan server',
//       })
//       .code(500);
//   }
// };

// const loginHandler = async (request, h) => {
//   const { email, password } = request.payload;

//   try {
//     // Menggunakan Supabase untuk query data
//     const { data: users, error } = await db.from('users').select('*').eq('email', email).limit(1);

//     if (error) {
//       console.error('Error login:', error);
//       throw error;
//     }

//     if (users.length === 0) {
//       return h
//         .response({
//           status: 'fail',
//           message: 'User tidak ditemukan',
//         })
//         .code(404);
//     }

//     const user = users[0];
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       return h
//         .response({
//           status: 'fail',
//           message: 'Email atau password salah',
//         })
//         .code(401);
//     }

//     // Generate token baru setiap login (opsional)
//     const newToken = crypto.randomBytes(32).toString('hex');
//     await db.from('users').update({ token: newToken }).eq('id', user.id);

//     return h
//       .response({
//         status: 'success',
//         message: 'Login berhasil',
//         data: {
//           id: user.id,
//           username: user.username,
//           email: user.email,
//           token: newToken,
//         },
//       })
//       .code(200);
//   } catch (err) {
//     console.error('Error login:', err);
//     return h
//       .response({
//         status: 'error',
//         message: 'Gagal melakukan login',
//       })
//       .code(500);
//   }
// };

// module.exports = { checkDatabaseHandler, registerHandler, loginHandler };
