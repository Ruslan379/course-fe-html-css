// console.log('10.Практика:');
console.log(
  "%c 10.Практика: ",
  "color: white; background-color: #D33F49",
);

//! ПРАКТИКА-10 (Урок-10_JS)
//todo [1]
console.log(
  "%c [1] ",
  "color: yellow; background-color: #2274A5",
);
//? Замінити в функції "Приготування меленої кави"
//? функцію "Приготування меленої кави" та
//? функцію "Приготування окропу (гарячої води)"
//? на стрілкові функції та використати їх як колбеки.
console.log("-----------------------------------------");


//todo [2]
console.log(
  "%c [2] ",
  "color: yellow; background-color: #2274A5",
);
//? Замінити в функції "Приготування меленої кави"
//? функцію "Приготування меленої кави" та
//? функцію "Приготування окропу (гарячої води)"
//? на анонімні стрілкові функції з неявним поверненням
//? та використати їх як колбеки.
console.log("-----------------------------------------");


//todo [3]
console.log(
  "%c [3] ",
  "color: yellow; background-color: #2274A5",
);
//? Привести масив array1 до маленьких літер,
//? привести масив array2 до великих літер,
//? поєднати array1 та array2 в arrayAll
const array1 = ["A1", "B1", "C1"]
const array2 = ["a2", "b2", "c2"]
console.log("array1:", array1);
console.log("array2:", array2);
console.log("........................................");

// todo:1 --------------------------------------
function arrayAll(arr1, arr2, callback1, callback2) {
  //* callback1 це toLowerCase
  //* callback2 це toUpperCase
  //* arr1 це array1
  //* arr2 це array2

  const result1 = callback1(arr1)
  console.log("result1:", result1)
  const result2 = callback2(arr2)
  console.log("result2:", result2)

  const arrayAll = result1.concat(result2)
  return arrayAll
}

function toUpperCase1(arr) {
  // console.log("вхідний масив:", arr) 
  const resultJoin = arr.join(" ")
  // console.log("resultJoin:", resultJoin)

  const resultToUpper = resultJoin.toUpperCase()
  // console.log("resultToUpper:", resultToUpper)

  const resultArray = resultToUpper.split(" ")
  // console.log("resultArray:", resultArray)
  return resultArray
}

// const result2 = toUpperCase(array2)
// console.log("result2:", result2)

function toLowerCase1(arr) {
  const resultJoin = arr.join(" ")
  // console.log("resultJoin:", resultJoin)

  const resultToLower = resultJoin.toLowerCase()
  // console.log("resultToLower:", resultToLower)

  const resultArray = resultToLower.split(" ")

  // console.log("resultArray:", resultArray)

  return resultArray
}

// const result3 = toLowerCase(array1)
// console.log("result3:", result3)

const result11 = arrayAll(array1, array2, toLowerCase1, toUpperCase1)
console.log("result11:", result11)  //["a1", "b1", "c1", "A2", "B2", "C2" ]



// todo:2 --------------------------------------
function toUpperCase2(arr) {

  // return resultArray
}

// const result2 = toUpperCase(array2)
// console.log("result2:", result2)

function toLowerCase2(arr) {

  // return resultArray
}

// const result3 = toLowerCase(array1)
// console.log("result3:", result3)


// const result22 = arrayAll(array1, array2, toLowerCase2, toUpperCase2)
// console.log("result22:", result22)  //["a1", "b1", "c1", "A2", "B2", "C2" ]

console.log("-----------------------------------------");