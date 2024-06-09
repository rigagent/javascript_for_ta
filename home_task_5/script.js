// Subtask #1

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web development"
};

console.log(`The number of object properties is: ${propsCount(mentor)}`);



// Subtask #2

let myObject = {
    name: "Sergey",
    age: 25,
    city: "Kyiv",
    hobby: "Reading",
    profession: "Software Engineer"
};

function showProps(obj) {
    let propsArray = [];
    let valuesArray = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            propsArray.push(key);
            valuesArray.push(obj[key]);
        }
    }
    return [propsArray, valuesArray];
}

let [props, values] = showProps(myObject);
console.log("Properties:", props);
console.log("Values:", values);



// Subtask #3

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(middleName) {
        return `${this.name} ${middleName} ${this.surname}`;
    }

    showCourse() {
        let currentYear = new Date().getFullYear();
        let course = currentYear - this.year;
        return Math.min(Math.max(1, course), 6);
    }
}

const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log(`Current course: ${stud1.showCourse()}`);



// Subtask #4

class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this._experience = 1.2;
    }

    showSalary() {
        let salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} has ${salary} salary`);
        return salary;
    }

    showSalaryWithExperience() {
        let salary = this.dayRate * this.workingDays * this._experience;
        console.log(`${this.fullName} has ${salary} salary with experience`);
        return salary;
    }

    get showExp() {
        return this._experience;
    }

    set setExp(value) {
        this._experience = value;
    }

    static sortWorkersBySalary(workers) {
        workers.sort((a, b) => {
            return a.showSalaryWithExperience() - b.showSalaryWithExperience();
        });

        console.log("\nSorted salary:");
        workers.forEach(worker => {
            console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
        });
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Thomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

Worker.sortWorkersBySalary([worker1, worker2, worker3]);



// Subtask #5

class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    getArea() {
        return 0.5 * this.base * this.height;
    }
}

class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

function handleFigures(figures) {
    let totalArea = figures.reduce((total, figure) => {
        if (figure instanceof GeometricFigure) {
            let area = figure.getArea();
            console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);
            return total + area;
        }
        return total;
    }, 0);
    return totalArea;
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));
