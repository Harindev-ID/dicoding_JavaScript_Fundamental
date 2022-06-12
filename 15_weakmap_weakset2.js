/**
 * setTimeout merupakan fungsi yang digunakan untuk menunda eksekusi kode yang ada di dalamnya hingga jangka waktu yang ditetapkan. 
 * Fungsi setTimeout akan detail dibahas pada modul concurrency.
 * Ketika reference objek jonas dihapus dengan mengubahnya menjadi null, 
 * seharusnya map tidak lagi menyimpan data user (garbage collected). 
 * 
 * Namun, kenyataannya data jonas masih tersedia di dalam Map. 
 * Artinya, data jonas masih tersimpan di dalam memori sampai kita benar-benar menghapusnya.

Berbeda jika kita menggunakan WeakMap seperti inI:
 */



/**
 * Ketika nilai jonas sudah tidak bisa dijangkau, 
 * object jonas akan dihapus dari memori termasuk informasi yang disimpan di dalam WeakMap.
 */

 const { inspect } = require('util');

 let visitsCountMap = new WeakMap(); // Menyimpan daftar user
 
 function countUser(user) {
     let count = visitsCountMap.get(user) || 0;
     visitsCountMap.set(user, count + 1);
 }
 
 let jonas = { name: "Jonas" };
 countUser(jonas);                // Menambahkan user "Jonas"
 
 jonas = null;                    // Data object "Jonas" dihapus
 
 // delay dibutuhkan untuk menunggu garbage collector bekerja
 setTimeout(function() {
   console.log(inspect(visitsCountMap, { showHidden: true }));
 }, 10000);
 
 /* output
   WeakMap {  }
 */