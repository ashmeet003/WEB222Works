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
