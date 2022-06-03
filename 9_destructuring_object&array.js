/**
 * Apa sebenarnya destructuring object dan array itu? Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil.

Secara tidak sadar mungkin kita pernah melakukan destructuring. Namun, sebelum ES6 hal tersebut dilakukan dengan cara seperti ini:
 */

const foods = ['Pie', 'Cake', 'Honey']
 
const myFood = foods[0]
const yourFood = foods[1]
const ourFood = foods[2]
 
console.log(myFood, yourFood, ourFood)
 
/* output:
Pie Cake Honey
*/

const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const firstName = profile.firstName
const lastName = profile.lastName
const age = profile.age
 
console.log(firstName, lastName, age)
 
/* output:
John Doe 18
*/