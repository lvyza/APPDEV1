//objects

const aboutMe = {
    name: "Luisa",
    age: 20,
    course: "BSIS",

    introduce() {
        console.log(
            `Hi! I'm ${this.name}, I'm ${this.age} years old, and I study ${this.course}.`
        );
    }
};


aboutMe.hobby = "Watching drama series";
aboutMe.introduce();

console.log("My hobby:", aboutMe.hobby);
console.log(aboutMe);