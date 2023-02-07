
//Session2:
/*Nested object:
to check for object availability:
Normal: data.users.id
To check to avoid object being null or undefined: data?.users.id
so questions marks checks for availability of data, for example for api's: for instance if
server has not replied back and objects are undefined

could also be a function in pair key: value:
keyName: function(){...}
So, to access function inside object obj:
obj.keyName()
*/

//exercise3:
//objects in array, with 3 users
var users = [
  {
    name: "Sarah Smith",
    id: 1,
    career: "Doctor",
    degree: "MBA",
    age: 28,
    display: function () {
      console.log(`Greetings from ${this.name}`);
    },
  },
  {
    name: "Nick Jonas",
    id: 2,
    career: "Singer",
    degree: "Msc",
    age: 30,
    display: function () {
      console.log(`Greetings from ${this.name}`);
    },
  },
  {
    name: "Sayne Lockwood",
    id: 3,
    career: "Teacher",
    degree: "MBA",
    age: 22,
    display: function () {
      console.log(`Greetings from ${this.name}`);
    },
  },
];
function displayCareer(arr) {
  arr.forEach((e) => {
    console.log(e.name, ", has id: ", e.id, " and career as: ", e.career);
  });
}
displayCareer(users);
