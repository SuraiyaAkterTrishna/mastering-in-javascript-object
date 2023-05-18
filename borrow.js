const kodomAli = {
    name: 'Kodom Ali', 
    money: 5000,
    study: 'Math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        // console.log(this.study);
        // console.log(this.name, 'is participating in an exam');
        return this.name + 'is participating in an exam';
    },
    improve: function(subject){
        this.exam();
         return `${this.name} is re participate in another exam: ${subject}` ;
    }, 
    treatDey: function(amount, tax){
        this.money = this.money - amount - tax;
        return this.money;
    }
};
const exam = kodomAli.exam();
// console.log(exam);

const badamAli = {
    name: 'Badam Ali', 
    money: 6000,
};
const result = kodomAli.exam.call(badamAli);
// console.log(result);

const remaining = kodomAli.treatDey.call(badamAli, 1000, 200);
// console.log(remaining);

const remaining2 = kodomAli.treatDey.apply(badamAli, [2000, 500]);
// console.log(remaining2);

const badamAliTreat = kodomAli.treatDey.bind(badamAli);
const rest = badamAliTreat(1000, 500);
console.log(rest);
