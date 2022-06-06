/**
 Destructuring array serupa dengan destructuring object. Object menggunakan tanda kurung kurawal { } sedangkan array menggunakan tanda kurung siku [ ]. 
 Perbedaan lainnya adalah destructuring array bekerja berdasarkan posisi daripada penamaan propertinya. Berikut contoh dari destructuring array pada ES6:
 */

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
 
/* output:
Seafood
Salad
Nugget
Soup
*/

const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [, , thirdFood1 ] = favorites1;
 
console.log(thirdFood1);
 
/* output:
Nugget
*/

/**
 Destructuring Assignment
Kita juga bisa melakukan destructuring assignment pada array. Namun, tidak seperti object, kita tidak perlu membungkusnya dengan tanda kurung. 
Contohnya seperti berikut:
 */

const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
 
let myFood2 = "Ice Cream";
let herFood2 = "Noodles";
 
[myFood2, herFood2] = favorites2;
 
console.log(myFood2);
console.log(herFood2);
console.log(favorites2);
/* output:
Seafood
Salad
*/

/**
 * Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antara dua variabel. 
 * Sebelum ES6, untuk melakukan hal ini kita menggunakan cara manual menggunakan algoritma sorting seperti ini:
 */

 var a = 1;
 var b = 2;
 var temp;
  
 console.log("Sebelum swap");
 console.log("Nilai a: " + a);
 console.log("Nilai b: " + b);
  
 temp = a;
 a = b;
 b = temp;
  
 console.log("Setelah swap");
 console.log("Nilai a: " + a);
 console.log("Nilai b: " + b);
  
 /* output
 Sebelum swap
 Nilai a: 1
 Nilai b: 2
 Setelah swap
 Nilai a: 2
 Nilai b: 1
 */