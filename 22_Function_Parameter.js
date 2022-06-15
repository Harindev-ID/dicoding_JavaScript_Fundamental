/**
 * Function Parameter
Pada materi sebelumnya, kita telah berkenalan dengan fungsi yang merupakan suatu blok kode yang dapat menerima input dan menghasilkan output tertentu. 
Input ke dalam sebuah fungsi dikirimkan melalui parameter.

Di dalam fungsi kita akan banyak bertemu istilah parameter & argument. 
Penggunaan istilah ini sering kali tertukar, bahkan di kalangan developer. 

Perbedaan mendasar antara keduanya antara lain:

Parameter merupakan variabel yang didefinisikan sebagai inputan dari sebuah fungsi. Contoh:

function multiply(a, b) {
    return a * b;
}

Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi. Contohnya:

multiply(3, 4);

Parameter dari fungsi dapat berupa tipe data apa pun, mulai dari string, number, object, 
bahkan fungsi lain.

Jika parameter dari fungsi adalah sebuah object, 
kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya. 
Contohnya seperti berikut:
 */

const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

/* output
kren is Kylo Ren
*/