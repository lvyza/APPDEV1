//classes and inheritance

class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

class Student extends Person {
    constructor(name, province) {
        super(name);
        this.province = province;
    }

    study() {
        console.log(`${this.name} is studying in ${this.province}.`);
    }
}

const student = new Student("Luisa", "Pampanga");

student.sayHello();
student.study();