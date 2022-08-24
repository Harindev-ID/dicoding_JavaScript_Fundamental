/**
 Consuming Promises
Setelah mengetahui bagaimana membuat objek Promise, 
hal yang tentunya sangat penting adalah tahu bagaimana mengonsumsinya. Seperti yang telah kita bahas sebelumnya, 
status awal dari Promise adalah pending. Kemudian, akan ada dua kemungkinan yang terjadi, fulfilled atau rejected.

Untuk menangani hasil dari Promise, kita gunakan method .then(). 
Jika kita terjemahkan, “then” berarti “kemudian”, sehingga kurang lebih kita memerintahkan JavaScript seperti ini: 
“Jika janji saya sudah selesai, kemudian lakukan ...”. Jika dituliskan dalam bentuk kode akan seperti berikut:

const myPromise = new Promise(executorFunction);
myPromise.then(onFullfilled, onRejected);

.then() sendiri adalah sebuah higher-order function yang membutuhkan dua parameter. 
Keduanya adalah callback function yang juga dikenal sebagai handler. Handler pertama adalah fungsi yang akan dijalankan ketika Promise berstatus resolve. Sedangkan handler kedua adalah fungsi yang akan dijalankan ketika Promise berstatus reject.

Kembali ke kasus mesin kopi kita sebelumnya, mesin bisa gagal membuat kopi jika bahan-bahan tidak mencukupi. Sementara jika bahan cukup, mesin akan membuatkan satu gelas kopi. Di sinilah kita dapat memanfaatkan Promise sekaligus menangani dua kemungkinan promise yang terjadi.

Mari kita buat object untuk menyimpan stok dan fungsi yang mengembalikan objek Promise.
 */