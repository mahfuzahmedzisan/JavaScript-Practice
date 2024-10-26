let count = 5

for (let i = 0; i <= count; i++) {
   let star = ''
   for (let j = 0; j <= i; j++) {
      star += '*'
   }
   console.log(star)
}
for (let i = 0; i <= count; i++) {
   let star = ''
   for (let k = 0; k <= count - i; k++) {
      star += ' '
   }
   for (let j = 0; j <= 2 * i; j++) {
      star += '*'
   }
   console.log(star)
}


for (let i = 2; i <= 20; i++) {
   let isPrime = true
   for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
         isPrime = false
         break
      }
   }
   if (isPrime) {
      console.log(`Prime Number is ${i}`)
   }
}

let num = 20
let fact = 1
for (let i = 1; i <= num; i++) {
   fact *= i
}
console.log(`Factorial Number of ${num} is ${fact}`)

let fib = 50
let f0 = 0
let f1 = 1
for (let i = 2; i <= fib; i++) {
   let temp = f0 + f1
   f0 = f1
   f1 = temp
}
console.log(`Fabinacco Sequence of ${fib} is ${f1}`)

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
   if (i == 5) {
      continue;
   }
   console.log(array[i]);
}

const str = "Hello";
str[0] = "h";
console.log(str);