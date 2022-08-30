/*
Sekarang mari kita lihat bagaimana lodash ini bekerja. Di dalam dokumentasinya, lodash menyebutkan bahwa mereka menyediakan utilitas untuk membuat JavaScript lebih mudah dengan menghilangkan kerumitan ketika menggunakan array, number, object, string, dll.

Misalnya, untuk menjumlahkan setiap nilai number di dalam array, lakukan dengan cara seperti berikut.

import _ from 'lodash'
const myArray = [1, 2, 3, 4];
let sum = 0;
 
for(let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
 
console.log(sum);

/* output
10

Atau, kita bisa menggunakan fungsi reduce seperti berikut:

import _ from 'lodash';
 
const myArray = [1, 2, 3, 4];
let sum = myArray.reduce((prev, curr) => {
    return prev + curr;
});
 
console.log(sum);
 
/* output
10

Dengan lodash, kita dapat meringkas kode menjadi seperti ini:
*/

import _ from 'lodash';
 
const myArray = [1, 2, 3, 4];
const sum = _.sum(myArray);
 
console.log(sum);
 
/* output
10
*/
