function fetchUserData(callback) {
   console.log(`Fetching user data....`)
   callback()
}

fetchUserData(() => {
   console.log("User Data Recived")
})