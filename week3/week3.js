//a way to write in-line variable:  'web ${y}'
//exercise1
//create separate var for first name and last name

function nameFunc(firstName, lastName) {
  var fullName = firstName.concat(" ", lastName);
  console.log(fullName);
  var fullNameCap = firstName.toUpperCase() + " " + lastName.toLowerCase();
  console.log(fullNameCap);
}
nameFunc("Ashmeet", "Kaur");

//exercise two:
//to check if given string contains 'ed' or 'eg'
function checkInclude(value1, value2) {
  var result;
  var value = value1.concat(" ", value2);
  if (value.includes("ed") || value.includes("eg"))
    result = "Yes, string contains eg/ed";
  else result = "No, string does not contain eg/ed";
  return result;
}
console.log(checkInclude("seneca", "college"));

//Practice questions:
//question 11:the string address use short forms: "St." instead of "Street" and "Rd" instead of "Road".
// Using String methods, convert all these short forms to their full versions.
function stringReplace(address) {
  if (address.includes("St.")) {
    //to check if string contains 'St.'
    address = address.replace(/St\./g, "Street");
  }
  //but would also work without if statement
  address = address.replace(/Rd/g, "Road");
  return address;
}
console.log(stringReplace("Finch St. and Sheppard St. or Avenue Rd"));

/*Arrays
Two ways to define:
-Through Constructor: use of keyword new
var arr=new Array(...)
-through array literal
var/let/const arr=[...]

Properties:
push():  add element to end of the array
pop(): remove the last element
unshift(): add element to the start of the array
shift(): remove the first element
length
concat()
includes()
indexOf()
join('\n')
map(): returns new array
      myArray.map((e)=>{
        ...
      })
find()
filter(): returns new array
every(): returns boolean according to condition
find(): returns first element that meets condition
        const found=array1.find(e=>e>10)
splice()
*/

/*Loops:
for loop
forEach():
      myArray.forEach(function(e){
         ...
      });
      myArray.forEach((e)=>{
        ...
      });
 */
//callback: function used as function parameter for example in forEach()

//exercise
var myArray = [1, "web", [2, 4]];
myString = "welcome to WEB222";
myArray.forEach((e) => {
  console.log(e);
});
myString.split("").forEach((e) => {
  console.log(e);
});

//in function form
function forArray(...arr) {
  arr.forEach((e) => {
    console.log(e);
  });
}
function forString(str) {
  str.split("").forEach((e) => {
    console.log(e);
  });
}
forArray(1, "web", [2, 4]);
forString("welcome to WEB222");

//function to merge 2 arrays and remove duplicate elements
//var result = [2, 3, 6, 8, 576, 9, "web"];
//1st way
var result = [];
function mergeArray(array1, array2) {
  //compares first array to second
  array1.forEach((e1) => {
    var flag = 0;
    array2.forEach((e2) => {
      if (e1 === e2) flag = 1;
    });
    if (flag === 0) result.push(e1);
  });
  //second round for second array
  array2.forEach((e1) => {
    var flag = 0;
    array1.forEach((e2) => {
      if (e1 === e2) flag = 1;
    });
    if (flag === 0) result.push(e1);
  });
}
mergeArray([2, 3, 6, 8], [576, 9, 3, 8, "web"]);
console.log(result);

//second way: wrong***
var result = [];
function mergeArray1(array1, array2) {
  result = array1.concat(array2);
  result.forEach((e) => {
    if (array1.includes(e) && array2.includes(e)) {
      const index = result.indexOf(e);
      result.splice(index, 1);
      console.log("2: ", e, " ", result);
    }
  });
}
mergeArray1([2, 3, 6, 8], [576, 9, 3, 8, "web"]);
console.log(result);

/*
ES6
ES6 provides the Set object, which makes things a whole lot easier:

function uniq(a) {
   return Array.from(new Set(a));
}
or

let uniq = a => [...new Set(a)];
Note that, unlike in python, ES6 sets are iterated in insertion order, so this code preserves the order of the original array.
*/
