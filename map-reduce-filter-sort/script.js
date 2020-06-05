// map -> calls the callback function on every item of an array and returns a new array

const names = ['john', 'paul', 'ringo', 'george'];

// prepend a 'mr' in front of every name

const mapped = names.map(function (name) {
    return `mr ${name}`
});

const array1 = [1, 4, 9, 16];

array1.map(function (number) {
    return number * 2
});


const names = ['john', 'mr paul', 'ringo', 'george'];

// prepend a 'mr' in front of every name

const mapped = names.map(function (name) {
    if (name.slice(0, 3) === 'mr ') {
        return name
    }
    return 'mr ' + name
});

const students = [
    {
        name: "Tony Parker",
        firstProject: 80,
        secondProject: 75
    },
    {
        name: "Marc Barchini",
        firstProject: 84,
        secondProject: 65
    },
    {
        name: "Claudia Lopez",
        firstProject: 45,
        secondProject: 95
    },
    {
        name: "Carolina Perez",
        firstProject: 85,
        secondProject: 72,
        finalExam: 67
    }
];

// use the students array and create a new array that contains objects in this format : 
// { name: <name of the student, projects: <sum of the projects>}

const studentsWithTotalPoints = students.map(function (student) {
    return {
        name: student.name,
        projects: student.firstProject + student.secondProject
    }
});

// reduce -> reduces the array that it is called on to one value, we can either provide an initial value as a 2nd
// parameter after the callback or start with the first item as the initial value for the accumulator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// const numbers = [2, 4, 6, 8];

// accumulator, currentValue
// numbers.reduce(function (sum, val) {
//     return sum + val;
// });

const names = ['brian', 'mike', 'alan', 'bruce'];

names.reduce(function (acc, val) {
    // console.log('acc is:', acc);
    // console.log('val is:', val);
    return acc + val.length
}, 0)

const people = [
    { name: "Candice", age: 25 },
    { name: "Tammy", age: 30 },
    { name: "Allen", age: 49 },
    { name: "Nettie", age: 21 },
    { name: "Stuart", age: 17 }
];


const ages = people.reduce(function (acc, val) {
    return acc + val.age
}, 0)

const product = {
    name: "AmazonBasics Apple Certified Lightning to USB Cable",
    price: 7.99,
    manufacter: "Amazon",
    reviews:
        [
            {
                user: "Pavel Nedved",
                comments: "It was really usefull, strongly recommended",
                rate: 4
            },
            {
                user: "Alvaro Trezeguet",
                comments: "It lasted 2 days",
                rate: 1
            },
            {
                user: "David Recoba",
                comments: "Awesome",
                rate: 5
            },
            {
                user: "Jose Romero",
                comments: "Good value for money",
                rate: 4
            },
            {
                user: "Antonio Cano",
                comments: "It broked really fast",
                rate: 2
            },
        ]
}

// sum up all the reviews

const sumOfAllRates = product.reviews.reduce(function (sum, review) {
    return sum + review.rate
}, 0);

// filter -> filter returns a new array containing every element for which the callback returns true

const numbers = [1, 2, 3, 4, 2, 2, 5];

const evenNumbers = numbers.filter(function (number) {
    return number === 2;
});

function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted"];
    const filteredBirds = birds.filter(function (bird) {
        return !geese.includes(bird);
    });

    return filteredBirds;
};

// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

gooseFilter(["Mallard", "Hook Bill", "African"])
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);

const places = [
    {
        title: "Awesome Suite 20' away from la Rambla",
        price: 200,
        type: "Private Room",
        pool: true,
        garage: false
    },
    {
        title: "Private apartment",
        price: 190,
        type: "Entire Place",
        pool: true,
        garage: true
    },
    {
        title: "Apartment with awesome views",
        price: 400,
        type: "Entire Place",
        pool: false,
        garage: false
    },
    {
        title: "Apartment in la Rambla",
        price: 150,
        type: "Private Room",
        pool: false,
        garage: true
    },
    {
        title: "Comfortable place in Barcelona´s center",
        price: 390,
        type: "Entire place",
        pool: true,
        garage: true
    }
];

// filter for all the places that have a pool - all the places with a pool should be filtered

// with map
const placesWithPool = places.filter(function (place) {
    return place.pool === 'yes';
}).map(function (place) {
    return {
        title: place.title
    }
});

// reverse - reverses an array

const word = 'Pie Pie CarPierot Pie';
// split('') turns a string to an array - join('') turns an array into a string 
word.split('').reverse().join('');

// sort() sorts the array 'in place' (using no auxiliary data structure) and returns a new array

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

numbers.sort(function (a, b) {
    // this sorts ascending:
    // if (a < b) return - 1; // if true a is put to the left of the array
    // if (a === b) return 0; // a is not moved
    // if (a > b) return 1; // if true a is put to the right of the array
    return b - a; // sort descending
    // return a - b; // sort ascending
});


