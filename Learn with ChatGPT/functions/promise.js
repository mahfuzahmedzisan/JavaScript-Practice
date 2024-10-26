let checkNumber = new Promise((resolve, reject) => {
   let num = 1
   if (num > 10) {
      resolve("Number is greater than 10")
   }
   else {
      reject("Number is 10 or less")
   }
})

checkNumber.then(result => {
   console.log(result)
}).catch(error => {
   console.log(error)
})