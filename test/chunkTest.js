import chunk from '../chunk.js';
const result = chunk(['a', 'b', 'c', 'd'], 2);
console.log("기대값 [['a', 'b'], ['c', 'd']] : ", result);
