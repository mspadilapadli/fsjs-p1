---
layout: challenge
title: Schema simple e-commerce
---

## Learning Competencies

* Mengerti bentuk-bentuk relasi skema database dasar
* Mampu memodelkan relasi skema dasar

## Summary

Setelah mempelajari cara mendesain database, kita akan mencoba untuk memodelkan skema dan relasinya berdasarkan kasus di dunia nyata. Kita akan mencoba menganalisa suatu kasus dan menentukan skema serta relasi yang dibutuhkan.

## Releases

### Release 0 : Implement the Schema

Buatlah desain skema database berdasarkan requirement yang diberikan:

Seorang client memiliki toko yang menjual berbagai macam tas, dan client tsb ingin membuat website e-commerce untuk menjual produk nya tsb. Untuk tahap awal, client meminta spesifikasi sbb :
1. Terdapat 2 jenis user yang bisa log in ke sistem, yaitu admin dan customer.
2. Admin dapat input, edit, dan delete item, sedangkan customer tidak boleh ada akses ini
3. Customer dapat melakukan transaksi, dalam 1 transaksi, customer dapat membeli lebih dari 1 item.
4. Terdapat tags seperti : kulit, suede, satin, catoon, small, medium, large.
5. Setiap item, bisa memiliki lebih dari 1 tag.

Buatlah desain skema database untuk sistem yang memenuhi requirement di atas, pikirkanlah column-column minimum apa saja yang HARUS ada.

Gunakan editor diagram seperti Draw.io, Creately, atau yang lainnya sesukamu untuk membuat tabel dengan menggunakan template yang terkait “Database Design”.

Setelah selesai, gunakan fasilitas “Export” di aplikasi terkait untuk menyimpan file dalam format gambar dan upload ke service image upload ke dalam repo, namakan karyawan_schema.png
