/**

Async-await
Pembahasan terakhir mengenai asynchronous process kali ini adalah penggunaan syntax async-await. Apa itu?

Seperti yang kita tahu, penulisan kode asynchronous sedikit berbeda dengan proses synchronous. Contohnya, untuk mendapatkan nilai coffee dari sebuah proses asynchronous, kita tidak dapat melakukannya dengan teknik seperti ini:

function makeCoffee() {
    const coffee = getCoffee(); // async process menggunakan promise
    console.log(coffee);
}
 
makeCoffee();

Melainkan harus seperti ini:

>> Promise 
function makeCoffee() {
    getCoffee().then(coffee => {
        console.log(coffee);
    });
}
 
makeCoffee();

>> Callback
function makeCoffee() {
    getCoffee(function(coffee) {
        console.log(coffee);
    });
}
 
makeCoffee();

------
Namun, sejak ES8 (ECMAScript 2017) kita dapat menuliskan asynchronous process layaknya synchronous process dengan bantuan keyword async dan await.

Fitur async/await sebenarnya hanya syntactic sugar. 
Itu berarti secara fungsionalitas bukanlah sebuah fitur baru dalam JavaScript. 
Namun, hanya gaya penulisan baru yang dikembangkan dari kombinasi penggunaan Promise dan generator 
(pembahasan mengenai generator bisa Anda pelajari di sini). 
Sehingga, async/await ini tidak dapat digunakan jika tidak ada Promise.

Lantas bagaimana cara menggunakan async/await ini? Pada contoh kode sebelumnya, 
mari kita lihat juga fungsi getCoffee() dan bagaimana ia mengembalikan promise.

const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}

Untuk mendapatkan nilai dari fungsi getCoffee() menggunakan .then(), maka kode kita akan seperti ini:

function makeCoffee() {
    getCoffee().then(coffee => {
        console.log(coffee);
    });
}
 
makeCoffee();
 
/* output
Kopi didapatkan!


*/