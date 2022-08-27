/*
Promise All

Pada materi sebelumnya kita belajar bagaimana promise dapat menangani situasi di mana terdapat asynchronous process yang saling membutuhkan untuk melaksanakan tugasnya. 
Lalu bagaimana jika kita ingin menjalankan banyak promise sekaligus tanpa memedulikan urutan? 
Bukankah concurrency memungkinkan kita melakukan banyak proses bersamaan agar lebih efisien?

Ketika pergi ke sebuah kedai kopi bersama rekan kerja, kita biasanya memesan kopi secara bersamaan. 
Meskipun kopi yang kita pesan berbeda, tak jarang pelayanan mengantarkan pesanan bersamaan. Nah, pada kasus inilah pelayan menggunakan teknik Promise.all().

Method Promise.all() dapat menerima banyak promise dalam bentuk array pada parameternya. 
Kemudian method tersebut akan mengembalikan nilai seluruh hasil dari promise dalam bentuk array.

Contohnya seperti berikut:
*/