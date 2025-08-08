---
layout: challenge
title: All Relations Case Study
---

## Learning Competencies

* Mengerti bentuk-bentuk relasi skema database dasar
* Mampu memodelkan relasi skema dasar

## Summary

Setelah mempelajari cara mendesain database, kita akan mencoba untuk memodelkan skema dan relasinya berdasarkan kasus di dunia nyata. Kita akan mencoba menganalisa suatu kasus dan menentukan skema serta relasi yang dibutuhkan.

## Releases

### Release 0 : Implement the Schema

Buatlah desain skema database berdasarkan requirement yang diberikan:

1. Setiap `karyawan` memiliki NIK, nama depan, nama belakang, jenis kelamin, email, phone number
2. Setiap `karyawan` menempati satu `departemen`
3. Setiap `Departemen` memiliki `manager` dan hanya boleh memiliki satu `manager` saja
4. Di `perusahaan` tersebut memiliki beberapa `projek`, setiap `karyawan` dapat mengerjakan lebih dari satu `projek` dan `projek` tersebut setidaknya dikerjakan minimal olen satu `karyawan`
Desain skema database untuk sistem karyawan yang memenuhi requirement di atas.

Gunakan editor diagram seperti Draw.io, Creately, atau yang lainnya sesukamu untuk membuat tabel dengan menggunakan template yang terkait “Database Design”.

Setelah selesai, gunakan fasilitas “Export” di aplikasi terkait untuk menyimpan file dalam format gambar dan upload ke dalam repo kalian dengan nama karyawan_schema.png
