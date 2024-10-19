// Body Mass Index Calculator 
let weight = prompt("Enter your weight in kg: ")
let height = prompt("Enter your height in m: ")
let BMI = weight / (height * height)
if (BMI < 18.5) {
   console.log("Your BMI is " + BMI + " and you are underweight.")
}

else if (BMI >= 18.5 && BMI <= 24.9) {
   console.log("Your BMI is " + BMI + " and you are normal.")
}
else if (BMI >= 25 && BMI <= 29.9) {
   console.log("Your BMI is " + BMI + " and you are overweight.")
}
else {
   console.log("Your BMI is " + BMI + " and you are obese.")
}