/**
 * Object Composition
Setelah konsep dari OOP kita pelajari, pasti sudah ada gambaran terkait dengan bagaimana membuat sebuah Parent Class kemudian membuat berbagai Child Class yang mana mewarisi sifat-sifat dari parent-nya, serta dapat menambahkan, mengubah, bahkan merombak setiap method yang ada.

Sebuah paradigma OOP akan menghasilkan hierarki, di mana semakin besar software yang kita buat, maka akan semakin besar dan rumit juga hierarkinya.

dos:a3591c78205225c905d16e233e42a85d20220613105627.png

Coba bayangkan saja jika kita ingin membuat Child Class bernama PersonalEnterpriseWhatsApp di mana blueprint kelas tersebut kita ingin menggunakan method dan attribute yang ada di PersonalWhatsApp dan BussinessWhatsApp.  Kita perlu merombak kembali kelas-kelas parent-nya hanya untuk membuat sebuah kelas baru. Nah, di sinilah pendekatan object composition berperan.

Object composition adalah prinsip komposisi dari sebuah alur bisnis tanpa perlu melakukan pewarisan dari parent class. Prinsip ini didasarkan pada kumpulan perilaku (method/function) yang sudah kita definisikan. Sehingga, ketika ingin membuat alur bisnis lain dengan beberapa perilaku (method) yang sama, kita dapat menggunakan fungsi yang sudah ada tanpa melakukan inheritance/pewarisan.

Pada dasarnya konsep yang harus dilakukan adalah:

Memisahkan fungsi-fungsi umum yang biasa digunakan.
const yourGenericAction = params => ({
  actionA: () => { /** do action A **/},
  actionB: () => { /** do action B **/},  
// });
/** 
Membuat Class seperti biasa.
const YourClassName = (paramA, paramB) => {
}

Kita dapat menyimpan atribut yang kita punya ke dalam sebuah object, biasanya seorang engineer menggunakan konstanta dengan nama self atau state untuk menampung attribute.
const YourClassName = (paramA, paramB) => {
  const self = {
    paramA,
    paramB
  };
}

Menambahkan perilaku (method/function) yang hanya ada pada kelas tersebut.
const YourClassName = (paramA, paramB) => {
  const self = {
    paramA,
    paramB
  };
  
  const yourSpecificActions = self => ({
    specificActionA: { /** do action A **/},
  });
}

/** 
Membuat kumpulan attribute, generic method, dan spesific method menjadi satu objek.
const YourClassName = (paramA, paramB) => {
  const self = {
    paramA,
    paramB
  };
  
  const yourSpecificActions = self => ({
    specificActionA: { /** do action A **/},
  });
/*  
  return Object.assign(self, yourGenericAction(self), yourSpecificActions(self))
}

/*
Sebagai contoh, dari hirarki Mail yang sudah kita buat sebelumnya. kita akan merombak dan membuatnya dengan pendekatan Object composition.
 
.*/