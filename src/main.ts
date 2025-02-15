type DeveloperNewType = {
    name: string;
    age: number;
    isDev: boolean;
}

const person5: DeveloperNewType = {
    name: 'Mousam',
    age: 42,
    isDev: true
}

console.log(`${person5.name} is ${person5.age} year's old and is a ${person5.isDev} developer`);

type PersonNewName = string;
const person6: PersonNewName = 'Nabendu';

console.log(`New Developer is ${person6}`);

