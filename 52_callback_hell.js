/*
Callback Hell
Kita sudah mengetahui bahwa callback dibutuhkan untuk mendapatkan nilai yang berasal dari asynchronous function. 
Lantas bagaimana jika terdapat proses yang saling bergantung satu sama lain? Contohnya, untuk membuat kue tahapan yang perlu kita lakukan adalah:

Menyiapkan bahan
Membuat adonan
Memasukkan adonan ke cetakan
Memanggang adonan
Tahapan tersebut sangat bergantung satu sama lain. 
Kita tidak bisa mencetak adonan sebelum menyiapkan bahan dan membuat adonan. 
Jika seluruh tahapan tersebut berjalan secara synchronous, mungkin kita bisa melakukannya seperti ini:

function makeACake(...rawIngredients) {
    const ingredients = collectIngredients(rawIngredients);
    dough = makeTheDough(ingredients);
    pouredDough = pourDough(dough);
    cake = bakeACake(pouredDough);
    console.log(cake);
}
*/