// 1 task

/* This is a
multi-line comment */
// This is an in-line comment.


// 2 task

var myName;


// 3 task

// Setup
var a;
a = 7;
// Only change code below this line


// 4 task

// Setup
var a;
a = 7;
var b;
b = a;
// Only change code below this line


// 5 task

var a = 9;


// 6 task

var myFirstName = "Kostya";
var myLastName = "Kotyk"

// 7 task

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a"
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// 8 task
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// 9 task

let catName = "Oliver";
let catSound = "Meow!";

// 11 task

const sum = 20 + 0;

// 12 task

const difference = 45 - 33;

// 13 task

const product = 8 * 10;

// 14 task

const quotient = 66 / 33;


// 15 task

let myVar = 87;

// Only change code below this line
myVar++;


// 16 task

let myVar = 11;

// Only change code below this line
myVar--;

// 17 task

const ourDecimal = 5.7;
let myDecimal = 5.7;
// Only change code below this line

// 18 task

const product = 2.0 * 2.5;

// update 2

// 19 task


const quotient = 4.4 / 2.0; // Change this line

// 20 task


var remainder = 11 % 3;

// 21 task

let a = 3;
let b = 17;
let c = 12;


// 22 task
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

// 23 Task

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// 24 task
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;


// 25 task complited


let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;


// 26 task

// var myStr = "I am a \"double quoted\" 
// string inside \"double quotes\"."; 


// task 27

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';


// 28 task

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line


// 30 task


let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";


// 31 task

// Only change code below this line
const myName = "myName";
const myStr = "y name is " + myName + " and I am well!";


// 32 task

// Change code below this line
const someAdjective = "challenging";
let myStr = "Learning to code is ";
myStr += someAdjective;

// 33 task

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// 34 task

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;


// 35 task

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line


// 36 task

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line


// 37 task

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line


// 38 task

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1];


// 39 task

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb; // Change this line
// Only change code above this line


// 40 task

// Only change code below this line
const myArray = ["Pizza", 45];


// 41 task

// Only change code below this line
const myArray = [["Pulls", 24], ["Black Cock", 50]];


// 42 task

var myArray = [50,60,70];

var myData = myArray[0];


// 43 task

// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;


// 44 task

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];


  // 45 task

  // Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);

// 46 task

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop(); 


// 47 task

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();


// 48 task

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

// 49 task

const myList =[ 
    ["Beer", 20],
    ["butter", 1],
    ["beef", 2],
    ["choclate", 3],
    ["milk", 5],
  ];

  // 50 task 

  function reusableFunction() {
    console.log("Hi World");
  }
  
  reusableFunction();


  // 51 task

  

function functionWithArgs(a, b) {
    console.log(a + b);
  }
  
  functionWithArgs(1, 2)

  // 52 task

  function timesFive(num) {
    return num * 5;
  }
  
  const answer = timesFive(4);

  // 53 task

  // Declare the myGlobal variable below this line
let myGlobal = 10;


function fun1() {
  
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// 54 task

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  // Only change code above this line
  return outerWear;
}

myOutfit();


// 55 task

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();


// 56 task

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);


// 57 task

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item)
    item = arr.shift()
    return item;
    // Only change code above this line
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));


  // task 58

  function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }

  
  // task 59


  function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if(wasThatTrue) {
      return "Yes, that was true";
    }
      return "No, that was false";
    
    // Only change code above this line
  
  }


    // task 60


    // Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);


// 61 task

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);


// 62 task

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");


// 63 task

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

// 64 task

// Setup
function testStrictNotEqual(val) {
  if (val !==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);


// 65 task

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);


// 66 task

function testGreaterOrEqual(val) {
  if (val >=20 ) {  // Change this line
    return "20 or Over";
  }

  if (val >=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);


// 67 task

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);


// 68 task

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);


// 69 task

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    
      return "Yes";
    }
  

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);


// 70 task

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

