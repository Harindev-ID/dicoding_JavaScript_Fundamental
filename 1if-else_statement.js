const isRaining = false;

console.log("Preparation before going to work");

if (isRaining) {
    console.log("Today is rain, please take an umbrella");
} else {
    console.log("Just go, the weather is sunny today ")
}


console.log("Going to work");


let language = "Japanese";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);

// condition ? true expression : false expression

const isMember = false;
const discount = isMember ? 0.9 : 1;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)

// truthy falsy..

let name = "";

if (name) {
    console.log(`Halo, ${name}`);
} else {
    console.log("Nama masih kosong");
}

