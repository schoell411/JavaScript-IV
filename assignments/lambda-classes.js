// CODE here for your Lambda Classes

//Persons
class Person {
  constructor(Per_son) {
    (this.name = Per_son.name),
      (this.age = Per_son.age),
      (this.location = Per_son.location);
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

//Example Persons
const james = new Person({
  name: "James",
  age: 24,
  location: "Lubbock, Texas"
});
console.log(james);
console.log(james.speak());

const samantha = new Person({
  name: "Samantha",
  age: 29,
  location: "Houston, Texas"
});
console.log(samantha);
console.log(samantha.speak());

const ray = new Person({
  name: "Ray",
  age: 18,
  location: "Atlanta, Georgia"
});
console.log(ray);
console.log(ray.speak());

//Instructors
class Instructor extends Person {
  constructor(Instruct_or) {
    super(Instruct_or);
    (this.specialty = Instruct_or.specialty),
      (this.favLanguage = Instruct_or.favLanguage),
      (this.catchPhrase = Instruct_or.catchPhrase);
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(student1, subject) {
    return `${student1} receives a perfect score on ${subject}.`;
  }
}
//Example Instructors
const blake = new Instructor({
  name: "Blake",
  age: 23,
  location: "Tampa, Florida",
  specialty: "JavaScript",
  favLanguage: "French",
  catchPhrase:
    "It's better to have it and not need it, than to need it and not have it."
});
console.log(blake);
console.log(blake.demo('javascript'));
console.log(blake.grade('blake', 'css'))

const jeremy = new Instructor({
  name: "Jeremy",
  age: 35,
  location: "Garland, Texas",
  specialty: "React Native",
  favLanguage: "German",
  catchPhrase: "Kiss my grits."
});

const tony = new Instructor({
  name: "Tony",
  age: 22,
  location: "Indianapolis, Indiana",
  specialty: "Python",
  favLanguage: "Italian",
  catchPhrase: "Dyn-o-mite"
});

//Students
class Student extends Person {
  constructor(Stud_ent) {
    super(Stud_ent);
    (this.previousBackground = Stud_ent.previousBackground),
      (this.className = Stud_ent.className),
      (this.favSubjects = Stud_ent.favSubjects);
  }
  listsSubjects() {
    this.favSubjects.forEach(subject => {console.log(subject)
    });
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun working on the Sprint Challenge for ${subject}.`;
  }
}

//Example Students
const steven = new Student({
  name: "Steven",
  age: 23,
  location: "Milwaukee, Wisconsin",
  previousBackground: "Waiter",
  className: "WEB17",
  favSubjects: ["CSS Imports", "CSS Animations", "JavaScript Classes"]
});
console.log(steven);
console.log(steven.listsSubjects());
console.log(steven.PRAssignment('responsive-I'));
console.log(steven.sprintChallenge('javascript'));

const romero = new Student({
  name: "Romero",
  age: 42,
  location: "San Jose, California",
  previousBackground: "Accountant",
  className: "IOS3",
  favSubjects: ["XCode", "Notifications", "CSS Preprocessing"]
});

const caesar = new Student({
  name: "Caesar",
  age: 18,
  location: "Washington, D.C.",
  previousBackground: "High School Math Teacher",
  className: "WEB23",
  favSubjects: ["HTML", "APIs", "Data Structures"]
});

//Project Managers
class ProjectManagers extends Instructor {
  constructor(Project_Managers) {
    super(Project_Managers);
    (this.gradClassName = Project_Managers.gradClassName),
      (this.favInstructor = Project_Managers.favInstructor);
  }
  standUp(slack_channel) {
    return `${this.name} announces to ${slack_channel}, @channel standup times!`;
  }
  debugsCode(student2, subject) {
    return `${this.name} debugs ${student2}'s code on ${subject}.`;
  }
}

//Example Project Managers
const mike = new ProjectManagers({
  name: "Mike",
  age: 32,
  location: "Seattle, Washington",
  specialty: "JavaScript",
  favLanguage: "French",
  catchPhrase: "Bazinga!",
  gradClassName: "CS4",
  favInstructor: "Fred"
});
console.log(mike);
console.log(mike.standUp('#hired'));
console.log(mike.debugsCode('kevin', 'HTML'))

const mariah = new ProjectManagers({
  name: "Mariah",
  age: 21,
  location: "Phoenix, Arizona",
  specialty: "Algorithms",
  favLanguage: "Czech",
  catchPhrase: "Bang, zoom, straight to the moon!",
  gradClassName: "WEB15",
  favInstructor: "Liam"
});

const sheila = new ProjectManagers({
  name: "Sheila",
  age: 29,
  location: "Los Angeles, California",
  specialty: "Python",
  favLanguage: "Russian",
  catchPhrase: "Clear eyes, full hearts, can't lose.",
  gradClassName: "WEB19",
  favInstructor: "Luke"
});

/*Stretch Problem
Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
Add a graduate method to a student.
This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/
