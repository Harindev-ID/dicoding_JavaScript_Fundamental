/**
 * Property & Method
Property
Property adalah atribut dari sebuah objek, 
property sendiri dapat berupa tipe data primitive--seperti yang sebelumnya dibahas-- 
bahkan bisa juga berbentuk object dan fungsi. 

Misalkan isi pesan, list penerima, data pengirim, perintah kirim, dll. 
Sebagai contoh:
 */

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
function Mail() {
    this.from = 'pengirim@dicoding.com';
    this.contacts = [];
    this.yourOtherPrototype = 'the values';
};
 
Mail.prototype.sendMessage = function (msg, to) {
    console.log(`you send: ${msg} to  ${to} from ${this.from}`);
    this.contacts.push(to); // menyimpan kontak baru
};