'use strict';

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can Drive');

// let drinkingLegal = false;
// const onDuty = false;
// if (onDuty) drinkingLegal = false;
// if (drinkingLegal) console.log(`I'm off duty`);
// else console.log(`I'm on duty`);

// function logger() {
//     console.log(`My Name is Neil`);
// };
// logger();
// logger();
// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function bookList(rabindranath, nazrul) {
//     console.log(rabindranath, nazrul);
//     const book = `I have ${rabindranath} rabindranath books and ${nazrul} nazrul books`;
//     return book;
// }
// const rabiNazrul = bookList(1, 2);
// console.log(rabiNazrul);
// console.log(bookList(1, 2));

// function declaration
// const age1 = calcAge1(1992);
// function calcAge1(birthYear) {
//     // const age1 = 2037 - birthYear;
//     return 2037 - birthYear;
// }


// // function expression
// const calcAge2 = function (birthYear) {
//     return 2038 - birthYear;
// }
// const age2 = calcAge2(1992);
// console.log(age1, age2);

// arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1992);
// console.log(age3);

// const yearsUntilRetirement = birthYear => {
//     const age = 2025 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsUntilRetirement(1992));
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2025 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1992, 'Neil'));
// console.log(yearsUntilRetirement(2024, 'Neil'));

// const cutPieces = function (fruit) {
//     return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutPieces(apples)
//     const orangePieces = cutPieces(oranges)
//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//     return juice;
// };
// console.log(fruitProcessor(2, 3));

// const typeOfBooks = function (types) {
//     return types += 1;
// }
// function bookList(rabindranath, nazrul) {
//     const rabindranathTypes = typeOfBooks(rabindranath);
//     const nazrulTypes = typeOfBooks(nazrul);
//     const book = `I have ${rabindranathTypes} rabindranath books and ${nazrulTypes} nazrul books`;
//     return book;
// }
// const rnType = bookList(4, 5);
// console.log(rnType);

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years 😢`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired 👌`);
//         return -1;
//     }
//     return retirement;
//     // return `${ firstName } retires in ${ retirement } years`;
// }
// console.log(yearsUntilRetirement(1992, 'Neil'));
// console.log(yearsUntilRetirement(1950, 'Neil'));
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas); */

// const friends = ['tanni', 'afrin', 'nur'];
// console.log(friends);
// const futureYears = new Array(2025, 2026, 2027);
// console.log(futureYears);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'lamiya';
// console.log(friends);
// const firtsName = 'Neil';
// const neil = [firtsName, 'Juneja', 2025 - 1992, 'Web Developer', friends[0], futureYears];
// console.log(neil);
// console.log(neil[neil.length - 1]);

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// };
// const years = [1958, 1997, 1991, 2021, 1978, 1947, 1900];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[2]);
// const age3 = calcAge(years[4]);
// const age4 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3, age4);

// const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[4]), calcAge(years[years.length - 1])];
// console.log(ages);

/* 
let ageU = prompt("How old are you?");
if(ageU !== null){
    console.log(`you are ${ageU} years old`);
} else{
    console.log(`User cancelled`);
}; 
let letter ="zxy";
console.log(letter.charCodeAt(0));
let char = String.fromCharCode(66);
console.log(char); 
let phrase = "JavaScript is awesome!";
let result = phrase.includes("JavaScript", 7);
console.log(result); 

let message = "Hello, world!";
let greeting = message.slice(-1);
console.log(greeting);
let greeting = "Hello, World!";
let uppercaseGreeting = greeting.toUpperCase();
let lowercaseGreeting = greeting.toLowerCase();
console.log(uppercaseGreeting);
console.log(lowercaseGreeting);

let text = "I love JavaScript!";
let newtext = text.replace("JavaScript", "coding");
console.log(newtext);
let repeatedWord = text.repeat(2);
console.log(repeatedWord);
let message = "   v   Hello!   ";
let trimmedMessage = message.trim();
console.log(trimmedMessage);
*/
// const friends = ['tanni', 'afrin', 'nur'];
// const newLength = friends.push('afroza');
// console.log(friends);
// console.log(newLength);

// const xyz = friends.unshift('music');
// console.log(friends);
// console.log(xyz);

// friends.pop();
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);
// const cuts = friends.shift();
// console.log(friends);
// console.log(cuts);
// console.log(friends.indexOf('afrin'));
// console.log(friends.indexOf('afroza'));
// console.log(friends.includes('afrin'));
// console.log(friends.includes('afroza'));
// friends.push(23);
// console.log(friends.includes('23'));
// console.log(friends.includes(23));
// friends.push('afroza');
// if(friends.includes('afroza')){
//     console.log(`u are friends with afroza`);
// } else{
//     console.log(`u're not friends with afroza`);
// }
// const calcTip = function(bill){
//     return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(bills, tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2] ];
// console.log(totals);
// const maskEmail = (email) => {
//     let hide = "*";
//     const textFinder = email.slice(0, ( email.indexOf("@") ));
//     const emailCheck = email.slice(email.indexOf("@")); 
//     const showFirstandLast = textFinder.slice(1, ( email.indexOf("@") - 1));

//     const textToHide = textFinder.replace(showFirstandLast, hide.repeat(textFinder.length))    

//     return textToHide + emailCheck;
// }

// let email = "apple.pie@example.com";
// console.log(maskEmail(email));

// email = "freecodecamp@example.com";
// console.log(maskEmail(email));

// const friends = ['michael', 'john', 'ray'];
// console.log(friends[1]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// //replacing array item
// friends[2] = 'peter' //ray replaced
// console.log(friends);
// //replacing 2 simultaneously
// friends.splice(1,2, 'sam', 'aby'); //replacing 2 simultaneously
// console.log(friends);
// let job = 'web developer'
// const neil = [job, 2025-1992, 'js', friends];
// console.log(neil);

// const calcAge = function(birthYear){
//     return 2025 - birthYear;
// }
// const years = [1650, 1950, 1488, 2025];
// const age1 = calcAge(years[0]);
// console.log(age1);

//const friends = ['michael', 'john', 'ray'];
//console.log(friends);
// const newFriends = friends.push('jay');
// console.log(newFriends);
// friends.unshift('johny');
// console.log(friends);
// friends.pop(); //pop() does not take any arguments. It always removes the last item of the array.
 //console.log(friends);
//  friends.shift();
//  console.log(friends);
// const xy = friends.slice(1,2);
// console.log(xy);
// friends.splice(1,2);// Removes 'john' and 'ray'
// console.log(friends);
//const text = ["i'm a boy", "i'm a girl, do u", "neil juneja"];
// text.splice(1,1);
// console.log(text);
//If You Want to Update the Original Array:
//text[1] = text[1].replace("girl, ","");
//console.log(text);
// const friends = ['michael', 'john', 'ray'];
// console.log(friends.indexOf('michael'));
// console.log(friends.indexOf('bob'));
// friends.push(23);
// console.log(friends.includes('michael'));
// console.log(friends.includes('bob'));
// console.log(friends.includes('23'));
// console.log(friends.includes(23));
// if(friends.includes('michael')){
//     console.log('michael is my friend');
// } else{
//     console.log('michael is not my friend')
// };

// const calcTip = function(bill){
//      return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// };
//arrow
// const calcTip = bill =>
//      bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// ;
// console.log(calcTip(100));
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);
// const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
// groceryList.slice(1,3);
// console.log(groceryList);
// const nestedArr = [[1], [2, 3]];
// console.log(nestedArr[1]);
// console.log(nestedArr[1][0]);
// console.log(nestedArr[1][1]);

// const numberClusters = [[1,2], [3,4], [5,6]];
// const target = numberClusters[2][1];
// console.log(target);
// console.log(numberClusters);
// const array = [1, 2, 3, 4, 5];
// const first = array.at(1);
// const last = array.at(-1);
// console.log(first);
// console.log(last);

// const grocery1 = ['blueberries', 'eggs', 'artichoke'];
// const grocery2 = ['milk', 'cookies'];
// const grocery3 = ['rice', 'pasta'];

//  const grocery = grocery1.concat(grocery2, grocery3);
//  console.log(grocery);

// console.log([1, 2, 3, 4, 5, 6, 7].copyWithin(-5, -3, -3));
// const friends = ['michael', 'john', 'ray'];
// const neilArray = ['neil', 'juneja', 2025-1992, 'developer', ['michael', 'john', 'ray']];
// console.log(neilArray);
// const neilObjects = {
//     firstName: 'neil',
//     lastName: 'juneja',
//     age: 2025-1992,
//     job: 'developer',
//     friends: ['michael', 'john', 'ray']
// }
// console.log(neilObjects);
// console.log(neilObjects.firstName);
// console.log(neilObjects['lastName']);

// const nameKey = 'Name';
// console.log(neilObjects['first' + nameKey]);
// console.log(neilObjects['last' + nameKey]);
// const interestedIn = prompt(`What do you want to know about Neil? Choose from the list: 
//     1. firstName
//     2. lastName
//     3. age
//     4. job
//     6. friends`);//.toLowerCase();
// console.log(interestedIn);
// console.log(neilObjects.interestedIn); //undefined thats why [] notation use
// console.log(neilObjects[interestedIn]);
// if(neilObjects[interestedIn]){
//     console.log(neilObjects[interestedIn]);
// } else{
//     console.log(`Wrong request! Please Choose from the list: 
//     1. firstName
//     2. lastName
//     3. age
//     4. job
//     6. friends`);
// }
// neilObjects.location = 'Dhaka';
// neilObjects['fb'] = 'Neil Juneja';
// console.log(neilObjects);
// const neilObjects = {
//     firstName: 'neil',
//     lastName: 'juneja',
//     age: 2025-1992,
//     job: 'developer',
//     friends: ['michael', 'john', 'ray']
// }; //object
// const xyz = [123, 456, 789]; //array

// console.log(neilObjects);

// const sentence = `${neilObjects.firstName} has ${neilObjects.friends.length} friends, and his best friend is called ${neilObjects.friends[0]} & ${xyz[1]}.`;
// console.log(sentence);

// //backet notaton
// const sentenceBracket = `${neilObjects['firstName']} has ${neilObjects['friends']['length']} friends, and his best friend is called ${neilObjects['friends'][0]} & ${xyz[1]}.`;
// console.log(sentenceBracket);
// const neilObjects = {
//     firstName: 'neil',
//     lastName: 'juneja',
//     birthYear: 1992,
//     job: 'developer',
//     friends: ['michael', 'john', 'ray'],
//     hasDriversLicense: true,
    // calcAge: function(birthYear){
    //     return 2025 - birthYear;
    // }
    // calcAge: function(){
    //     // console.log(this);
    //     return 2025 - this.birthYear;
    // }
//     calcAge: function(){
//         this.neilAge = 2025 - this.birthYear;
//         return this.neilAge;
//     }
// };
// console.log(neilObjects['calcAge']());
// console.log(neilObjects.neilAge);
// console.log(neilObjects['calcAge']());

// console.log(neilObjects.calcAge(1995));
// console.log(neilObjects['calcAge'](1995));
// console.log(neilObjects['calcAge'](2007));
// const spaceShip = {
//     birthYear: 2020,
//     getAge: neilObjects.calcAge
// }
// console.log(spaceShip['getAge']());

// const jonas = {
//     birthYear: 1991,
//     hisAge: spaceShip.getAge
// }
// console.log(jonas['hisAge']());
// const spaceShip = {
//     birthYear: 2020,
//     getAge: neilObjects.calcAge
// }
// console.log(spaceShip['getAge']());
// console.log(spaceShip.neilAge);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     calcAge: function(){
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     }
//   };
// console.log(jonas.calcAge());
// console.log(jonas['age']);

// const getSummary = `Jonas is a ${jonas['age']} year old teacher, and he ${jonas.hasDriversLicense ? "has a" : "no"} driver's license.`;
// console.log(getSummary);

// //another way
// let licenseStaus;
// if(jonas.hasDriversLicense){
//     licenseStaus =  "he has a driver's license";
// } else{
//     licenseStaus = "he has no drver's license";
// }
// const getSummary2 = `Jonas is a ${jonas['age']} year old teacher, and ${licenseStaus}.`;
// console.log(getSummary2);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     calcAge: function(){
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()}- years old ${jonas.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`//because calcage is still not called
//     }
//   };
// console.log(jonas.calcAge());
// console.log(jonas['age']);
// console.log(jonas.getSummary());

// const mark ={
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     // calcBMI: function(){
//     //     this.bmi = Math.round((this.mass / (this.height * this.height)) * 100) / 100;
//     //     return this.bmi;
//     // } or,
//     calcBMI(){
//         this.bmi = Math.round((this.mass / (this.height * this.height)) * 100) / 100;
//         return this.bmi;
//     }
    
// }

// console.log(mark['calcBMI']());

// const john ={
//     fullName: "John Smith" ,
//     mass: 92,
//     height: 1.95,
//     calcBMI: mark.calcBMI
//     //Math.round((this.mass / (this.height * this.height)) * 100) / 100;
//         // return this.bmi;
    
// };
// john.calcBMI();
// console.log(john.bmi);
// if(mark.bmi > john.bmi){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
// } else if (john.bmi > mark.bmi){
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
// } else{
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is equal to ${mark.fullName}'s (${mark.bmi})!`)
// }

//two dimensional array
// let chessboard = [
//     ['a', 'b', 'c', 'd', 'e'],
//     [12, 34, 56, 78, 90],
//     ['a1', 'b2', 'c3', 'd4','e5']
// ];
// console.log(chessboard[0] [0]);
// console.log(chessboard[1][1]);
// console.log(chessboard[2][2]);

//array destructuring
// let fruits = ['apple', 'banana', 'orange'];
// let [first, second, third] = fruits;
// //or,
// // let first = fruits[0];
// // let second = fruits[1]; 
// // let third = fruits[2]; 
// console.log(first);
// console.log(second);
// console.log(third);

// const colors = ['red', 'green', 'yellow', 'blue', 'pink'];
// const [firstColor,,, fourthColor] = colors; //,, means skipping 2nd and 3rd color
// console.log(firstColor, fourthColor);

// let numbers = [1, 2]
// let [a, b, c = 3] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);

// let colors = ['red', 'green', 'yellow', 'blue', 'pink'];
// let [first, second, ...rest] = colors;
// console.log(first);
// console.log(second);
// console.log(rest);

// let colors = ["red", "green", "blue"];
// let [primary, secondary, tertiary, quaternary = "yellow"] = colors;
// console.log(quaternary);

// let numbers = [1, 2, 3, 4, 5];
// let [a, , b, ...rest] = numbers;
// console.log(a, b, rest);
// let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
// let copyFruit = [...fruits]
// let removedFruits = fruits.splice(4, 0, "Melon", "Lemon");
// console.log(copyFruit);
// console.log(fruits);
// console.log(removedFruits);
// let numbers = [1, 2, 3, 4];
// let copyNumber = [...numbers];
// console.log(copyNumber);
// let modifiedNumber = copyNumber.splice(1, 2, 0, 5, 6, 8);
// console.log(modifiedNumber);
// console.log(numbers);
// let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
// let indexToRemove = fruits.indexOf("banana");
// if(indexToRemove !== -1){
//     fruits.splice(indexToRemove, 2)
// } else{
//      console.log("Not Found");
// }
// console.log(fruits);
// let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
// fruits.splice(0);
// console.log(fruits);
// let fruits = ["apple", "banana", "orange", "mango", "kiwi", "grapes", "guava"];
// let [first, ,third, ...rest] = fruits;
// console.log(first);
// console.log(third);
// console.log(rest);
// let numbers = [10, 20, 30, 40, 50, 30, '60'];
// console.log(numbers.includes(30, 3));
// console.log(numbers.includes(10, 3));
// console.log(numbers.includes(60));
// console.log(numbers.includes('50'));

// let originalArray = [1,2,3];
// let copyArray = [].concat(originalArray);
// let copyArray2 = originalArray.concat(originalArray);
// console.log(copyArray);
// console.log(copyArray2);
// let copyArray3 = originalArray.slice();
// console.log(copyArray3);
// let copyArray4 = [...originalArray];
// console.log(copyArray4);
// copyArray4.push(4);
// console.log(copyArray4);
// console.log(originalArray);
// let str = "hello";
// let charArray = str.split('').reverse().join();
// console.log(charArray);

// let str2 = "he llo"
// let charArray2 = str2.split(" ").reverse().join('. ');
// console.log(charArray2);
// let str3 = "he-l-lo"
// let charArray3 = str3.split("-").reverse().join('-');
// console.log(charArray3);

// let reversedArray = ['t', 'n', 'e', 'd', 'u', 't', 's' ];
// let reversedString = reversedArray.join('');
// console.log(reversedString);
// let programmingLanguages = ["js", "python", "react"];
// let programmingLanguagesNew = programmingLanguages.concat(programmingLanguages);
// console.log(programmingLanguagesNew);

// let programmingLanguagesAdd = programmingLanguagesNew.concat("node");
// console.log(programmingLanguagesAdd);

// let programmingLanguagesLearning = ["js", "python", "react"];
// let databasesLearning = ["mysql", "mongoDB"];
// let databaseAndProgramming = programmingLanguagesLearning.concat(databasesLearning);
// console.log(databaseAndProgramming);
// let reverseDL = databaseAndProgramming.reverse();
// console.log(reverseDL);

// let newAr = [];
// newAr.shift();
// console.log(newAr);

// const arr = ["apple", "banana", "cherry", "date"];
// const slicedArr = arr.slice(1, 3);
// console.log(slicedArr);

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];
// console.log(arr2);

// const fruits = "Mango";
// const neil = ['names', fruits];
// console.log(neil);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schetdman',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Mike', 'Bob', 'Pete']
// };
// console.log(jonas);
// console.log(jonas.age);
// console.log(jonas['age']);

// const nameKey = 'Name';
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do u want to know about jonas? choose between firstName, lastName, age, job and friends');

// jonas.location = 'portugal';
// jonas['twitter'] = '@jonasschet';
// console.log(jonas);

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// } else{
//     console.log('Please choose between above')
// }

// const sentence = `${jonas.firstName} has ${jonas['friends']['length']} friends and his best friend is called ${jonas['friends'][0]}`;
// console.log(sentence);

// const sentence2 = `${jonas.firstName} has ${jonas.friends.length} friends and his best friend name is ${jonas.friends[0]}`;
// console.log(sentence2);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schetdman',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Mike', 'Bob', 'Pete'],
//     hasDriversLicense: true,

//     // calcAge: function(birthYear){
//     //     return 2037 - birthYear; 
//     // }

//     calcAge: function(){
//         // console.log(this);
//         this.jonasAge =  2037 - this.birthYear;
//         return this.jonasAge;
//     }
// };
// console.log(jonas.calcAge());
// console.log(jonas.jonasAge);
// // console.log(jonas.calcAge(1985));
// // console.log(jonas['calcAge'](1991));
// const spaceship = {
//     birthYear: 2020,
//     getAge: jonas.calcAge
// }
// console.log(spaceship['getAge']());
// const getSummary = `${jonas['firstName']} is a ${jonas['jonasAge']} year old ${jonas.job} and he has ${jonas.hasDriversLicense ? "a" : "no"} drivers license`;
// console.log(getSummary);
// const neil = {
//     birthYear: 1992,
//     hisAge: spaceship.getAge
// }
// console.log(neil['hisAge']());

// let licenseStatus;
// if(jonas.hasDriversLicense){
//     licenseStatus = "he has a driver's license";
// } else{
//     licenseStatus = "he has no driver's license";
// };
// const getSummary = `${jonas['firstName']} is a ${jonas['jonasAge']} year old ${jonas.job} and ${licenseStatus}`;
// console.log(getSummary);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     calcAge: function(){
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     },
//     // getSummary: function(){
//     //     return `${this['firstName']} is a ${this['calcAge']()} years old ${this.job} and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//     // } //if i invoke calcAge
//     getSummary: function(){
//         if(!this.age){
//             this.calcAge();
//         }; //this.age is undefined so !this.age is true and calculates calcAge, if(this.age )
//         return `${this['firstName']} is a ${this['age']} years old ${this.job} and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//     } //without invoking calcage but then i have to use if here
// }

// console.log(jonas.getSummary());
// const person = {
//     'full name': 'Alice Johnson',
//     age: 30,
//     job: 'designer',
//     location: 'portugal',
//     capital: 'lisbon'
// };
// person.hobby = 'painting';
// console.log(person);
// let jobName = 'job';
// console.log(person.jobName);//undefined
// console.log(person[jobName]);
// console.log(person);
// delete person.age;
// console.log(person['age']);
// console.log(person);
// const {age, job, ...remaining} = person;
// console.log(remaining);

// console.log(person.hasOwnProperty('full name'));
// console.log(person.hasOwnProperty('fullname'));
// console.log(person.hasOwnProperty("income"));

// console.log('full name' in person);
// console.log('income' in person);

// console.log(person["full name"] !== undefined);
// console.log(person.income !== undefined);
// console.log(person.income === undefined);
// let obj = {a: undefined};
// console.log(obj.a !== undefined);

// const person = {
//     name: 'Alice Johnson',
//     age: 30,
//     job: 'designer',
//     location: 'portugal',
//     capital: 'lisbon',
//     contact: {
//         email: "alice@example.com",
//         phone: {
//             home: '123-456-789',
//             work: '987-654-321',
//         }
//     }
// };
// console.log(person.contact.phone.work);
// console.log(person['contact']['phone']['home']);

// const person = {
//     name: "Alice",
//     age: 30,
//     addresses: [
//       { type: "home", street: "123 Main St", city: "Anytown" },
//       { type: "work", 
//         street: "456 Market St", 
//         city: {
//             cityName: ["Workville", "Lisbon", "Dhaka"],
//             locationName: ["mdpur", "shymaoly"]
//             }
//         }
//     ]
// };
// console.log(person.addresses[0].type);
// console.log(person['addresses'][1]['city']['locationName'][0]);

// let num1 = 5;
// // num1 = 10;
// let num2 = num1;
// num1 = 10;
// console.log(num2);

// let x = 10;
// let y = x;
// y = 20;
// console.log(x); // 10 (not affected by changing y)

// let obj1 = { name: "alice"};
// let obj2 = obj1;
// obj2.name = "bob";
// console.log(obj1.name);

// const num = 42;
// const numObj = Object(num);
// // const numObj = new Number(42); //this happens internally
// console.log(numObj);
// console.log(typeof numObj);

// const newObj = new Object(null);
// console.log(newObj);

// const user = {
//     name: "John",
//     profile: {
//         email: "john@gmail.com",
//         address: {
//             street: "123 main",
//             city: "ome",
//         },
//     },
// };
// console.log(user.profile?.address?.street);
// console.log(user.profile?.address?.phone);
// console.log(user?.phone?.work);

// const person = {
//     name: "alice",
//     age: 30,
//     city: "NY"
// }
// const {name, age} = person;
// console.log(name, age);

// const person = {
//     name: "alice",
//     age: 30,
//     city: "NY"
// }
// const {name: peopleName, age: peopleAge, country = "USA" } = person;
// console.log(peopleName, peopleAge, country);

// const name = " John";
// const age = 3;
// const person = {name, age};
// console.log(person);

// const createPerson = function(name, age){
//     return {name, age}; // {} or [] as multiple return
// };
// const person = createPerson("Charlie", 18);
// console.log(person);

// const createPerson = function(name, age, job, city){
//         return {name, age, job, city}; // {} or [] as multiple return
//     };
//     const person = createPerson("Neil", 33, "Developer", "Dhaka");
//     console.log(person);

// const user = {
//     name: "John",
//     age: 30,
//     isAdmn: true
// };
// const jsonString = JSON.stringify(user);
// console.log(user);
// console.log(jsonString); //string

// const user = {
//     name: "John",
//     age: 30,
//     isAdmn: true,
//     country: "BD",
// };
// const jsonString = JSON.stringify(user, ["age", "country"], 2);
// console.log(jsonString); //instead of 4 we instructed to get 2 in second parameter, 2 here is a parameter for spacing

// const jsonParse = JSON.parse(jsonString);
// console.log(jsonParse);

// const jsonString = '{"name": "Alice", "age": 25}';
// console.log(JSON.parse(jsonString));
// console.log(JSON.parse(jsonString).age);

//reduce() array method
// const arrayOne = ["a", "b", "c", "d", "e"];
// const stringArray = 'Adding strings : ' + arrayOne.reduce(function(acc, cur){
//     return acc + cur;
// }, "");  // Added an empty string as the initial value
// console.log(stringArray);

// const arrayTwo = ["q", "w", "e", "r", "t"];
// const stringArray2 = `Add : ${arrayTwo.reduce( function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, "a")}`;
// console.log(stringArray2);

// Add the values of each object inside an array.
// const arrayThree = [
//     {x: 1}, {x: 2}, {x: 5}];
// const arraySum = arrayThree.reduce(function(acc, curr){
//     return acc + curr.x;
// }, 0);
// console.log(arraySum);

// const monthlyBudget = 3000;
// const expenses = [300, 200, 454, 225, 1200];
// const bankBalance = expenses.reduce(function(acc, curr){
//     return acc - curr;
// }, monthlyBudget);
// console.log(bankBalance);

//loop

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting Weights Repetition ${rep} 🏋️‍♂️`);
// }

// Looping Arrays, Breaking and Continuing
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
// const types = [];

// for(let i = 0; i < jonas.length; i++){
//     console.log(jonas[i], typeof jonas[i]);
//     //filling types array
//     // types[i] = typeof jonas[i]; or,
//     types.push(typeof jonas[i]); //use this
// }
// console.log(types);

// const years = [1992, 2024, 1952, 1971];
// const ages = [];

// for(let i = 0; i < years.length; i++){
//     const firstAge = 2025 - years[i];
//     ages.push(firstAge);
// };
// console.log(ages);

// const years = [1992, 2024, 1952, 1971];
// const ages = [];
// for(let i = 0; i < years.length; i++){
//     ages.push(2025 - years[i]);
// };
// console.log(ages);

// const bills = [300, 245, 100, 50, 420,45];
// const tips = [];
// const total = [];

// for(let i = 0; i < bills.length; i++){
//     let tip;
//     if(bills[i] <= 300 && bills[i] >=50){
//         tip = bills[i] * .15;
//     } else{
//         tip = bills[i] * .20;
//     }
//     tips.push(tip);
//     total.push(bills[i] + tip);
// }
// console.log(tips);
// console.log(total);

// const bills = [300, 245, 100, 50, 420,45];
// const totals = [];

// for(let i = 0; i < bills.length; i++){
//     let total;
//     if(bills[i] <= 300 && bills[i] >=50){
//         total = (bills[i] * .15) + bills[i] ;
//     } else{
//         total = (bills[i] * .20) + bills[i] ;
//     }
//     totals.push(total);
// }
// console.log(totals);

// const bills = [300, 245, 100, 50, 420,45];
// const totals = [];

// for(let i = 0; i < bills.length; i++){
//     let total;
//     if(bills[i] <= 300 && bills[i] >= 50){
//         total = (bills[i] * .15) + bills[i];
//     } else{
//         total = (bills[i] * .20) + bills[i];
//     }
//     //totals[i] = total; //or
//     totals.push(total);
// }
// console.log(totals);

//another way
// const bills = [300, 245, 100, 50, 420,45];
// const totals = [];

// for(let i = 0; i < bills.length; i++){
//     if(bills[i] <= 300 && bills[i] >= 50){
//         totals[i] = (bills[i] * .15) + bills[i];
//     } else{
//         totals[i] = (bills[i] * .20) + bills[i];
//     }
// }
// console.log(totals);

//continue & break loop
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
// console.log('---- Only String ----');
// for(let i = 0; i < jonas.length; i++){
    // if(typeof jonas[i] !== 'string') continue; // If jonas[i] is not a string → Skip that iteration and move to the next index. If jonas[i] is a string → Print it and then continue to the next iteration.
    //console.log(jonas[i], typeof jonas[i]);
//};
// console.log('---- Not String ----');
// for(let i = 0; i < jonas.length; i++){
//     if(typeof jonas[i] === 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// };

// console.log('---- break before object ----');
// for(let i = 0; i < jonas.length; i++){
//     if(typeof jonas[i] === 'object') break; // Stops the loop at first object
//     console.log(jonas[i], typeof jonas[i]);  // Prints only before break
// }; //The loop prints all values until it finds the first object (['Michael', 'Peter'] at index 4).When typeof jonas[i] === 'object' is true, break stops the loop immediately.So true (boolean at index 5) is never printed. As soon as typeof jonas[i] === 'object' becomes true, the break statement stops the loop immediately. The console.log() never gets a chance to run for that object.

//If you want to print the object before stopping, modify the code like this:
// console.log('---- break after putting object----');
// for(let i = 0; i < jonas.length; i++){
//     console.log(jonas[i], typeof jonas[i]); // Print first
//     if(typeof jonas[i] === 'object') break; // Then stop if it's an object
// }

// looping backwards 

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
// for(let i = (jonas.length - 1); i >=0 ; i--){
//     console.log(i, jonas[i]);
// }

//loop in loops
// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`Starting Exercise ${exercise}`);
//     for(let rep = 1; rep < 4; rep++){
//         console.log(`--- Exercise ${exercise}: Lifting Weight Repetition ${rep} 🏋️‍♂️`);
//         for (let right = 1; right < 2 ; right++){
//             console.log(`------ Exercise ${exercise}: Repetition ${rep}: Right Hand Lifting ${right}`);
//         };
//         for (let left = 1; left < 2 ; left++){
//             console.log(`------ Exercise ${exercise}: Repetition ${rep}: Left Hand Lifting ${left}`);
//         };
//     };
// };

//while loop

// let rep = 1;
// while(rep <= 10){
//     console.log(`Lifting Weight Repetition ${rep} 🏋️‍♂️`);
//     rep++;
// };

// let exercise = 10;
// while(exercise > 0){
//     console.log(`Lifting Weight exercise ${exercise} 🏋️‍♂️`);
//     exercise--;
// };

// let dice = Math.trunc(Math.random() * 6) + 1; // Step 1: Roll the dice (1 to 6)
// while(dice !== 6){ // Step 2: Keep rolling until we get a 6
//     console.log(`You rolled ${dice}`); // Step 3: Print the rolled number
//     dice = Math.trunc(Math.random() * 6) + 1; // Step 4: Roll again for the next loop iteration
//     if(dice === 6){
//         console.log(`Loop is about to stop as you rolled ${dice}`);
//     }
// }

//if 1st roll is 6 then,
// let dice = Math.trunc(Math.random() * 6) + 1;
// while(dice === 6){  // Runs only if the first roll is a 6
//     console.log(`You rolled ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1; //  // Roll again and Exit the loop when dice is NOT 6
// }
// while(dice !== 6){
//     console.log(`You rolled ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// } or 
//its nt best practice write dice === 6 instead of true
// let dice = Math.trunc(Math.random() * 6) + 1;
// while(true){ //Needs break – If you forget it, you get an infinite loop.
//     console.log(`You rolled ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1; 
//     if(dice !==6) break;
// }
// while(dice !== 6){
//     console.log(`You rolled ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }

//Let's improve Steven's tip calculator even more, this time using loops!
//-------------------------
//1st one not a best practice because the array is duplicated 
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// for(let i = 0; i < bills.length; i++){
//     tips[i] = calcTip(bills[i]);
//     tips.push(tips[i]); //array duplicated First, it calculates the tip and tries to store it in the tips array. But instead of just storing the tip once, it adds the tip twice in each loop iteration.
//     totals[i] = bills[i] + tips[i];
//     totals.push(totals[i]);
// }
// console.log(tips);
// console.log(totals);


// const calcAverage = function(arr){
//     if(arr.length === 0) return 0;
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i] //For example, if arr = [10, 20, 30] and sum = 0: First iteration: sum += 10 → sum = 10
//     }
//     const averageSum = sum / arr.length;
//     return averageSum;
// }
// console.log(calcAverage(totals));
//or using reduce()

// const calcAverage = function(arr){
//     if(arr.length === 0) return 0;
//     const sum = arr.reduce(function(acc, curr){
//         return acc + curr;
//     }, 0); //sum up all elements
//     return sum / arr.length;
// }
// console.log(calcAverage(totals));

//------------------------------------
//2nd one best practice
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// for(let i = 0; i < bills.length; i++){
//     const tip = calcTip(bills[i]); //// Calculate the tip for each bill
//     tips.push(tip); //tip[i] would imply that tip is an array, but tip is a number, not an array. Add the tip to the tips array
//     totals.push(tip + bills[i]);
// }
// console.log(tips);
// console.log(totals);

// const calcAverage = function(arr){
//     if(arr.length === 0) return 0;
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i] //For example, if arr = [10, 20, 30] and sum = 0: First iteration: sum += 10 → sum = 10 //sum = sum + arr[i];
//     }
//     const averageSum = sum / arr.length;
//     return averageSum;
// };
// console.log(calcAverage([1, 2, 3]));
// console.log(`Totals Average: ${calcAverage(totals)}`);
// console.log(`Tips Average: ${calcAverage(tips)}`);
// console.log(`Bills Average: ${calcAverage(bills)}`);

// for...of loop
// const numbers = [1, 2, 3, 4, 5];
// for (let num of numbers){
//     console.log(num);
// };
// const str = "abcd";
// for(let character of str){
//     console.log(character);
// }
// const numbers = [1, 2, 3, 4, 5];
// for (let num of numbers){
//     console.log(num);
//     num = num + 1; //for..of here num creates a copy of the values nt the org.array so no execution of this line
// };
// const people = [
//     {name: "John", age: 30}, //Iteration 1 person = { name: 'John', age: 30 } & so on
//     {name: "Jane", age: 25},
//     {name: "Jim", age: 40}, 
// ];
// for(let person of people){
//     console.log(`${person.name} is ${person.age} years old`); // In each iteration of the loop, one object from people is temporarily assigned to the variable person.
// }

//for...in loop
// const fruit = {
//     name: "apple", color: "red", price: 0.99
// };
// for(let proper in fruit){
//     console.log(fruit[proper]);
// }
// const person = {
//     name: 'John',
//     age: 30,
//     address: {
//         street: '123 Main St',
//         city: 'Anytown',
//         state: 'CA'
//     }
// };
// for(let prop in person){
//     console.log(person[prop]);
// }
// function isObject(obj){
//     return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
// }
// for(let prop in person){
//     if(isObject(person[prop])){
//         for(let nestedProp in person[prop]){
//             console.log(person[prop][nestedProp]);
//         }
//     } else {
//         console.log(person[prop]);
//     }
// }

//while loop
// let userInput = prompt("Please enter a number between 1 and 10");

// while(isNaN(userInput) || Number(userInput) < 1 || Number(userInput) > 10 ){
//     userInput = prompt("Invalid input. Please enter a number between 1 and 10.")
// }
// alert("You entered a valid number!");

//do..while loop
// let userInput;
// do{
//     userInput = prompt("Please enter a number between 1 and 10");
// } while(isNaN(userInput) || Number(userInput) < 1 ||  Number(userInput) > 10);

// alert("You entered a valid number!");

//loop with label
// outerLoop: for (let i = 0; i < 3; i++) {
//     innerLoop: for (let j = 0; j < 3; j++) {
//       if (i === 1 && j === 1) {
//          outerLoop;
//       }
//       console.log(`i: ${i}, j: ${j}`);
//     }
//   }

// split() reversing a string and joining
// const str = "free Code Camp";
// const str2 = str.split('').reverse().join('');
// const str2 = [...str].reverse().join('');
// console.log(str2);

// const str = "The quick brown fox jumps over the lazy dog.";
// console.log(str);

// const words = str.split(" ");
// console.log(words[3]);

// const chars = str.split('');
// console.log(chars);

// const strcopy = str.split();
// console.log(strcopy);

// const str = "dabad ababa abadefabaghiaba ihabaik"
// const result = str.split("aba");
// console.log(result);

// A string containing tab-separated values (TSV)
// const tsvString = "Name\tAge\tLocation\nJohn\t25\tNew York\nJane\t30\tLos Angeles";
// Use split() to break the string into rows (lines)
// const rows = tsvString.split("\n");
// console.log(rows);
// const tabs = tsvString.split("\t");
// console.log(tabs);

// Now split each row by the tab character to get individual values
// const parsedData = rows.map(function(rows){
//     return rows.split("\t")
// });
// console.log(parsedData);

// const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";
// console.log(names);

// const re = /\s*(?:;|$)\s*/;
// const nameList = names.split(re);
// console.log(nameList);
