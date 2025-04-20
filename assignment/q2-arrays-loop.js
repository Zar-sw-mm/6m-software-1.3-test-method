/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = [
  "Johnson",
  "Christina",
  "Michael",
  "Lina",
  "Larry",
  "Michelle",
  "Bob",
  "Wilson",
];

function printStudentNames() {
  // Add code here
  let sz = studentList.length;
  for (let i = 0; i < sz; i++) {
    console.log(studentList[i]);
  }
}

printStudentNames();

// Ignore the code below this line
module.exports = {
  studentList,
  printStudentNames,
};

/*
Ref link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
*/
