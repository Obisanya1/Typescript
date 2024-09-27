export {}

let greeting = 'Hello World';

let isBeginner : boolean = true;
let name : string = 'Daniel';
let total : number = 50;

let sentence : string = `My name is ${name}, and I just started learning Typescript.`

let n : null = null;
let u : undefined = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1 : [string, number] = ['My name is Daniel', 25]

let myVariable : any = 10;
let myNewVariable : unknown = 10; 

let a;
a = 10;
a = true;

let multiType :number | boolean;
multiType = 20;

function add(num1 :number, num2:number) {
    return num1 + num2;
}
add(4,3);


console.log(greeting);
console.log(sentence);