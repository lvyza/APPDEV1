//array methods

const students = [
  { name: "Luisa", grade: 88 },
  { name: "Jean", grade: 95 },
  { name: "LJ", grade: 42 },
];
 
const passing = students.filter(s => s.grade >= 60);
console.log(passing.map(s => s.name)); // ["Luisa", "Jean"]
 
const jean = students.find(s => s.name === "Jean");
console.log(jean); // { name: "Jean", grade: 95 }
 
console.log(students.some(s => s.grade < 60)); // true
console.log(students.every(s => s.grade >= 60)); // false
 
const ranked = [...students].sort((a, b) => b.grade - a.grade);
console.log(ranked.map(s => s.name)); // ["Jean", "Luisa", "LJ"]
