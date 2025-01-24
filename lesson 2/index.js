// Question 1 :
// let arr = [1, 12, 6, 31, 7, 9, 3, 5, 0];
// let d = 3;
// (function Question1(arr, d) {
//     const result = arr.filter((num) => num % d === 0 && num !== 0)
//     console.log(result)
// })(arr, d)

//Output :
// [ 12, 6, 9, 3 ]

// Question 2 :
// let array = [4, 3, 6, 7, 21, 11, 15, 5]
// function Question2(num) {
//     if (num <= 1) return false
//     for (i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// (function isPrime(){
//     const result = array.filter(Question2)
//     console.log(result)
// })()
// Output: 
// [ 3, 7, 11, 5 ]

// Question 3 :
//Example 1
// let arr = [1,2,3,4,5,6]
// let a1 = arr.slice(0,3)
// let a2 = arr.slice(3,6)
// console.log('a1:',a1,'a2:',a2)
//Output :
// a1: [ 1, 2, 3 ] a2: [ 4, 5, 6 ]

//Example 2
// let arr = [9,2,5,7,3,8,9,0]
// let a1 = arr.slice(0,4)
// let a2 = arr.slice(4,9)
// console.log('a1:',a1,'a2:',a2)
//Output :
// a1: [ 9, 2, 5, 7 ] a2: [ 3, 8, 9, 0 ]

// Question 4 :
//Example 1
// let a1 = [1, 2, 3, 4]
// let a2 = [5, 6, 7]
// let arr = []
// console.log(arr.concat(a1, a2))
//Output :
// [ 1, 2, 3, 4, 5, 6, 7 ]

//Example 2
// let a1 = [0, 7, 1, 4]
// let a2 = [10, 4, 2, 6, 7]
// let arr = []
// console.log(arr.concat(a1, a2))
//Output :
// [ 0, 7, 1, 4, 10, 4, 2, 6, 7 ]

// Question 5 :
//Example 1
// let a1 = [6,3,5,2,7,6]
// let d=6
// console.log(a1.filter((num)=>num===d).length)
//Output :
// 2

//Example 2
// let a1 = [1,1,1,1]
// let d=1
// console.log(a1.filter((num)=>num===d).length)
//Output :
// 4

// Question 6 :
//Example 1
// let a1 = [1, 5, 7, 8, 9]
// let arr = a1.slice().sort()
// console.log(JSON.stringify(a1) == JSON.stringify(arr))
//Output :
// true

//Example 2
// let a1 = [1,2,6,3]
// let arr = a1.slice().sort()
// console.log(JSON.stringify(a1)===JSON.stringify(arr))
//Output :
// false