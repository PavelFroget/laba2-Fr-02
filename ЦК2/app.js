//Task 1
//���������� ������
function getMedian(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    }
    else {
        return sorted[mid];
    }
}
const numbers = [3, 1, 4, 1, 5, 9];
console.log(getMedian(numbers));
//����������
function countNonZeroInRange(matrix, min, max) {
    if (matrix.length === 0) {
        return 0;
    }
    let count = 0;
    for (let row of matrix) {
        for (let value of row) {
            if (value !== 0 && value >= min && value <= max) {
                count++;
            }
        }
    }
    return count;
}
const matrix = [
    [0, 5, -3],
    [4, 0, 9],
    [-7, 8, 0]
];
const min = -5;
const max = 10;
console.log(countNonZeroInRange(matrix, min, max));
function multiplyNumbers(tuple) {
    const num1 = myTuple[0];
    const num2 = myTuple[2];
    return num1 * num2;
}
const myTuple = [5, "example", 3];
console.log(multiplyNumbers(myTuple));
//Task 3
var Vitamin;
(function (Vitamin) {
    Vitamin["A"] = "A";
    Vitamin["B3"] = "B3";
    Vitamin["D"] = "D";
    Vitamin["B12"] = "B12";
})(Vitamin || (Vitamin = {}));
const selectedVitamin = Vitamin.D;
console.log(`Vitamin: ${selectedVitamin}`);
//Task 4
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
const Sharik = new Dog();
const Mishka = new Cat();
function printPetInfo(pet) {
    console.log("Name:", pet.name);
    console.log("Age:", pet.age);
    console.log("Speaking:", pet.speak());
}
printPetInfo(Sharik);
printPetInfo(Mishka);
//Task 5
var Type;
(function (Type) {
    Type["A"] = "A";
    Type["B3"] = "B3";
    Type["D"] = "D";
    Type["B12"] = "B12";
})(Type || (Type = {}));
const VitaminD = {
    type: Type.D,
    origin: "Sun",
    price: 500
};
console.log(JSON.stringify(VitaminD, null, 2));
//# sourceMappingURL=app.js.map