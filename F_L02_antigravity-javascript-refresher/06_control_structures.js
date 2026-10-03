//control structures

let grade = 88;

if (grade >= 90) {
    console.log("Grade:", grade, "- A");
} else if (grade >= 80) {
    console.log("Grade:", grade, "- B");
} else if (grade >= 70) {
    console.log("Grade:", grade, "- C");
} else {
    console.log("Grade:", grade, "- F");
}



console.log("Numbers from 1 to 5:");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


console.log("Study reminder:");

let count = 1;
while (count <= 3) {
    console.log("Give your best!");
    count++;
}