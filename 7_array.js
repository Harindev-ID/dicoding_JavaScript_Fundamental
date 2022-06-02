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
