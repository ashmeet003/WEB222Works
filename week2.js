/*
DRY= Don't Repeat Yourself
No redundant logic
Clean Code
*/
/*
Objects:
Everything in js is obj
console: predefined object
*/
function add(num1, num2, num3) {
  var total = num1 + num2 + num3;
  console.log(total);
  return total;
}
add(2, 12, 25);

/*Useful inbuilt objects:
console
Math
Date
 */

function about(name, program, age) {
  console.log(name + " is ", age, " years old");
  console.log("She is in ", program, " program");
  var x = new Date();
  console.log("today is ", x);

  /*Second option for date:
  const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
console.log(currentDate); // "17-6-2022"
 */
}
about("Ashmeet", "CPP", 19);

/*
Variable declaration:
-var
-let
-const */

//Practise questions:
//1:
function area(r) {
  const pi = 3.14;
  var a = pi * r * r;
  return a;
}
console.log("The area is ", area(4));

//2:
function roll(a = 6) {
  min = 1;
  max = Math.floor(a);
  return Math.floor(Math.random() * (max - min + 1) + min);
  // The maximum is inclusive and the minimum is inclusive
}
console.log("number for 6 is ", roll(6));
console.log("number for 50 is ", roll(50));

//5:
function isUnder50(...arg) {
  var result = true;
  for (var i = 0; i < arg.length; i++) {
    if (arg[i] >= 50) result = false;
  }
  console.log("result is: ", result);
  return result;
}
isUnder50(1, 2, 3, 5, 4, 65);

//6:
function addNum(...arg) {
  var sum = 0;
  for (var i = 0; i < arg.length; i++) {
    sum += arg[i];
  }
  console.log("sum of numbers is: ", sum);
  return sum;
}
addNum(1, 2, 3);

//9:
function checkMultiple(num) {
  var result = true;
  if (num % 3 !== 0) result = false;
  console.log("result is : ", result);
  return result;
}
checkMultiple(27);

//11:
function calculate(price) {
  var hst = 0.13;
  var tax = price * hst;
  console.log("price is: ", tax);
  return tax;
}
calculate(100);

//Math function
function mathFunc(x, y) {
  function add(x, y) {
    var addNum = x + y;
    console.log("The result for addition is: ", addNum);
    return addNum;
  }
  function subtract(x, y) {
    var sub = Math.abs(x - y);
    console.log("The result for subtraction is: ", sub);
    return sub;
  }
  function multiply(x, y) {
    var multiple = x * y;
    console.log("The result for multiplication is: ", multiple);
    return multiple;
  }
  function increment(x, y) {
    var increX = x++;
    var increY = y++;
    console.log("The result for incrementing x is: ", increX);
    console.log("The result for incrementing Y is: ", increY);
  }
  add(x, y);
  subtract(x, y);
  multiply(x, y);
  increment(x, y);
}
mathFunc(6, 9);
