// for loop

for(let i = 0; i < 5; i++) {
    console.log(i);
}

for(let i = 10; i > 0  ; i--) {
    console.log(i);
}

// for of

let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}

let numArray = [10, 9, 8, 7, 6, 5];

for(const arrayNum of numArray) {
    console.log(arrayNum)
}

// while and do-while

let i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}

let x = 1;

do {
    console.log(x);
    i++;
} while (x <=100);