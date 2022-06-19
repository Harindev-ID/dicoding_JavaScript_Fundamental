/**
 * Property & Method
Property
Property adalah atribut dari sebuah objek, 
property sendiri dapat berupa tipe data primitive--seperti yang sebelumnya dibahas-- 
bahkan bisa juga berbentuk object dan fungsi. 

Misalkan isi pesan, list penerima, data pengirim, perintah kirim, dll. 
Sebagai contoh:
 */

/*
// cara 1
class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
        this.yourOtherProperty = 'the values';
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this.contacts.push(to); // menyimpan kontak baru
    };
}
 
// cara 2
function mail1() {
    this.from = 'pengirim@dicoding.com';
    this.contacts = [];
    this.yourOtherPrototype = 'the values';
};
 
mail1.prototype.sendMessage = function (msg, to) {
    console.log(`you send: ${msg} to  ${to} from ${this.from}`);
    this.contacts.push(to); // menyimpan kontak baru
};

*/

/**
 * Contoh class di atas memiliki 3 (tiga) property dan method. 
 * Yang perlu diingat, this merupakan representasi bahwasanya variable yang ditunjuk adalah atribute yang bersifat global, 
 * dan menempel dengan objek tersebut. 
 * 
 * Sehingga, variabel dapat diakses dari method ataupun property di dalam kelas tersebut dengan menambahkan this di depannya. 
 * Sebagai gambaran, kita akan coba ubah kode di atas menjadi seperti berikut ini.
 */

 class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
    }
    sendMessage(msg, to, from) {
        console.log(`you send: ${msg} to ${to} from ${from}`);
        // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
        this.contacts.push(to);
    };
}

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');

/**
you send: hallo to penerima@dicoding.com from aku@gmail.com
**/

