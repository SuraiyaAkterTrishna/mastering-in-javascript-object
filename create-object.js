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
console.log(players);