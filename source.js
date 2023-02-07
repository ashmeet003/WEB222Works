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
