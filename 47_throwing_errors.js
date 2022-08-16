// Sekarang kita lihat implementasi try-catch pada kasus yang lebih umum. Perhatikan kode berikut:

// let json = '{ "name": "Yoda", "age": 20 }';
 
// try {
//     let user = JSON.parse(json);
 
//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }

/**
 Pada kode di atas, fungsi JSON.parse akan melakukan parsing atau konversi dari variabel json (String) menjadi sebuah object. 
 Skenario seperti di atas akan banyak kita temui ketika melakukan request ke API.

Jalankan kode di atas pada text editor Anda. Seharusnya aplikasi berjalan lancar tanpa menimbulkan eror.

Lalu, bagaimana jika json string tidak sesuai dengan format object JavaScript?
 */

//---------------------------------------------------

// let json = '{ bad json }';
 
// try {
//     let user = JSON.parse(json);
 
//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }
 
 
/* output
SyntaxError
Unexpected token b in JSON at position 2
*/

/**
 Apabila json tidak sesuai format, maka JSON.parse akan menimbulkan eror. 
 Eror tersebut akan ditangkap oleh blok catch dan kode di dalamnya yang akan dieksekusi.

Lalu, bagaimana jika json yang didapat adalah seperti ini?
 */

let json = '{ "age": 20 }';
 
try {
    let user = JSON.parse(json);
 
    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}