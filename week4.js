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
