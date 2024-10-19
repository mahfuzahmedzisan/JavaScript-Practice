let myNumber = 900
let friendNumber = 80
if ((myNumber > 100 || myNumber < 0) || (friendNumber > 100 || friendNumber < 0)) {
   console.log("Invalid Marks")
}
else {
   if (myNumber > 80) {
      if (friendNumber >= 80) {
         console.log("Go for a lunch")
      }
      else if (friendNumber < 80 && friendNumber >= 60) {
         console.log("Good Luck")
      }
      else if (friendNumber < 60 && friendNumber >= 40) {
         console.log("Unseen friend message")
      }
      else {
         console.log("Block My friend")
      }
   }
   else {
      console.log("sad and depress acting")
   }
}