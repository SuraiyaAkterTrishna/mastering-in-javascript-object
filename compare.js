const first = {a: 2};
const second = {a: 2};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
if(firstString === secondString){
    console.log("They are same");
}
else{
    console.log("They are not same");
}