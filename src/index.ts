import createCylinder from '@gabriel/cylinder';

let diameter: number;
let depth: number;

diameter = +process.argv[2] || 1;
depth = +process.argv[3] || 2;

console.log(diameter, depth);
const cylinder1 = createCylinder(diameter, depth);

console.log(`Diameter: ${cylinder1.diameter}`);
console.log(`Depth: ${cylinder1.depth}`);
console.log(`Area: ${cylinder1.area()}`);
console.log(`Volume: ${cylinder1.volume()}`);

