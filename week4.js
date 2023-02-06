/*
Object: {
    key: value,
    key1: value1,
}

keys inside could be accessed with '.' dot or '['']'bracket

typeof(): used to get to know type of object/variable
delete: to delete data type/ or assign it to null
*/
function funcOb(name, program, college, courses, age) {
  var student = {
    name: name, //also could be simplified to just 'name'
    program: program, //just: program
    college,
    courses,
    age,
  };
  console.log(student);
  console.log(student.name);
  console.log(student["name"]);
  //reassignment
  student.name = "Ashmeet Kaur";
  console.log(student);
  //deletion
  student.program = null;
  console.log(student);
  delete student.program;
  console.log(student);
}

funcOb(
  "Ashmeet Kaur",
  "CPP",
  "Seneca College",
  ["web222", "OOP", "Database", "NAT"],
  19
);

//excercise 2:
function checkGrad(student, course = [], program = "") {
  if (student.hasGraduated)
    console.log(`${student.name} has graduated from ${student.college}`);
  else {
    student.course = course;
    student.program = program;
    console.log(
      student.name,
      " has not graduated and is in ",
      student.program,
      " program"
    );
  }
}
var studentInfo = {
  name: "Ashmeet Kaur",
  college: "Seneca College",
  hasGraduated: false,
};
checkGrad(studentInfo, ["OOP", "WEB", "DBS", "NAT"], "CPP");

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
