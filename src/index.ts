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


//Union Types
let numOrStr: number | string;
numOrStr = 10;
numOrStr = 'Ten';

let arr: (number | string)[] = [10, 'Ten', false];

//Literal types
let myLiteral: 'Nabendu' | 'Mousam' | 'Shikha' | 'Hriday' = 'Nabendu';
myLiteral = 'Parag';

//Enum
enum Role { ADMIN, READ_ONLY, AUTHOR };
const myRole = Role.ADMIN;
const hridayRole: Role = Role.AUTHOR;

//Optionals
let optionalObj: { name: string; age: number | undefined } = {
    name: 'Nabendu',
    age: undefined
}

let betterObj: { name: string; age?: number} = {
    name: 'Nabendu'
}

//Interfaces
interface Developer {
    name: string;
    age: number;
    isDev: boolean;
}

const person1: Developer = {
    name: 'Nabendu',
    age: 42,
    isDev: true
}

const person2: Developer = {
    name: 'Shikha',
    age: 42,
    isDev: false
}

//Types
type DeveloperType = {
    name: string;
    age: number;
    isDev: boolean;
}

const person3: DeveloperType = {
    name: 'Mousam',
    age: 42,
    isDev: true
}

type PersonName = string;
const person4: PersonName = 'Nabendu';

type CoderType = {
    name: string;
    category: 'frontend' | 'backend' | 'mobile';
    age: number;
}[];

const coder1: CoderType = [
    { name: 'Nabendu', category: 'frontend', age: 42 },
    { name: 'Robin', category: 'mobile', age: 42 }
]
