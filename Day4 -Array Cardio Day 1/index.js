const inventors = [
    {first: 'Johannes', last: 'Keppler', year: 1571, passed: 1630},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
    {first: 'Nicolaus', last: 'Copernius', year: 1473, passed: 1543},
    {first: 'Galileo', last: 'Galilee', year: 1534, passed: 1633},
]

const people = [
    "Adam, Anderson", "Alex, Fegurson", "Aaron, Hurtington", "Ben, Junior", "Boyd, Larson",
    "Cannon, Gil", "Carl, Hinder", "David, Edwards", "Boyd, Hayle", "Frank, Lampard", "Bateman, Goodman",
    "Godman, Adam", "Hank, Wess", "Larry, Page", "Monte, Wesstern"
]

//Array.prototype.filter()
//1. Filter the list of inventors for those who were born in the 1950s
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1599);

console.table(fifteen);

//Array.prototype.map
//2. Give us the array of the inventors' first and last name
const newInventors = inventors.map(inventor => `${inventor.first}, ${inventor.last}`);
console.table(newInventors);

//Array.prototype.sort()
//3. Sort inventors by age from oldest to youngest
const sorted = inventors.sort((a,b) => a.year < b.year? 1:-1);
console.table(sorted);

//Array.prototype.reduce()
//4. How many years did the invetors live?
const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
console.log(totalYears);

//sort the inventors by years lived
const sortedByYearsLived = inventors.sort((a,b) => {
    const currentInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
    return currentInventor > nextInventor ? 1: -1;
});

console.table(sortedByYearsLived);

//create a list if Boulevards in Paris that contain 'de' in the name
//en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = category.querySelectorAll('a'); //it return a NodeList

// //convert the Nodelist to array so we can do a map on it
// const linksArray = Array.from(links); // or use a destructor [...links];
// const linkContents = linksArray
//                             .map(link => link.textContent)
//                             .filter(streetName => streetName.includes('de'));


//sort people by last name
const alpha = people.sort((a, b) => {
    [aLast, aFirst] = a.split(', ');
    [bLast, bFirst] = b.split(', ');
    //return aLast > bLast ? 1 : -1; //sorting by lastName
    return aFirst > bFirst ? 1 : -1; //sorting by firstName
})
console.table(alpha);


//Sum up the instances of each of these
const data = ["car", "car", "car", "plane", "walk", "bike", "van", "van", "car", "truck",
"plane", "car", "walk", "trek", "van", "lorry", "car", "plane"];

//NOTE: the reduce syntax is reduce(func(previousValue, currentValue), initialValue)
//the dataType of previous value is always same as initialValue
const transportation = data.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.table(transportation);