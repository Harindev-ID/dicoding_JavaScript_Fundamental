/**
 * Declaring Function
Fungsi merupakan bagian penting dalam bahasa pemrograman. 
Tanpa sadar, sebenarnya kita sudah menggunakan sebuah fungsi pada contoh kode yang ada sebelumnya. 
log() pada console.log() merupakan sebuah function yang berguna untuk menampilkan data pada konsol. 
Tapi sebenarnya apa itu function? Bagaimana ia bisa bekerja?

Mirip dengan fungsi pada matematika, fungsi dalam pemrograman juga digunakan untuk menghasilkan output berdasarkan input tertentu.

dos:2237630624b3a891c31a184108d9a73120220613105315.png

Namun, fungsi juga bisa digunakan sebagai blok kode atau prosedur yang dapat digunakan secara berulang. 
Dalam arti lain, kita dapat berpikir bahwa function merupakan sebuah variabel yang berisi blok logika.
 Blok logika tersebut akan dieksekusi ketika variabelnya dipanggil.

Semua fungsi memiliki struktur yang sama. Fungsi dideklarasikan dengan keyword function dan nama fungsinya. 
Nama fungsi selalu diikuti dengan tanda kurung (parentheses) tanpa spasi, lalu terdapat sepasang kurung kurawal yang berisi logika dari fungsi tersebut.

dos:29e48b6b4f850e776cd871a60104328e20220613105330.png

Terkadang di dalam tanda kurung kita membutuhkan sebuah informasi tambahan yang disebut dengan parameter. 
Parameter merupakan data yang digunakan pada fungsi untuk diproses di dalamnya. Sebagai contoh, fungsi console.log() dapat menerima argument berupa string atau data lain untuk ditampilkan ke konsol.

Berikut merupakan ilustrasi dari struktur fungsi dengan parameter:

dos:3548b95abda5f416f45035b96a91a81820220613105342.png

Parameter & Argument

Di dalam fungsi kita akan banyak bertemu istilah parameter & argument. 
Penggunaan istilah ini sering kali tertukar, bahkan di kalangan developer.

 Perbedaan mendasar antara keduanya antara lain:

Parameter merupakan variabel yang didefinisikan sebagai inputan dari sebuah fungsi. Contoh:

function multiply(a, b) {
    return a * b;
}

Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi. Contohnya:
multiply(3, 4);

Setelah membuat fungsi kita dapat memanggilnya dengan menuliskan nama fungsi diikuti tanda kurung dan memasukkan argumen di dalamnya (jika ada).


 */

function greeting() {
    console.log("Gutter morgen!")
}

greeting();

/* output
Good Morning!
*/