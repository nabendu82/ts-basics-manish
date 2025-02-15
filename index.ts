//Number
let myNum = 10;
let anotherNum: number = 20;

myNum = 12;
myNum = '12';

anotherNum = 30;
anotherNum = false;

//String
let myStr: string = 'Hello';
let anotherStr = 'World';

myStr = true;
anotherStr = 43;

//Boolean
let myBool: boolean = true;
let anotherBool = false;

myBool = 'true';
anotherBool = 78;

//Object
const developer = {
    firstName: 'Nabendu',
    lastName: 'Biswas',
    age: 42,
    isDev: true
}

const newDeveloper: { firstName: string; age: number, isDev: boolean } = {
    firstName: 'Mousam',
    age: 42,
    isDev: true
}

newDeveloper.age = "Fifty";
newDeveloper.name = "Mausam";

//Arrays
const languages = ['React', 'Angular', 'Vue'];
languages.push('Svelte');
languages.push(45);

const numbers: number[] = [43, 56, 78];
numbers.push(88);
numbers.push(true);

//array of objects
const arrOfObj: { name: string; age: number }[] = [
    { name: 'Mausam', age: 42 },
    { name: 'Nabendu', age: 42 },
]

arrOfObj.push({ name: 'Shikha', age: 39 });

//Functions
const addNums = (num1, num2) => {
    return num1 + num2;
}

addNums(10, 20);
addNums(10, '20');

const multiNums = (num1: number, num2: number) => {
    return num1 * num2;
}

multiNums(10, 20);
multiNums(10, '20');

const modNums = (num1: number, num2: number): number => {
    // return num1 % num2;
    return num1 > num2;
}

modNums(30, 20);
modNums(10, '20');

const printNum = (num1: number, num2: number): void => {
    console.log(num1 + num2)    
}

printNum(30, 20);
