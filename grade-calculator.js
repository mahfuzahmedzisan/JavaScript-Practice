const gradeCalculator = document.querySelector("#grade").addEventListener('click', () => {
   let mark = prompt("Enter your Mark")
   let grade = ""
   if (mark <= 100 && mark >= 90) {
      grade = "A"
   } else if (mark <= 89 && mark >= 80) {
      grade = "B"
   } else if (mark <= 79 && mark >= 70) {
      grade = "C"
   } else if (mark <= 69 && mark >= 60) {
      grade = "D"
   } else if (mark <= 59 && mark >= 0) {
      grade = "F"
   } else {
      console.log("Invalid Mark")
   }
   console.log(`Your Grade is ${grade}`)
})

export default gradeCalculator