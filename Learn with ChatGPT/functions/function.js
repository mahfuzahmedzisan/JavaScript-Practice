function sayHello(name) {
   return `Hello, ${name}!`;
}
console.log(sayHello("Mahfuz"))

let car = {
   brand: "Toyota",
   model: "Corolla",
   getInfo: function () {
      return this.brand + " " + this.model
   }
}

console.log(car.getInfo())

function calculateArea(length, width) {
   return length * width
}

console.log(calculateArea(20,26))

let student = {
   name: "Mahfuz",
   age: 20,
   getDetails: function () {
      return this.name + " is " + this.age + " years old"
   }
}
console.log(student.getDetails())