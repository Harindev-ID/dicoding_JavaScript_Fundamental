/*
Masih terkait dengan array, ES6 memiliki fitur menarik untuk membantu pengelolaan array menjadi lebih mudah, yaitu spread operator.

Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. 
Spread operator dituliskan dengan tiga titik (...). Mari kita lihat contoh kode berikut:
*/

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites);

/* output
Seafood Salad Nugget Soup
*/

/* Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru. 
Jika tidak menggunakan spread operator ini maka hasilnya akan seperti ini: 
*/

const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorites1, others];

console.log(allFavorites);

/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/

/*
Nilai array tidak akan tergabung. Alih-alih menggabungkan nilainya, 
variabel allFavorites menjadi array baru yang menampung dua array di dalamnya. 
Nah, lantas bagaimana jika kita mencoba menggunakan spread operator?
*/

const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
const others1 = ["Cake", "Pie", "Donut"];

const allFavorites1 = [...favorites2, ...others1];

console.log(allFavorites1);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/


/**
 Selain array, spread operator juga bisa digunakan untuk object literals. 
 Hal ini memungkinkan kita dapat menggabungkan beberapa object dengan kode yang lebih ringkas.
 */

 const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/

