const ticketFare = document.querySelector('#ticket-fare').addEventListener('click', () => {
   let age = prompt("Enter your Age")
   let price = 800

   if (age < 10) {
      price = 0
   }
   else if (age >= 10 && age < 30) {
      price -= price * 50/100
   }
   else if (age >= 60) {
      price -= price *15/100
   }
   console.log(`Your ticket price is ${price}`)
})


export default ticketFare