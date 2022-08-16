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

//---------------------------------------------------

let json = '{ bad json }';
 
try {
    let user = JSON.parse(json);
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
 
 
/* output
SyntaxError
Unexpected token b in JSON at position 2
*/