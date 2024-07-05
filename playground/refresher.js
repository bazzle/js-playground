const container = document.querySelector('.container');

// Array map and filter ---------------------------------------------------------

(function(){

    let origins = ['Colombia', 'Peru', 'El Salvador', 'India', 'Kenya'];

    // loops through array items and mutates them, reassigns variable

    let num = 0;
    originsMapped = origins.map((item)=>{
        num++;
        return `${num}.${item.toUpperCase()}`;
    });

    // filter

    let originsFiltered = origins.filter((item) =>{
        return item != 'Peru';
    });

    // console.log(originsMapped);
    // console.log(originsFiltered);

}());


// array/object destructuring refresher ---------------------------------------------------------

// [] array destructuring
// {} object destructuring

(function(){

    let a = 1;
    let b = 2;

    // changes the order if these variables
    [a, b] = [b, a];
    // console.log(a); //2

    let origins = ['Colombia', 'Peru', 'El Salvador', 'India', 'Kenya'];
    
    // Swaps the first and last items in array
    [origins[0], origins[4]] = [origins[4], origins[0]];
    // console.log(origins);

    let origins2 = ['Colombia', 'Peru', 'El Salvador', 'India', 'Kenya', 'Guatemala', 'Brazil', 'Sri Lanka'];
    
    // Assigns array items to variables
    // Also uses rest paramenter to assign remaining items to `remaining`
    [coffee1, coffee2, coffee3, coffee4, coffee5, ...remaining] = origins2;

    // console.log(remaining);

    const person1 = {
        nickname : 'bazzle',
        sex : 'male',
        height : '180cm',
        job : 'web dev'
    }
    const person2 = {
        nickname : 'Minny',
        sex : 'female',
        height : '145cm'
    }

    // notice last variable has a default value set
    const {nickname, sex, height, job="unemployed"} = person1;

    console.log(nickname);
    console.log(sex);
    console.log(height);
    console.log(job);

    // destructure within function
    // Pass in variables as parameters
    function logPerson({nickname, sex, height, job="unemployed", ...rest}){
        sentence = `Nickname is ${nickname}, sex is ${sex}, height is ${height} and job status is ${job}`
        console.log(sentence);
    }

    logPerson(person2);

})();


// CLASS -----------------------------------------------------------------------------------------------

(function(){

    class coffee {
        constructor(name, type, origin, price, inStock, greeting){
            this.name = name
            this.type = type
            this.origin = origin
            this.price = price
            this.inStock = inStock
            this.taxAddition = 10
            this.greeting = greeting
        }
        getTotal = () => {
            return this.price + this.taxAddition;
        }
        createAbout = () => {
            return `${this.name}: ${this.getTotal()}`;
        }

        insertDom = () => {
            const heading = document.createElement('h2');
            heading.innerHTML = this.greeting;
            const about = document.createElement('p');
            about.innerHTML = this.createAbout();
            container.append(heading, about);
        }
    }
    
    const coffee1 = new coffee('Colombia El Carmen', 'ground', 'Colombia', '£6.75', true, '¡Hola! ¿Cómo estás?');

    // coffee1.insertDom();
    
}())


// SPREAD OPERATOR -----------------------------------------------------------------------------------------------

// Unpacks an iterable element like an array, into a list of numbers that can be passed to a function.

const someNums = [3, 2, 44, 55, 1];
const total = Math.max(...someNums);
// console.log(total);

// Convert string to array of characters

const postcode = 'GT302SW';
let unpackedPostcode = [...postcode];
// stitch back into string
unpackedPostcode = unpackedPostcode.join('-');
// console.log(unpackedPostcode);

const fruits = ['6 apples','6 oranges','4 pears'];
const vegetables = ['1 cauliflowers', '3 carrots', '1 cabbage'];
const dryGoods = ['cereal', 'oats', 'crisps'];
const shoppingList = [...fruits, ...vegetables, ...dryGoods];
console.log(shoppingList);

