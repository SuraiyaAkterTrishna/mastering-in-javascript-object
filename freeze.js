const bottle = {color: 'Yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
console.log(keys);

const values = Object.values(bottle);
console.log(values);

const pair = Object.entries(bottle);
console.log(bottle);
Object.seal(bottle);
delete bottle.price;
console.log(bottle);
bottle.price = 1000;
console.log(bottle);
bottle.height = 12;
console.log(bottle);
