let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]
*/

// mengakses array

let myArray1 = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray1[1]);

/* output:
42.5
*/

// Mengakses nilai array lebih dari indexnya

let myArray2 = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray2[0]);
console.log(myArray2[1]);
console.log(myArray2[2]);
console.log(myArray2[3]);
console.log(myArray2[4]);
console.log(myArray2[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

/* output:
Cokelat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/

// Memanipulasi nilai array dengan push

const myArray3 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray3.push('JavaScript');
console.log(myArray3);

/* output
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */

// Memanipulasi nilai array dengan pop

const myArray4 = ["Orange", 42.5, 22, true, "Programming"];

myArray4.pop();
console.log(myArray4);

/* output
[ Orange, 42.5, 22, true ]
*/

// Peraktek shift dan unsfhit

const myArray5 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray5.shift();
myArray5.unshift("Apple");

console.log(myArray5);

/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/

/*
push menambah nilai array dari belakang/akhir
pop keluarkan nilai array dari belakang/akhir
shift keluarkan nilai array dari depan/awal
unshift menambah nilai array dari depan/awal
*/

// Menghapus data dari Array dengan delete

const myArray6 = ["Cokelat", 42.5, 22, true, "Programming"];

delete myArray6[1];
console.log(myArray6);

/* output
[ 'Apple', <1 empty item>, 22, true, 'Programming' ]
*/

