let diameter: number;
let depth: number;

diameter = +process.argv[2] || 1;
depth = +process.argv[3] || 2;

console.log(diameter, depth);