/**
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai boolean apa pun.
 *
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */


// TODO
const restaurant = {
    name: "Shanghai Food",
    city: "Shanghai",
    favoriteDrink: "Coffee Mochalatte",
    favoriteFood: "Fried Rice",
    isVegan: false,
};

restaurant.name = "Tiongkok Food";
restaurant.favoriteDrink = "Juice Mango";

const name = {
    name: restaurant.name,
}

const favoriteDrink = {
    favoriteDrink : restaurant.favoriteDrink,
}

console.log(restaurant);
console.log(name)
console.log(favoriteDrink)
/**
 * Jangan hapus kode di bawah ini
 */
 module.exports = { restaurant, name, favoriteDrink };