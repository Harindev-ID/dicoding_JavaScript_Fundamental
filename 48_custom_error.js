/**
Custom Error
Setelah menangani eror, pada materi ini kita akan mempelajari bagaimana membuat eror sendiri. 
Ketika mengembangkan suatu aplikasi, akan ada banyak sekali kemungkinan munculnya eror. Seringkali, kita membutuhkan kelas eror sendiri untuk menunjukkan kesalahan yang spesifik dan tidak tersedia dalam kelas Error bawaan dari JavaScript.

Mari lihat lagi kode kita sebelumnya.
 */

let json = '{ "age": 30 }';
 
try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}