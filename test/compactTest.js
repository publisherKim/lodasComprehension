import compact from '../compact.js';
const result = compact([0, 1, false, 2, '', 3]);
console.log("expeted value: [1, 2, 3] : ", result);

const result1 = compact([]);
console.log("expeted value: []", result1);
