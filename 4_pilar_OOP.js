/**
 * 4 Pilar OOP
Seperti yang sempat kita singgung pada awal modul OOP, 
terdapat empat pilar dalam OOP, yaitu encapsulation, abstraction, inheritance, dan polymorphism.

Encapsulation
Enkapsulasi adalah kondisi di mana attribute atau method di dalam class dibungkus dan bersifat privat. 
Artinya objek lain tidak bisa mengakses atau mengubah nilai dari property secara langsung. 
Pada contoh kasus Mail kita tidak bisa langsung mengubah daftar contact, 
namun kita bisa menambahkannya melalui fungsi saat kirim pesan atau mengambil data tersebut melalui method showAllContacts.

https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:8c95641c84aae61c3219314b96c9b51f20220613105529.png

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

/**
 * Inheritance
 * 
Beberapa objek bisa memiliki beberapa karakteristik atau perilaku yang sama, 
tetapi mereka bukanlah objek yang sama. 

Di sinilah inheritance atau pewarisan berperan. 
SMS dan jenis pesan lainnya memiliki karakteristik umum yang dimiliki juga oleh jenis pesan lainnya, 
seperti memiliki konten pesan, alamat/nomor pengirim, alamat/nomor penerima, dsb. 
Maka dari itu, Email sebagai objek turunan (subclass) mewarisi semua sifat dan perilaku dari objek induknya (superclass) Mail. 
Begitu juga dengan objek Whatsapp juga mewarisi sifat dan perilaku yang sama. 
Namun, whatsapp bisa membuat grup, mengirim broadcast message sedangkan Email tidak.

https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:1eef923564c565cea0e9992208e78fab20220613105547.png
*/