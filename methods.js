const student = {
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
         return `${this.name} is re participate in another exam: ` ;
    }, 
    
};
const output = student.exam();
// console.log(output);
const reExam = student.improve();
