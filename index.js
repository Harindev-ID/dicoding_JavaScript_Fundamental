import coffeeStock from './state.js';
 
const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}
 
displayStock(coffeeStock);


//------------------------------------------------------------------
// const {coffeeStock, isCoffeeMachineReady} = require('./state');
 
// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);


// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//         console.log("Kopi berhasil dibuat!");
//     } else {
//         console.log("Biji kopi habis!");
//     }
// }
 
// makeCoffee("robusta", 80);

// cmon men why??????
