// Set variables
const container = document.querySelector('.container');

const coffeeRange = [
    {
        'name': 'Colombia El Carmen',
        'type':'ground',
        'origin': 'Colombia',
        'price': '£6.75',
        'inStock': false
    },
    {
        'name': 'Brazilian Campestre no 109 ',
        'type':'ground',
        'origin': 'Brazil',
        'price': '£8.22',
        'inStock': false
    },
    {
        'name': 'Swiss Water Decaf blend no11',
        'type':'ground',
        'origin': 'Switzerland',
        'price': '£6.75',
        'inStock': false
    },
    {
        'name': 'Mocha Java Blend no3',
        'type':'ground',
        'origin': 'Java',
        'price': '£8.22',
        'inStock': true
    }
];


// MODIFY ARRAY ------------------------------------------------------

const removeFirst = () => {
    const firstItem = coffeeRange.shift();
    // console.log(firstItem);
}
// removeFirst();

// Remove permanently, using splice
const removePermantently = (toRemove) => {
    coffeeRange.splice(toRemove, 1);
}

// removePermantently(0);

// FOREACH -----------------------------------------------------------

let outOfStock = 0;

coffeeRange.forEach((i) => {
    if (i.inStock === false){
        outOfStock++;
    }
});

// PRINT TO DOM ------------------------------------------------------

let coffeeList;

if(coffeeRange.length > 0 && outOfStock != coffeeRange.length ){
    coffeeList = document.createElement('ul');
    coffeeList.classList.add('coffee-range');
    container.appendChild(coffeeList);
    coffeeRange.forEach((i) => {
        const coffeeListItem = document.createElement('li');
        let priceDisplay = i.inStock ? i.price : "Sorry we're out of stock";
        coffeeListItem.innerHTML = `${i.name} – ${priceDisplay}`;
        coffeeList.appendChild(coffeeListItem);
    })
} else {
    container.innerHTML = "We are out I'm afraid";
}
// console.log(coffeeList);


// SOME DOM MANIPULATION ------------------------------------------------------

// insert before
const mainHeading = document.createElement('h1');

mainHeading.innerHTML = "Hello, this is our coffee range";
mainHeading.classList.add("main-heading");

document.body.insertBefore(mainHeading, container);

// clone node
// True to clone contents also
const clonedContainer = container.cloneNode(true);
// console.log(clonedContainer);

// FOR LOOP ------------------------------------------------------

// Get list items
const coffeeListItems = document.querySelectorAll('.coffee-range li');

for (const item of coffeeListItems){
    item.classList.add('coffee-range__item');
}

// console.log(coffeeListItems);

// FOR IN LOOP --------------------------

// For looping through properties of an object
const coffeeObj = coffeeRange[0];
for (const property in coffeeObj){
    // console.log(`${property} : ${coffeeObj[property]}`);
}

// ADD STYLING TO OBJECT DIRECTLY --------------------------

let bodyStyles = {
    "margin" : 0
}

let baseStyles = {
    "fontFamily" : "sans-serif"
}

let headingStyles = {
    ...baseStyles,
    "fontSize" : "22px",
    "padding" : "1.2rem"
}

let listStyles = {
    ...baseStyles,
    "backgroundColor" : "gold",
    "color" : "black",
    "fontFamily" : "sans-serif",
    "font-weight" : "bold",
    "font-size" : "16px",
    "line-height" : 1.4,
    "listStyleType" : "none",
    "padding" : "1.2rem"
}

Object.assign(document.body.style, bodyStyles);
Object.assign(coffeeList.style, listStyles);
Object.assign(mainHeading.style, headingStyles);