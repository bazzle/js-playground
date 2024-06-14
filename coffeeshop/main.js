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



console.log(window);