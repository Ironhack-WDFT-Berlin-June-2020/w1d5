// map

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

// reduce 

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