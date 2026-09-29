//tricky parts

let firstValue;
let secondValue = null;

console.log("firstValue:", firstValue);
console.log("secondValue:", secondValue);

console.log("undefined == null:", firstValue == secondValue);
console.log("undefined === null:", firstValue === secondValue);


const student = {
    name: "Luisa",

    regularMethod: function () {
        console.log("Regular function this.name:", this.name);
    },

    arrowMethod: () => {
        console.log("Arrow function this.name:", this.name);
    }
};

student.regularMethod();
student.arrowMethod();


const originalHobbies = ["Watching series", "Gaming", "Listening to music"];

const referenceCopy = originalHobbies;
const spreadCopy = [...originalHobbies];

referenceCopy.push("Reading");

console.log("Original after reference copy changes:", originalHobbies);
console.log("Reference copy:", referenceCopy);
console.log("Spread copy:", spreadCopy);