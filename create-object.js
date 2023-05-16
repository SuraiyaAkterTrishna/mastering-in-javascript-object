// create object using object literals
const player = {};
player.name = "Chonchol chowdhury";
player.speciality = "Movie, Natok actor";
player.hero = function(){
    console.log("make good movie");
};
// console.log(player);

const student = {
    name: 'Rony', 
    job: 'Micro biologist', 
    stack: function(){
        console.log("He is a MERN Stack Developer");
    },
    salary: 10000,
};

// 2. object constructor
const players = new Object();
// console.log(players);

// 3. object create method
const item = Object.create(null);
// console.log(item);
const boy = Object.create(student);
// console.log(boy.name);

// 4. class 
class Person{
    name = 'abul';
    address = 'sodor ghat';
    constructor (age){
        this.age = age;
    }
}
const person1 = new Person(56);
console.log(person1);