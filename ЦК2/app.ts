

//Task 1
//Одномерный массив
function getMedian(numbers: number[]): number | null {
    if (numbers.length === 0) {
        return null;
    }
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}

const numbers = [3, 1, 4, 1, 5, 9];
console.log(getMedian(numbers)); 

//Двухмерный
function countNonZeroInRange(
    matrix: number[][],
    min: number,
    max: number
): number {
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

//Task 2

type MyTuple = [number, string, number];

function multiplyNumbers(tuple: MyTuple): number {
    const num1 = myTuple[0];
    const num2 = myTuple[2];
    return num1 * num2; 
}

const myTuple: MyTuple = [5, "example", 3];
console.log(multiplyNumbers(myTuple)); 

//Task 3

enum Vitamin { A = "A", B3 = "B3",D = "D",B12 = "B12"}

const selectedVitamin: Vitamin = Vitamin.D;
console.log(`Vitamin: ${selectedVitamin}`);

//Task 4

class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}
const Sharik = new Dog();
const Mishka = new Cat();

function printPetInfo<T extends Pet>(pet: T): void {
    console.log("Name:", pet.name);
    console.log("Age:", pet.age);
    console.log("Speaking:", pet.speak());
}
printPetInfo(Sharik);
printPetInfo(Mishka); 


//Task 5
enum Type {
    A = "A",
    B3 = "B3",
    D = "D",
    B12 = "B12"
}
interface VitaminType {
    type: Type;
    origin: string; 
    price: number; 
}
const VitaminD: VitaminType = {
    type: Type.D,
    origin: "Sun",
    price: 500
};
console.log(JSON.stringify(VitaminD, null, 2));