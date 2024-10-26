
async function loadData() {
   let promise = new Promise((resolve) => {
      setTimeout(() => resolve("Data loaded"),2000)
   })
   let result = await promise
   console.log(result)
}
loadData()