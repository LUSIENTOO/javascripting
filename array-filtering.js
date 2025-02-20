const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenValues = values.filter(function isEven (value) {
  return value % 2 === 0
})
console.log(evenValues)
