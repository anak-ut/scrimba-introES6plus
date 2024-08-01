//  sets is unique list
const exampleSets = new Set([1,1,1,1,1,2,2,2,2,2]);
console.log(exampleSets);
console.log(exampleSets.size);
console.log(exampleSets.add(77));
console.log(exampleSets, 'dengan ukuran:',exampleSets.size);
console.log(exampleSets.has(99));
console.log(exampleSets.clear());

// size, add,has, clear, adalah properti dari Set