/**
 
Callback Function
Hal yang seringkali membingungkan ketika bekerja dengan program synchronous dan asynchronous adalah, 
bagaimana menangani suatu nilai yang didapatkan secara asynchronous pada program yang berjalan secara synchronous. Contohnya seperti kode berikut:
 */

//-------------------------------------------------------------------------------------------------

/*
const orderCoffee = () => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
    }, 3000);
    return coffee;
}
 
const coffee = orderCoffee();
console.log(coffee);
*/

/* output
Sedang membuat kopi, silakan tunggu...
null
*/
//--------------------------------------------------------------------------------------------------

/*
Jika kita melakukan hal seperti di atas untuk mencetak nilai coffee, 
maka hal tersebut tidak akan pernah terjadi. Seperti yang sudah kita ketahui, 
fungsi setTimeout() tidak akan menghentikan JavaScript untuk mengeksekusi kode yang ada selanjutnya. 
Jadi, fungsi orderCoffee() akan selalu mengembalikan nilai null, 
karena kode return coffee akan dieksekusi terlebih dulu dibandingkan dengan coffee = "Kopi sudah jadi!";. 
Kode asynchronous perlu disusun dengan cara yang berbeda dari synchronous. Cara paling dasar adalah dengan callback function.

Apa itu callback function? Mari kita bayangkan kembali ketika memesan kopi. 
Pada kasus ini mungkin terdapat dua aksi yang bisa kita lakukan:

(Synchronous) Kita tetap menunggu di kasir sampai kopi datang.
(Asynchronous) Kita menunggu di meja setelah memesan kopi. 
Selanjutnya kopi akan diantarkan oleh pelayan. 
Sehingga, kita tidak perlu menunggu di kasir dan dapat melakukan pekerjaan lain.
Nah, pada JavaScript, pelayan ini berperan layaknya callback function. 
Ia diperintahkan pada sebuah fungsi asynchronous kemudian akan dipanggil/digunakan ketika tugas itu selesai.

Bagaimana cara menerapkannya dalam kode? Pertama, kita tambahkan parameter dengan nama callback pada fungsi asynchronous.
*/