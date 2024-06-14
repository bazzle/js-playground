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

