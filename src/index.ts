import createCylinder from 'cylinder';

let diameter: number;
let depth: number;

diameter = +process.argv[2] || 1;
depth = +process.argv[3] || 2;

const cylinder1 = createCylinder(diameter, depth);

console.log('Diameter: %d', cylinder1.diameter);
console.log('Depth: %d', cylinder1.depth);
console.log('Round face area: %d', cylinder1.area());
console.log('Volume: %d', cylinder1.volume());

