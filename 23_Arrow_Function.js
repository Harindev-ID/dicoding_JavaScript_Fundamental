/**
 * Arrow Function
ES6 memperkenalkan fungsi baru yang dinamakan arrow function expression atau lebih dikenal sebagai arrow function. 
Arrow function mirip seperti regular function secara perilaku, 
tetapi berbeda dalam penulisannya. 
Sesuai namanya, fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => ). 
Tentunya penulisan arrow function ini akan lebih singkat.

Selain perbedaan sintaksis, terdapat perbedaan perilaku antara arrow function dan regular function. 
Regular function dapat berupa function declaration dan function expression. Namun, arrow function hanya berupa expression function saja. 
Itu sebabnya arrow function memiliki nama lengkap “arrow function expression”.

Reguler Function
// function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
}
 
// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`)
}

Arrow Function
// function expression
const sayHello = (greet) => {
    console.log(`${greet}!`)
}
 
const sayName = (name) => {
    console.log(`Nama saya ${name}`)
}

Pada arrow function kita tidak perlu menuliskan keyword function setiap membuat fungsi. 
Kita tetap menuliskan parameter di dalam tanda kurung lalu diikuti dengan tanda panah (=>) sebelum kurung kurawal.

const sayName = (name) => {
    console.log(`Nama saya ${name}`)
}

Apabila fungsi hanya memiliki satu parameter, maka kita bisa menghapuskan tanda kurung seperti berikut:
*/

const sayName1 = name => {
    console.log(`Nama saya ${name}`)
}

sayName1("Leia");

/* output
Nama saya Leia
 
Namun, jika kita sama sekali tidak membutuhkan parameter, 
maka kita tetap menuliskan tanda kurung namun kosong seperti ini:
*/

const sayHello1 = () => {
    console.log("Selamat pagi semuanya!")
};

sayHello1();

/* output
Selamat pagi semuanya!

Satu hal yang menarik, ketika body dari function hanya terdiri dari satu baris, 
kita bisa menghapus tanda kurung kurawal.

Tentunya ini akan menghemat baris kode yang kita tulis.
 */

const sayName = name => console.log(`Nama saya ${name}`);
sayName("Leia");

const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();

/* output
Nama saya Leia
Selamat pagi semuanya!
 */