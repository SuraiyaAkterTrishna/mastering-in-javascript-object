const numbers = [10, 20, 30, 40, 50];
for (const number of numbers) {
    // console.log(number);
}
/* const bottle = {color: 'Yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
for (const key of keys) {
    const value = bottle[key];
    console.log(key,value);

} */

/* bottle.color
bottle['color'] */
const color = 'color'
// console.log(bottle[color]);


const bottle = {color: 'Yellow', price: 50, isCleaned: true, capacity: 1};
for(const key in bottle){
    const value = bottle[key];
    console.log(value);
}