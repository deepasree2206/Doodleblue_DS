const students = ["Rijithaa", "Karthi", "Joslin", "YuvaSree", "Deepa"]

// 1. Print the first and last student names
console.log("First student:", students[0]);
console.log("Last student:", students[students.length - 1]);

// 2. Add Karthik to the end of the array
students.push("Karthik");
console.log("After push:", students);

// 3. Remove the last student from the array
students.pop();
console.log("After pop:", students);

// 4. Slice: Create a new array containing Arun, Divya, and Rahul
const selectedStudents = students.slice(1, 4);
console.log("After slice:", selectedStudents);

// 5. Splice: Remove Divya from the original array
students.splice(2, 1);
console.log("After splice:", students);

// 6. Includes: Check whether Priya exists in the array
console.log("Is Priya present?", students.includes("Priya"));