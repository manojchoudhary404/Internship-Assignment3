// Q4: Count vowels and consonants

let string = 'JavaScript is a great programming language';
let vowelCount = 0;
let consonantCount = 0;
const vowels = 'aeiouAEIOU';

for (let char of string) {
  if (char === ' ') continue;
  if (vowels.includes(char)) {
    vowelCount++;
  } else {
    consonantCount++;
  }
}

console.log(`String: "${string}"`);
console.log(`Vowels: ${vowelCount}`);
console.log(`Consonants: ${consonantCount}`);