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


// Grab the first item in the array

const removeFirst = () => {
    const firstItem = coffeeRange.shift();
    console.log(firstItem);
}
// removeFirst();

// Remove permanently, using splice
const removePermantently = (toRemove) => {
    coffeeRange.splice(toRemove, 1);
}

// removePermantently(0);


let outOfStock = 0;

coffeeRange.forEach((i) => {
    if (i.inStock === false){
        outOfStock++;
    }
});

if(coffeeRange.length > 0 && outOfStock != coffeeRange.length ){
    const list = document.createElement('ul');
    container.appendChild(list);
    coffeeRange.forEach((i) => {
        const listItem = document.createElement('li');
        let priceDisplay = i.inStock ? i.price : "Sorry we're out of stock";
        listItem.innerHTML = `${i.name} – ${priceDisplay}`;
        list.appendChild(listItem);
    })
} else {
    container.innerHTML = "We are out I'm afraid";
}

// prototypes

const origins = ['Brazil', 'India', 'Colombia', 'Guetamala', 'El Salvador'];
const types = ['ground', 'coarse', 'roasted beans', 'raw beans'];

// reorder alphabetically
// origins.sort();

// Get index by name
const indexItem = origins.indexOf('Colombia');
// Show array and indexitem
// console.log(origins, indexItem);

// Slice away specific items
const slicedArray = origins.slice(1, 3);

const printArray = (arr) => {
    const newList = document.createElement('ul');
    arr.forEach((i) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = i;
        newList.appendChild(listItem);
    })
    return newList;
}
container.appendChild(printArray(slicedArray));