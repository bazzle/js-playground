// checking global object, referencing function declared in index.html
// console.log(checkOriginNew('Bolivia'));
// global object is accessible within Window

const container = document.querySelector('.container');

// Some arrays and objects to play around with

const origins = ['Brazil', 'India', 'Colombia', 'Guetamala', 'El Salvador'];
const types = ['ground', 'coarse', 'roasted beans', 'raw beans'];

// Array of object literals

const coffeeRange = [
    {
        name: 'Colombia El Carmen',
        type:'ground',
        origin: 'Colombia',
        price: '£6.75',
        inStock: false
    },
    {
        name: 'Brazilian Campestre no 109 ',
        type:'ground',
        origin: 'Brazil',
        price: '£8.22',
        inStock: false
    },
    {
        name: 'Swiss Water Decaf blend no11',
        type:'ground',
        origin: 'Switzerland',
        price: '£6.75',
        inStock: false
    },
    {
        name: 'Mocha Java Blend no3',
        type:'raw beans',
        origin: 'Java',
        price: '£8.22',
        inStock: true
    },
    {
        name: 'Italian instant',
        type:'Instant',
        origin: 'Italy',
        price: '£6.12',
        inStock: true
    }
];

// Single coffee product object to play with

let coffeeObj = {
    name: 'Mocha Java Blend no3',
    type:'ground',
    origin: 'Java',
    price: '£8.22',
    inStock: true
}

// Object with nesting

let currentOrder = {
    customerName : "Freiherr Wilhelm Maximilian von Hohenstein-Schwarzenberg",
    shortName : "brazilian-campestre",
    address : {
        firstLine : "Schloss Hohenstein",
        secondLine : "Königstraße 123",
        postCode : "80539",
        city : "München",
        country : "Germany"
    },
    status : "Out for delivery"
}

// ARRAY STUFF ------------------------------------------------------

// Reorder alphabetically
origins.sort();

// Get index by name
const indexItem = origins.indexOf('Colombia');
// Show array and indexitem
// console.log(origins, indexItem);

// Slice away specific items
const slicedArray = origins.slice(1, 3);

// REDUCE ------------------------------------------------------

(function(){
    // Reduce, does arithmetic on numbers within an array
    const numArray = [4, 1, 4, 2, 9];
    const outputNum = numArray.reduce((total, currentValue) => {
        // return total * currentValue;
        // return total / currentValue;
        return total + currentValue;
    });
    // console.log(outputNum);
})();

// MAP/FILTER/SOME ------------------------------------------------------

(function(){

    // .map transforms items in array and returns new array
    // const coffeeRangeUpper = coffeeRange.map((item) => {
    //     return item.name.toUpperCase();
    // });

    // .filter returns item(s) that return true
    // const coffeeRangeNoBrazil = coffeeRange.filter((item) => {
    //     return item.origin !== 'Brazil';
    // })

    // Obnoxious way to do it in one line
    // const coffeeRangeNoBrazil = coffeeRange.filter( item => item.origin !== "Brazil" )

    // Some checks if an array exists and returns boolean
    // const doWeHaveSwiss = coffeeRange.some((item) => {
    //     return item.origin == "Switzerland";
    // });

    // you can chain these array methods. you can't chain foreach
    // console.log(doWeHaveSwiss);

    const coffeeRangeModified = coffeeRange
    .map((item) => item.name.toUpperCase())
    .filter((item) => item.origin !== 'Brazil');
    // console.log(coffeeRangeModified);

})();

// ARRAY DESTRUCTURING ------------------------------------------------------

(function(){
    // Array destructuring
    // You create an array placeholder, and fill it with the array you reference
    const [coffee1, coffee2, coffee3, coffee4] = coffeeRange;
    // console.log(coffee1);

    // Get all other items from array (rest parameter)
    const [coffeefirst, ...others] = coffeeRange;
    // console.log(others);
})();

// SET --------------------------------------------------------------

(function(){
    // Set object lets you store unique values of any type - primitive values or object references

    // Here I have converted the origins into an array, and added coffeeRange as an extra (last) item
    let originsSet = new Set(origins);
    originsSet.add(coffeeRange);

    // Delete items
    // originsSet.delete([0]);
    // originsSet.delete('India');

    // clear all items
    // originsSet.clear();

    // Check if exists
    const isIndia = originsSet.has('India');
    // console.log(isIndia);

    // Check number of items
    const checkSetSize = originsSet.size;
    // console.log(checkSetSize);

    // console.log(originsSet);


    // TWO DIMENSIONAL/NESTED ARRAYS
    let gridArray = [
        [11, 23, 33],
        [28, 74, 92],
        [38, 62, 59]
    ];

    // console.table(gridArray);
    // first value is row, second is column
    // console.log(gridArray[0][2]);
})();


// OBJECTS WITH FUNCTIONS INSIDE -----------------------------------------

const coffeeChecker = {
    needsRoasting : function(coffee){
        return coffee.type === 'raw beans'
    },
    needsMachine : function(coffee){
        return coffee.type != 'instant'
    },
    under8 : function(coffee){
        const priceNumber = parseInt(coffee.price.replace('£', ''));
        return priceNumber < 8
    },
    inStock : function(coffee){
        return coffee.inStock
    },
    rawbeansInStock : function(coffee){
        return this.needsRoasting(coffee) && this.inStock(coffee)
    }
    // "this" keyword doesn't work if using arrow function
};

// console.log(coffeeChecker.needsRoasting(coffeeRange[3]));
// console.log(coffeeChecker.under8(coffeeRange[2]));
// console.log(coffeeChecker.inStock(coffeeRange[1]));
// console.log(coffeeChecker.rawbeansInStock(coffeeRange[3]));


// FOR LOOP -----------------------------------------

function forloopList(){
    const newList = document.createElement('ul');
    container.appendChild(newList);
    for (var num = 1; num <= 10; num++){
        const newListItem = document.createElement('li');
        newList.append(newListItem);
        newListItem.innerText = num;
    }
};

// forloopList();


// SWITCH STATEMENT -----------------------------------------

(function(){

    // A better way of returning things based on conditions, better than a load of if statements
    // This simply returns a string based on the string that's passed in
    const favCoffeeQuestion = (coffee) => {
        switch (coffee){
            case 'Italian' : return 'The Italian Job blend no2';
            break;
            case 'Javan' : return 'Mocha Java blend no3!!';
            break;
            case 'Swiss' : return 'Swiss water decaf blend no11';
            break;
            default: return 'You need to pass in a coffee type';
        }
    }
    // console.log(favCoffeeQuestion('Italian'));

    // This sets a variable value based on a string passed in. Here we pass in a coffee from the coffee range (type)
    const deliveryTypeQuestion = (deliveryType) => {
        switch (deliveryType){
            case 'ground' : deliveryType = 'Can deliver';
            break;
            case 'raw beans' : deliveryType = 'Pickup only';
            break;
            default: deliveryType = 'Please get in contact';
        }
        return deliveryType;
    }

    // console.log(deliveryTypeQuestion(coffeeRange[2].type));

})();

// TYPE CONVERSION -----------------------------------------

(function(){
    const number1 = Number("7");
    const number2 = 2;
    const total = number1 + number2;
    const stringTotal = String(total);
    
    // console.log(typeof total);
    // console.log(typeof stringTotal);
})();


// OPTIONAL CHAINING -----------------------------------------

(function(){
    currentOrder.address = null;
    // Prevent error if the object is not there
    // console.log(currentOrder.address?.firstLine); // null instead of error
})();

// OBJECT CONSTRUCTOR -----------------------------------------

(function(){

    const premiumCoffee = new Object()
    premiumCoffee.name = "INDONESIA KERINCI HONEY Nº 245";
    premiumCoffee.type = "Raw beans";
    premiumCoffee.origin = "Indonesia";
    premiumCoffee.price = "£6.12";
    premiumCoffee.inStock = true;
    
    // console.log(premiumCoffee);
    
    // Delete operator
    delete premiumCoffee.name;
    // console.log(premiumCoffee.name);

})();

// OBJECT CONSTRUCTOR FUNCTION -----------------------------------------

function coffee(name, type, origin, price, inStock){
    this.name = name
    this.type = type
    this.origin = origin
    this.price = price
    this.inStock = inStock
    this.nameType = this.name + ' ' + this.type
}

let coffee1 = new coffee('Colombia El Carmen', 'ground', 'Colombia', '£6.75', false);
let coffee2 = new coffee('Mocha Java Blend no3', 'raw beans', 'Java', '£8.22', true);


(function(){
    
    // create new property for this instance
    coffee1.quality = 'Premium';
    // or
    // coffee1['quality'] = 'Premium';
    
    // console.log(coffee1);

})();

// OBJECT PROTOTYPE -----------------------------------------

(function(){
    // Built in properties and methods we don't create ourselves but we have access to.
    // For example on an array, we have a lot of built in array methods

    // console.log(Object()); // returns minimum properties and methods that is passed down to all objects

    // Add a new object prototype property
    coffee.prototype.grade = 1;
    // console.log(coffee2);
})();

// INHERITING OBJECT PROPERTIES -----------------------------------------

// coffee products from South America all share common properties

(function(){

    const southAmericaBase = {
        region : "South America",
        originCode : "3278",
        Imported : true,
        distributionHub : "El Paso"
    }

    // Inhherits into the object prototype
    const coffee3 = Object.create(southAmericaBase);
    // console.log(coffee3.region);

// COPYING OBJECT PROPERTIES -----------------------------------------

// This imports the base obect in, as a nested object
let SAcoffee1 = {
    southAmericaBase,
    "name" : "COLOMBIA CAMIONETTA ANOXIC SUGARCANE DECAF Nº 238",
    "origin" : "Colombia"
};

// This imports the base object, as inline properties
let SAcoffee2 = {
    ...southAmericaBase,
    "name" : "BRAZIL MIÓ MESODO Nº 234",
    "origin" : "Brazil"
};

// Or we can import 2 objects into one
let SAcoffee3Details = {
    "name" : "BRAZIL MIÓ MESODO Nº 234",
    "origin" : "Brazil"
}

// This is a spread operator
let SAcoffee3 = {
    ...southAmericaBase,
    ...SAcoffee3Details
}

// console.log(SAcoffee3);

// Or we can merge using assign object method
let SAcoffee3Combined = Object.assign(SAcoffee3Details, southAmericaBase);
// console.log(SAcoffee3Combined);


// Looping through object properties

for (property in coffeeObj){
    // skip the name
    if (property === name){
        continue;
    }
    // console.log(property);
}

// Looping through object properties, accessing the keys and values

for (const [key, value] of Object.entries(coffeeObj)){
    // console.log(`This is the key: ${key} / This is the value: ${value}`);
};

// different ways of getting parts of the object
// console.log(Object.entries(coffeeObj));
// console.log(Object.keys(coffeeObj));
// console.log(Object.values(coffeeObj));


})();

// DYNAMIC OBJECTS ----------------------------------------------------------

(function(){

    // Constructor
    function coffee(name, type, origin, priceBase, pricePremium, inStock){
        this.name = name;
        this.type = type;
        this.origin = origin;
        this.priceBase = priceBase;
        this.pricePremium = pricePremium;
        this.inStock = inStock;
    }

    // New object
    let coffee1 = new coffee('COLOMBIA CAMIONETTA ANOXIC SUGARCANE', 'Rare bean', 'Colombia', 10, 4.95, true);
    
    // Create new property, dynamically using value from another property
    let newProp = `${coffee1.type} roasting method`;
    coffee1[newProp] = 'anoxic fermentation';
    
    // console.log(coffee1);
    
    const coffeeList = document.createElement('ul');
    for (property in coffee1){
        const coffeeListItem = document.createElement('li');
        coffeeListItem.innerHTML = property;
        coffeeList.append(coffeeListItem);
    };
    container.append(coffeeList);

})();


// COMPUTED PROPERTY NAMES --------------------------------------------------------------------------

(function(){
    
    // Object literal
    const name = "INDIAN MONSOON MALABAR COFFEE Nº 53";
    
    // This is a way we can pass in the variable string to the key itself
    // first one, is just the word "name", second one wrapped in brackets passes in the variable 
    const coffee2 = {
        name : name,
        [name] : name
    }

    // console.log(coffee2);

})();


// ORDERING / CALLBACK FUNCTION -----------------------------------------------------------------------------

(function(){
    
    // Run at the same time / asynchronously

    function callBackAsync(callback){
        setTimeout(() => {
            // console.log('run main');
        },2000);
        callback();
    };

    // Run after other / synchronously
    function callBackSync(callback){
        // console.log('Run main');
        setTimeout(() => {
            callback();
        },1000)
    }

    // Run the function, with an anonymous function as callback
    callBackSync(() => {
        // console.log('run callback')
    });

})();



// PASS ARGUMENTS TO CALLBACK FUNCTION -----------------------------------------------------------------------------

// Can pass arguments to callback function
// The function reference has to be the last argument

(function(){
    function listCoffees(passtoCallback, callback){
        setTimeout(() => {
            coffeeRange.forEach((item) => {
                // console.log(item.name);
            })
            callback(passtoCallback);
        },2000);
    }
    
    function listCoffeesDone(stage){
        if (stage === 'done'){
            // console.log('DONE!');
        } else {
            // console.log('not done');
        }
    }
    
    // listCoffees('done', listCoffeesDone);

})();



// PROMISES -----------------------------------------------------------------------------

const dogFetch = "https://dog.ceo/api/breeds/image/random";
const BtcFetch = "https://blockchain.info/ticker";

// Fetch doggy pic

(function(){

    const image = document.createElement('img');
    container.append(image);

    // fetchedData = fetch(dogFetch)
    // .then((response) => {
    //     // This returns a promose so we can chain on the then function
    //     response.json().then((data) => {
    //         console.log(data.message);
    //     });
    // })
    
    // OR
    
    // `then` grabs the fetched data (before it) and pushes it into its callback function, where it can be accessed via argument
    fetchedData = fetch(dogFetch)
    .then((response) => {
        // Reads to completion
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        imageSrc = data.message;
        image.setAttribute('src',imageSrc);
    })
    .catch((error) => {
        // console.log(`There was an error - ${error}`);
    })
    .finally((message) => {
        // console.log('Done settled status, regardless of success or fail, woof');
    })

})();


// Fetch BTC prices

let btcData = null;

function getbtcPrices(){

    fetchedData2 = fetch(BtcFetch)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        btcData = data;
    })
    .catch((error) => {
        console.log(`There was an error - ${error}`);
    })
    .finally((message) => {
        console.log('lfg');
    })

};

getbtcPrices();

setTimeout(() => {
    console.log(btcData);
}, 1000);