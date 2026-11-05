// // let message:string="Hello, Typescript!";
// // console.log(message);

// // let age:number=20;
// // console.log(age);

// // //string
// // let firstname:string="Ajay";
// // let greeting:string=`Hello,${firstname}`;
// // console.log(greeting);

// // //number
// // let mark:number=24;
// // let pi:number=3.14;
// // console.log(mark,pi);

// // //boolean
// // let isLoggedIn:boolean=true;
// // console.log(isLoggedIn);

// // //array
// // //array creation using generic type
// // let numbers:Array<number>=[1,2,3,4];
// // console.log(numbers);

// // //array creation using square brackets
// // let marks:number[]=[40,30,50];
// // console.log(marks);

// // let names:string[]=["Anu","Akhil","Aswathy"];
// // console.log(names);

// // //tuple
// // let user:[string,number]=["Ani",25];
// // console.log(user);

// // //enum
// // enum Color{
// //     Red,Green,Blue
// // }

// // let mycoloe:Color=Color.Green;
// // console.log(mycoloe);

// // //any
// // let value:any="Ali";
// // value=42;
// // console.log(value);


// // //unknown
// // let result:unknown="Hello";
// // // result.toUpperCase() not work
// // if(typeof result==='string'){
// //     console.log(result.toUpperCase());
// // }

// // //void
// // function logMessage(message:string):void{
// //     console.log(message);
    
// // }
// // logMessage("Hello Typescript")


// // //null(intentionaly not assigning),undefined(value not initialized)
// // let value1:null=null;
// // let anotherValue:undefined=undefined;
// // console.log(value1,anotherValue);

// // //never (returns nothing,but gives error)
// // function throwError(message:string):never{
// //     throw new Error(message);
// // }

// // let name:string="Ajay";
// // let age:number=23;
// // let isActive:boolean=true;

// // let products:string[]=["laptop","mobile","keyword"]
// // console.log(products);

// // function greet(name:string):string
// // {
// //     return `Hello,${name}`;
// // }
// // const result=greet('ashtami');
// // console.log(result);

// // function add(x:number,y:number):number{
// //     return x+y;
// // }
// // console.log(add(50,60));

// // function greet(name?:string):string{
// //     return name?`Hello,${name}`:"Hello!";
// // }
// // console.log(greet('Keerthi'));
// // console.log(greet());

// // function greet(name:string="guest"):string{
// //     return `welcome,${name}`;
// // }
// // console.log(greet("Ajay"));
// // console.log(greet());

// // function isEven(num:number):boolean{
// //     return num%2==0;
// // }
// // console.log(isEven(4));
// // console.log(isEven(5));

// // const multiply=(a:number,b:number):number=>{
// //     return a*b;
// // }
// // console.log(multiply(2,4));

// // const square=(a:number):number=>a*a;

// // console.log(square(4));

// // type MathOp=(a:number,b:number)=>number;
// // const divide:MathOp=(x,y)=>x/y;
// // console.log(divide(4,2));


// // interface User{
// //     name:string,
// //     age:number,
// //     isActive:boolean
// // }

// // const user1:User={
// //     name:"Ajay",
// //     age:20,
// //     isActive:true
// // }

// // console.log(user1);

// // interface Product{
// //     name:string,
// //     price:number,
// //     description?:string
// // }

// // const product1:Product={
// //     name:"Laptop",
// //     price:50000
// // }
// // console.log(product1);

// // interface Student{
// //     readonly id:number,
// //     name:string,
// //     age:number
// // }

// // const student:Student={
// //     id:101,
// //     name:"Rahul",
// //     age:13
// // }

// // console.log(student);

// // student.name="Keerthi";
// // student.age=28;
// // //student.id=102;
// // console.log(student);

// //extending interface
// // interface Person{
// //     name:string,
// //     age:number
// // }

// // interface Employee extends Person{
// //     employeeId:number,
// //     salary:number
// // }
// // const employee:Employee={
// //     name:"Keerthi",
// //     age:28,
// //     employeeId:101,
// //     salary:30000,
// // }
// // console.log(employee);

// //type aliases
// // type Student={
// //     name:string,
// //     age:number
// // }

// // const student:Student={
// //     name:"Rahul",
// //     age:17
// // }
// // console.log(student);


// // let value:string |number;
// // value="kochi";
// // value=42;

// type Status="success"|"error"|"loading";
// let currentStatus:Status="success";
// currentStatus="loading";
// currentStatus="error";
// // currentStatus="pending";//error

// //intersection
// // type Person={
// //     name:string,
// //     age:number
// // }

// // type Employee={
// //     employeeId:number,
// //     salary:number
// // }
// // type EmployeeDetails=Person & Employee;
// // const emp1:EmployeeDetails={
// //     name:"Anjali",
// //     age:30,
// //     employeeId:101,
// //     salary:50000
// // }
// // console.log(emp1);

// // class
// // class Person{
// //     name:string;
// //     age:number;
// //     constructor(name:string,age:number){
// //         this.name=name;
// //         this.age=age;
// //     }
// //     greet():string{
// //         return `Hello my name is ${this.name} and age is ${this.age}`
// //     }
// // }

// // const person1=new Person("Alice",24);
// // console.log(person1.greet());

// //access modifiers
// //public = accessed by anywhere

// // class Student{
// //     public name:string;
// //     constructor(name:string){
// //         this.name=name;
// //     }
// //     display():void{
// //         console.log(this.name);
// //     }

// // }

// // const st1=new Student("Anjali");
// // st1.display();
// // console.log(st1.name);

// //private
// // class BankAccount{
// //     private balance:number=10000;
// //     showBalance():void{
// //         console.log(this.balance);
        
// //     }
// // }
// // const account=new BankAccount();
// // account.showBalance();
// // console.log(account.balance);


// //protected
// // class Person{
// //     protected name:string;
// //     constructor(name:string){
// //         this.name=name;
// //     }
// // }

// // class Student extends Person{
// //     displayName():void{
// //         console.log(this.name);
        
// //     }
// // }
// // const st1=new Student("Ajay");
// // st1.displayName();
// // console.log(st1.name);

// // //static members
// // class MathUtils{
// //     static pi:number=3.14;
// //     static square(a:number):number{
// //         return a*a;
// //     }
// // }

// // const mu1=new MathUtils();
// // console.log(MathUtils.square(4));


// //iNHERITANCE
// class Animal{
//     public name:string;
//     constructor(name:string){
//         this.name=name;
//     }
//     makeSound():string{
//         return `${this.name} makes sound`;
//     }
// }

// class Dog extends Animal{
//     bark():string{
//         return `${this.name} barks`
//     }
// }

// const dog= new Dog("Buddy");
// console.log(dog.makeSound());
// console.log(dog.bark());


// import {add,pi} from "./mathUtils.js";
// console.log(add(5,5));
// console.log(pi);


//import with alias
// import {add as sum,pi} from "./mathUtils.js";

import * as MathUtils from "./mathUtils.js";
// console.log(MathUtils.add(5,5));
// console.log(MathUtils.pi);
// console.log(MathUtils.subtract(5,3));

// import subtract from './mathUtils.js';
// console.log(subtract(5,3));


// import diff from "./mathUtils.js";
// console.log(diff(5,3));

//array
// let marks:number[]=[20,23,24,25];
// let fruits:string[]=["banana","apple","orange"]
// console.log(marks);
// console.log(fruits);

// let weight:Array<number>=[50,56,45,67,23,34];
// let names:Array<string>=["anu","minu"];

// marks.push(40);
// console.log(marks[0]);

// fruits[1]="pineapple";
// console.log(fruits);

// let doubled=marks.map(n=>n*2);
// console.log(doubled);

// let uppercase=fruits.map(fruit=>fruit.toUpperCase());
// console.log(uppercase);

// let result=weight.filter(w=>w>30)
// console.log(result);

// fruits.forEach(fruit=>console.log(fruit));

//tuples
// let person:[string,number]=["Alice",27]
// let  name=person[0];
// let age=person[1];

// console.log(name);
// console.log(age);

// // let user:[string,number?,boolean?]=["naina",20,true];

// let user:[string,number?,boolean?]=["naina"];

//Generics
// function identity<T>(value:T):T{
//     return value;
// }

// let result=identity<string>("Hello");
// console.log(result);

// let numResult=identity<number>(25);
// console.log(numResult);

// let result1=identity(true);
// console.log(result1);

//Generic Arrays
// function printArray<T>(arr:T[]):void{
//     arr.forEach(item=>console.log(item));
    
// }

// printArray([1,2,3,4])
// printArray(["apple","banana","orange"])

//generic interfaces
// interface Box<T>{
//     value:T
// }

// let box1:Box<number>={value:42};
// let box2:Box<string>={value:"Hello"};

// console.log(box1);
// console.log(box2);

//generic classes

// class container<T>{
//     constructor(public value:T){}
//     getValue():T{
//         return this.value;
//     }
// }

// let stringContainer=new container("Hello")
// let numberContainer=new container(1234);
// console.log(stringContainer.getValue());
// console.log(numberContainer.getValue());

//Generic swap function
// function swap<T>(arr:T[],index1:number,index2:number):T[]{
// let temp=arr[index1]!;
// arr[index1]=arr[index2]!;
// arr[index2]=temp;

// return arr;
// }
// console.log(swap<number>([0,20,30],0,2));
// console.log(swap<string>(["Apple","Banana","Mango"],0,1));

//Generic Queue class
// class Queue<T>{
//     values:T[]=[];
//     enqueue(item:T):void{
//         this.values.push(item);
//     }
//     dequeue():T|undefined{
//        return this.values.shift();
//     }
// }

// let numberQueue=new Queue<number>();
// numberQueue.enqueue(10);
// numberQueue.enqueue(20);
// numberQueue.enqueue(30);
// console.log(numberQueue);

// let stringQueue=new Queue<string>();
// stringQueue.enqueue("Apple")
// stringQueue.enqueue("Mango")
// console.log(stringQueue);

// console.log(numberQueue.dequeue());
// console.log(stringQueue.dequeue());

//Generic function with a constraint
// function checkLength<T extends {length:number}>(item:T):number{
//     return item.length;
// }
// console.log(checkLength("Hello"));
// console.log(checkLength([1,2,3]));

//default values in array
// function wrapInArray<T=string>(value:T):T[]{
//     return [value]
// }
// console.log(wrapInArray(42));
// console.log(wrapInArray('test'));

//type aliases

// type Person={
//     name:String,
//     age:number
// }

// const user:Person={
//     name:"Ajay",
//     age:45
// }

// console.log(user);

// const student:Person={
//     name:"Ali",
//     age:20
// }

// console.log(student);

// // function type aliases
// type AddFunction=(a:number,b:number)=>number;
// const add:AddFunction=(a,b)=>a+b;
// console.log(add(5,6));

//union typescripts
// let value:string|number|boolean;
// value="Hello";
// value=42;

// function printId(id:number|string):void{
// console.log("id",id);
// }

// printId(101);
// printId("A101");

// let list:(string|number)[]=["banana",42,"hello",34,24];
// console.log(list);
//union  type guard

// let list:(string|number)[]=["banana",42,"hello",34,24];
// console.log(list);

// type StringOrNumber=string|number;

// let value1:StringOrNumber;
// value1=12;
// value1="hello";

// function printLength(value:string|number):void {

//     if(typeof value==="string"){
//         console.log(value.length);
        
//     }
//     else{
//         console.log("Number have no length");
        
//     }
    
// }

// printLength("Hello");
// printLength(123);


//using instances
// class Person1{
//     constructor(public name:string){

//     }
// }

// class Dog{
//     constructor(public breed:string){

//     }
// }

// function printInfo(animal:Person1|Dog):void{
//     if(animal instanceof Person1){
//         console.log(`Person:${animal.name}`);
//     }
//     else if(animal instanceof Dog){
//         console.log(`Breed:${animal.breed}`);
//     }
//     else{
//         console.log("invalid");
        
//     }
// }

// const person=new Person1("anjali");
// const dog=new Dog("LAb");

// printInfo(person);
// printInfo(dog);

// intersection
// type Employee={
//     name:string,
//     role:string;
// }

// type Contact={
//     email:string,
//     phone:string
// }

// type EmployeeWithContact= Employee & Contact;

// const employee:EmployeeWithContact={
//     name:"alice",
//     role:"Developer",
//     email:"alice@gmail.com",
//     phone:"123456789"
// }
// console.log(employee);


//literal types
let direction:'left'|'right';
direction="left";
direction="right";

let code:42|45;
code=42;
code=45;

//index types

// type Person={
//     name:string,
//     age:number
// };

// type PersonKey=keyof Person;//'name'|'age'(the keys of Person)
// let key:PersonKey;
// key='name';
// key='age';

//key='address' //error.

//lookup types
// type Person={
//     name:string,
//     age:number
// };
// type NameType=Person['name'];
// let personNAme:NameType="Anju";
// console.log(personNAme);

//conditional types
// type IsString<T>=T extends string?"Yes":"No";
// type Test1=IsString<string>;
// type Test2=IsString<number>;
// const test1:Test1="Yes";
// const test2:Test2="No";
// console.log(test1);
// console.log(test2);


//MApped types
// type Person={
//     name:string,
//     age:number
// }

// type ReadOnlyType={
//     readonly [p in keyof Person]:Person[p];
// }

// //type ReadOnlyType={
// //readonly name:string,
// //readonly age:number
// //}

// const person:ReadOnlyType={
//     name:"manu",
//     age:12
// };
// console.log(person.name);
// console.log(person.age);


//type guards with is
// class Dog{
//     bark(){
//         console.log("woof");
        
//     }
// }

// class Cat{
//     meow(){
//         console.log("meow");
        
//     }
// }

// const animal:Dog|Cat=Math.random()>0.5?new Dog():new Cat;

// if(animal instanceof Dog){
//     animal.bark()
// }else{
//     animal.meow()
// }

// function isDog(animal: Dog|Cat):animal is Dog{
//     return(animal as Dog).bark!== undefined;
// }

// const animal:Dog|Cat=Math.random()>0.5?new Dog():new Cat();
// if(isDog(animal)){
//     animal.bark();
// }else{
//     animal.meow();
// }


type Greeting=`Hello, ${string}`;
let message:Greeting="Hello, Anju";
//let message1:Greeting="hi,anu"

