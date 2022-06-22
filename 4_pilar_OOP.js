/**
 * 4 Pilar OOP
Seperti yang sempat kita singgung pada awal modul OOP, 
terdapat empat pilar dalam OOP, yaitu encapsulation, abstraction, inheritance, dan polymorphism.

Encapsulation
Enkapsulasi adalah kondisi di mana attribute atau method di dalam class dibungkus dan bersifat privat. 
Artinya objek lain tidak bisa mengakses atau mengubah nilai dari property secara langsung. 
Pada contoh kasus Mail kita tidak bisa langsung mengubah daftar contact, 
namun kita bisa menambahkannya melalui fungsi saat kirim pesan atau mengambil data tersebut melalui method showAllContacts.

https://www.dicoding.com/academies/256/tutorials/13937?from=15895#

class Mail{
    constructor(author) {
        this._contacts = [];
        this.from = author;
    }
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}
 */

/**
 * Abstraction
 * 
Abstraksi bisa dibilang merupakan penerapan alami dari enkapsulasi. 
Abstraksi berarti sebuah objek hanya menunjukkan operasinya secara high-level. 
Misalnya kita cukup tahu bagaimana pesan dikirim atau diterima, 
namun kita tidak perlu tahu seperti apa proses enkripsi dan dekripsi isi pesan, 
atau bagaimana sebuah daftar contact dapat bertambah.
 */

