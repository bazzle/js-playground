// FUNCTIONS ----------------------------------------

// console.log(checkOrigin('India'));

// FUNCTION DECLARATION
// named function, can be referenced before. As this is added to the global scope, added to window object
// function checkOrigin(origin){
//     return origins.includes(origin);
// }

// FUNCTION EXPRESSION
// anonymous function, needs to be added to a variable name. Cannot be referenced before, not added to global scope
// const checkOrigin = function(origin){
//     return originsNew.includes(origin);
// };

// IMMEDIATELY INVOKED FUNCTION EXPRESSION ------------
// use this for scoping, not to pollute the global object. Only variables within can be accessed inside here.
// (function(){
//     console.log('from an Immediately Invoked Function Expression');
// })();

// FUNCTION PARAMETERS --------------------------------------------------------------

// Default parameter, if its not added to the function instance
function priceMessage(amount, currency = '$'){
    return `This order is ${currency}${amount}`;
}
console.log(priceMessage('12.30'));

// REST -----------------------------------------------------------------------------

// When you want to be able to add an arbitrary amount of parameters

function averageHousePrice(... prices){
    const totalAll = prices.reduce((total, price) => total + price);
    return totalAll / prices.length;
}

console.log(averageHousePrice(270, 250, 360, 285, 230, 300, 300, 350, 260, 325, 280, 350, 310, 250, 260, 365, 280, 375));
