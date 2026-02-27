// Q3: INDIA → INDONESIA using splice

let str = 'INDIA';
let arr = str.split('');           // ['I','N','D','I','A']
arr.splice(3, 1, 'O', 'N', 'E', 'S', 'I', 'A'); // replace index 3 onward
let result = arr.join('');
console.log(result); // INDONESIA