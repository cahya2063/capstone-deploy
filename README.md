# App Starter Project with Webpack

Proyek ini adalah setup dasar untuk aplikasi web yang menggunakan webpack untuk proses bundling, Babel untuk transpile JavaScript, serta mendukung proses build dan serving aplikasi.

## Table of Contents

- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Project Structure](#project-structure)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (disarankan versi 12 atau lebih tinggi)
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

1. Download starter project pada repositori ini.
2. Lakukan unzip file.
3. Pasang seluruh dependencies dengan perintah berikut.
   shell
   npm install
   

## Scripts

- Build for Production:

  shell
  npm run build
  

  Script ini menjalankan webpack dalam mode production menggunakan konfigurasi webpack.prod.js dan menghasilkan sejumlah file build ke direktori dist.

  sebelum menjalankan perintah dibawah clone model repository berikut ini, dan ikuti langkah-langkahnya :
  [github_model](https://github.com/Omans16/Model)

- Start Development Server:

  shell
  npm run start-dev
  

  Script ini menjalankan server pengembangan webpack dengan fitur live reload dan mode development sesuai konfigurasi di`webpack.dev.js`.

- Serve:
  shell
  npm run serve
  
  Script ini menggunakan [http-server](https://www.npmjs.com/package/http-server) untuk menyajikan konten dari direktori dist.

## Project Structure

Proyek starter ini dirancang agar kode tetap modular dan terorganisir.
