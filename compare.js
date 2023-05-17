// 1. First way
/* const first = {a: 2};
const second = {a: 2};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
if(firstString === secondString){
    console.log("They are same");
}
else{
    console.log("They are not same");
} */

// 2. Second way

/* const first = { a: 2, c: 3, d: 5 };
const second = { c: 3, b: 5, a: 2 };

function compareObject(first, second) {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  if (firstKeys.length === secondKeys.length) {
    for (const key of firstKeys) {
      if (first[key] !== second[key]) {
        return false;
      }
    }
    return true;
  }
}
const result = compareObject(first, second);
console.log(result);
 */

const first = { a: 2, c: 3, b: 5 };
const second = { c: 3, b: 5, a: 2 };

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for (const key of firstKeys) {
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}
const compare = compareObject(first, second);
console.log(compare);