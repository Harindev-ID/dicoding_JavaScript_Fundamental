/**
 * Overriding Method
 * 
Overriding adalah teknik untuk kita melakukan perombakan (baik secara keseluruhan maupun tidak), 
pada sebuah method ataupun constructor yang dimiliki oleh parent class. 
Sehingga, ia dapat disesuaikan dengan behavior di child class.
 */


/**
 * Overriding Constructor
 * 
Sebelumnya kita telah mempelajari tentang constructor dan juga pewarisan. 
Pada contoh kasus di inheritance atau pewarisan, kita menemukan kasus seperti di bawah ini.

class WhatsApp extends Mail{
  constructor() {
    super();
    this.username = 'dicoding';
    this.isBussinessAccount = true;
  }
}
 
//pemanggilan
const wa1 = new WhatsApp(080111000222);

Sekarang bagaimana jika kita menambahkan username dan isBussinessAccount ke dalam constructor? 
Jika kita membuat constructor baru kodenya akan seperti ini:

class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phoneNumber) {
        super();
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
}
 
const wa1 = new WhatsApp('dicoding', true, 089989090898);

Lalu apakah properti wa1.from masih bisa diakses? Kita coba saja.
*/

class Mail {
    constructor(author) {
      this.from = author;
      this._contacts = [];
    }
  
    sendMessage(msg, to) {
      console.log(`you send: ${msg} to ${to} from ${this.from}`);
      this._contacts.push(to);
    }
  
    showAllContacts() {
      return this._contacts;
    }
  
  }
  
  class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phoneNumber) {
        super();
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
  }
  
  const wa1 = new WhatsApp('dicoding', true, 6281111111);
  
  console.log(wa1.from); // undefined